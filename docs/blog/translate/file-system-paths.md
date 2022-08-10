---
title: Node Path的用法
---

[[toc]]



## 1️⃣ Path相关的功能

本文将探索Node中和Path相关的功能：

- 大多数和path相关的功能都在  `node:path` 模块中
- 全局变量 `process` 上存在 *改变当前工作路径（`current working directory`）* 的方法
- 模块 `node:os` 存在返回重要目录路径的函数

### 1.1 访问 `node:path` API的3种方式

模块 `node:path` 通常通过下面方式导入：

```js
import * as path from 'node:path'
```

本文示例中一般会忽略上面的导入，另外还被忽略的有：

```js
import * as assert from 'node:assert/strict'
```

我们有3种方式访问Node的path API：

1. 我们可以访问 **`平台相关`** 的版本API:

   - `path.posix` 支持Unixes，包括macOS
   - `path.win32` 支持Windows

2. `path` 自身总是支持当前平台，比如，下面是macOS 下的REPL交互

   ```bash
   path.parse === path.posix.parse
   # true
   ```

让我们看看函数 `path.parse()` （用于解析文件系统路径）在不同平台的差异：

```js {1,12}
// 1.Window平台
path.win32.parse(String.raw`C:\Users\jane\file.txt`)
// 输出
{
  dir: 'C:\\Users\\jane',
  root: 'C:\\',
  base: 'file.txt',
  name: 'file',
  ext: '.txt',
}

// 2.Unixes平台
path.posix.parse(String.raw`C:\Users\jane\file.txt`)
// 输出
{
  dir: '',
  root: '',
  base: 'C:\\Users\\jane\\file.txt',
  name: 'C:\\Users\\jane\\file',
  ext: '.txt',
}
```

我们解析一个Window路径，通过 `path.win32` 正确解析，而Unix的 `path.posix` 对window路径解析不正确，比如，文件的basename应该是 `file.txt`。



## 2️⃣ path的基本概念

### 2.1 Path segments, path separators, path delimiters

术语：

- 一个非空的路径由一个或多个 `path segments`（路径片段） - 通常是目录名或文件名

- `path separator` 用于分割某个路径中2个相连的 `path segments`

  ```js {2,5}
  path.posix.sep
  // '/'
  
  path.win32.sep
  // '\\'
  ```

- `path deliimiter` 用于分开paths列表中的元素

  ```js {2,5}
  path.posix.delimiter
  // ':'
  
  path.win32.delimiter
  // ';'
  ```

  当我们查看 `PATH shell` 变量时，我们可以看到 `path separators` 和 `path delimitors` - 其中包含在 shell 中输入命令时操作系统查找可执行文件的路径。

  🌰下面是macOS `PATH` 例子（shell变量 `$PATH`）:

  ```js
  process.env.PATH.split(/(?<=:)/)
  
  [
    '/opt/homebrew/bin:',
    '/opt/homebrew/sbin:',
    '/usr/local/bin:',
    '/usr/bin:',
    '/bin:',
    '/usr/sbin:',
    '/sbin',
  ]
  ```

  Split separtor长度为0，因为 [lookbehind assertion](https://jamessawyer.github.io/deep-javascript-cn/6/Regular-expressions-lookaround-assertions-by-example.html) 在给定位置匹配，但是不进行捕获。因此path delimiter `:` 在上面路径中被包含。

  🌰 下面是Windows PATH例子（shell变量是 `%Path%`）:

  ```js
  process.env.PATH.split(/(?<=;)/)
  [
    'C:\\Windows\\system32;',
    'C:\\Windows;',
    'C:\\Windows\\System32\\Wbem;',
    'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;',
    'C:\\Windows\\System32\\OpenSSH\\;',
    'C:\\ProgramData\\chocolatey\\bin;',
    'C:\\Program Files\\nodejs\\',
  ]                                           
  ```

  

  

  ### 2.2 当前工作目录(CWD)

  很多shell都有 *当前工作目录（`CWD`）* 的概念 - `我当前所在的目录`：

  - 如果我们使用部分限定路径（`partially qualified path`），则该路径会依据CWD进行解析
  - 如果一个命令期望一个路径，但我们忽略了该路径，则CWD会默认被使用
  - Unixes和windowsa平台，改变CWD的命令都是 `cd`



`process` 这个Node全局变量提供了获取和改变CWD的方法：

1. [process.cwd()](https://nodejs.org/api/process.html#processcwd) 返回CWD
2. [process.chdir(dirPath)](https://nodejs.org/api/process.html#processchdirdirectory) 将CWD改为 `dirPath`
   - `dirPath` 必须是一个文件夹
   - 这个改变不会影响shell，只会影响当前运行的Node进程

👩🏻‍🏫 当一个路径不是 *完整路径（`fully qualified(complete)`）*时，Node会利用CWD补充缺失的部分。这使得我们可以在很多函数中使用部分限定路径🤩，比如：`fs.readFileSync()`



#### Unix中的CWD

下面代码展示了Unix中的 `process.chdir()` & `process.cwd()`:

```js {1,4}
process.chdir('/home/jane')

assert.equal(
  process.cwd(),
  '/home/jane'
)
```

####  Windows中的CWD

Windows和Unix工作效果不一样😅：

- 每个驱动（`drive`） 都有一个 *当前目录（`current directory`）*
- 存在一个 *当前驱动（`current drive`）*

我们可以使用 `path.chdir()` 同时设定2个：

```js
process.chdir('C:\\Windows') // C盘
process.chdir('Z:\\tmp') // Z盘
```

当我们访问一个驱动时，Node会记住该驱动的当前目录：

```js {5}
assert.equal(
  process.cwd(), 'Z:\\tmp'
)

process.chdir('C:') // 改变驱动，即从Z盘切到C盘
assert.equal(
  process.cwd(), 'C:\\Windows'
)
```



### 2.3 全限定 vs 部分限定路径，解析路径

- 全限定路径（`fully quallified path`） 不需要依赖其它信息，可直接使用（译者注：全限定即完整路径，绝对路径）
- 部分限定路径（`partially qualified path`） 缺失信息：在使用前，我们需要将其转换为全限定路径。这是通过针对完全限定的路径来解析（`resolve`）的（译者注：部分限定即相对路径）

#### 2.3.1 Unix中的全限定和部分限定

Unix只能识别2类路径：

- `绝对路径（Absolute paths）` 是全限定的，以 `/` 开头

  ```bash
  /home/john/proj
  ```

- `相对路径（Relative paths）` 是部分限定的，以文件名或点（`dot`）开头

  - `.` 当前目录
  - `..` 父目录
  - `dir`
  - `../dir`
  - `../../dir/subdir`

🚀让我们使用 `path.resolve()` 将相对路径解析为绝对路径：

```js
const abs = '/home/john/proj'

path.resolve(abs, '.')
// '/home/join/proj'

path.resolve(abs, '..')
// '/home/join'

path.resolve(abs, 'dir')
// '/home/john/proj/dir'

path.resolve(abs, '../dir')
// '/home/john/dir'

path.resolve(abs, '../../dir/subdir')
// '/home/dir/subdir'
```

::: tip

👆🏻上面例子对理解 `path.resolve()` 用法，提供了直白的示例

:::



#### 2.3.2 Windows中的全限定和部分限定

WIndows秋分4种路径：（可参考 [Microsoft docs](https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file#fully-qualified-vs-relative-paths)）

- 绝对路径和相对路径
- 上面的2种路径都可以有或没有驱动字符（`drive letter`）

::: tip

📚 **绝对路径 + 驱动字符 = 全限定路径；其余的均为部分限定路径**。

:::

1.**解析没有驱动字符的绝对路径**，绝对路径会使用全限定路径的驱动字符：

```js {1-2,5,9}
// 💡 全限定路径 `C:` 为驱动字符；
// `\\Users\\jane\\proj` 为绝对路径
const full = 'C:\\Users\\jane\\proj'

// 绝对路径，没有驱动字符
const absolute = '\\Windows'

path.resolve(full, absolute)
// 'C:\\Windows'
```

2.**解析没有驱动字符的相对路径**：视作为更新

```js
const full = 'C:\\Users\\jane\\proj'

path.resolve(full, '.')
// 'C:\\Users\\jane\\proj'

path.resolve(full, '..')
// 'C:\\Users\\jane'

path.resolve(full, 'dir')
// 'C:\\Users\\jane\\proj\\dir'

path.resolve(full, '.\\dir')
// 'C:\\Users\\jane\\proj\\dir'

path.resolve(full, '..\\dir')
// 'C:\\Users\\jane\\dir'

path.resolve(full, '..\\..\\ddir')
// 'C:\\Users\\dir'
```

3.**解析带有驱动字符的相对路径**：解析结果取决于驱动字符

- 相对路径的驱动字符 `rel` 和全限定驱动字符 `full` 相同？
- 不同的驱动器号而不是 `full`？根据 `rel` 驱动器的当前目录解析 `rel`

```js
// 配置当前目录为 C: 和 Z:
process.chdir('C:\\Windows\\Systm')
process.chdir('Z:\\tmp:')

const full = 'C:\\Users\\jane\\proj'

// 相同驱动字符 都为 `C:`
assert.equal(
  // cwd变为 'C:\\Users\\jane\\proj'
  path.resolve(full, 'C:dir'),
  'C:\\Users\\jane\\proj\\dir'
)
assert.equal(
  path.resolve(full, 'C:'),
  'C:\\Users\\jane\\proj'
)

// 不同驱动字符 一个是 `C:` 一个是 `Z:`
assert.equal(
  // cwd变为 'Z:\\tmp:'
  path.resolve(full, 'Z:dir'), 
  'Z:\\tmp\\dir'
)
assert.equal(
  path.resolve(full, 'Z:'),
  'Z:\\tmp'
)
```



## 3️⃣ 通过 'node:os' 获取重要目录路径

模块 `node:os` 给我们提供了2个重要的目录路径：

1. [os.homedir()](https://nodejs.org/api/os.html#oshomedir) 返回当前用户的home目录

   ```js
   os.homeddir() // macOS
   // '/Users/rauschma'
   
   os.homedir() // Windows
   // 'C:\\Users\\axel'
   ```

2. `os.tmpdir()` 返回操作系统临时文件目录：

   ```js
   os.tmpdir() // macOS
   // '/var/folders/ph/sz0384m11vxf5byk12fzjms40000gn/T'
   
   os.tmpdir() // Windows
   // 'C:\\Users\\axel\\AppData\\Local\\Temp'
   ```



## 4️⃣ ⭐ 拼接路径

🚀 有2个函数用于拼接路径：

1. `path.resolve()`： 总是返回全限定路径
2. `path.join()`： **保留**相对路径



### 4.1 path.resolve()：拼接并创建全限定路径

📒：

```typescript
path.resolve(...paths: Array<string>): string
```

拼接 `paths`， 并返回全限定路径。它使用如下算法：

- 以当前工作路径（CWD）开始
- 在之前的结果基础上解析 `path[0]`
- 再在之前的结果基础上解析 `path[1]`
- 对其余路径依此类推
- 返回最终的结果

::: tip

💡 不传参数时，`path.resolve()` 返回当前工作路径，相当于 `process.cwd()`

```js
process.cwd() // '/usr/local'

path.resolve() // '/usr/local'
```

:::



🤩🌰一个或多个相对路径用于解析,以CWD作为开始：

```js
path.resolve('.')
// '/usr/local'

path.resolve('..')
// '/usr'

path.resolve('bin')
// '/usr/local/bin'

path.resolve('./bin', 'sub')
// '/usr/local/bin/sub'

path.resolve('../lib', 'log')
// ''/usr/lib/log''
```

::: warning

🚨**任何全限定路径都会替代先前的结果**

```js
// '/home' 是全限定路径
path.resolve('bin', '/home')
// '/home'
```

:::



这使我们能够根据完全限定路径解析部分限定路径：

```js {1-2}
// '/home/john' 全限定路径
// 'proj' & 'src' 部分限定路径
path.resolve('/home/john', 'proj', 'src')
// '/home/john/proj/src'
```



### 4.2 path.join()：拼接路径，同时保留相对路径

📒：

```typescript
path.join(...path: Array<string>): string
```

从 `paths[0]` 开始，并将剩余的路径解释为升序（`Ascending`）或降序（`Descending`）指令。相比于 `path.resolve()`，这个函数 **保留部分限定路径**。

- 如果 `paths[0]` 是一个部分限定路径，则其结果为部分限定路径
- 如果 `path[0]` 是一个完全限定路径，其结果为完全限定路径

🤩🌰：(降序)

```js {1,5}
// paths[0] 为 '/usr/local'，它是一个完全限定路径，其结果也为完全限定
path.posix.join('/usr/local', 'sub', 'subsub')
// '/usr/local/sub/subsub'

// paths[0] 为 'relative/dir'，它是一个部分限定路径，其结果也为部分限定
path.posix.join('relative/dir', 'sub', 'subsub')
// 'relative/dir/sub/subsub'
```

`..` 升序：

```js
path.posix.join('/usr/local', '..')
// '/usr'

path.posix.join('relative/dir', '..')
// 'relative'
```

`.` 没有效果：

```js
path.posix.join('/usr/local', '.')
// '/usr/local'

path.posix.join('relative/dir', '.')
// 'relative/dir'
```

🚨 **如果第2个或之后的参数为完全限定路径，则它们会被翻译为相对路径**：

```js
path.posix.join('dir', '/tmp')
// 'dir/tmp'

path.win32.join('dir', 'C:\\Users')
// 'dir\\C:\\Users'
```

多余2个参数：

```js
path.posix.join('/usr/local', '../lib', '.', 'log')
// '/usr/lib/log'
```



## 5️⃣ 确保路径是标准化的、完全限定的或相对的



### 5.1 path.normalize()：确保路径标准化

📒：

```typescript
path.normalize(path: string): string
```

`Unix`中 `path.normalize()`:

- 移除一个点（`.`）的 path segments
- 解析2个点（`..`）的path segments
- 将多个 path separators（`/`） 转换为一个 path separators

🌰:

```js
// 完全限定路径
assert.equal(
  path.posix.normalize('/home/./john/lib/../photos//pet'),
  '/home/john/photos/pet'
)

// 部分限定路径
assert.equal(
  path.posix.normalize('./john/lib/../photos//pet'),
  './john/photos/pet'
)
```

`Windows` 中 `path.normalize()`:

- 移除一个点（`.`）的 path segments
- 解析2个点（`..`）的path segments
- 将每个path separator slash（`/`）- 这是合法的 - 转换为更偏好的path separator（`\`）
- 将超过1个的path separator转换为一个blackslash

🌰:

```js
// 完全限定路径
assert.equal(
  path.win32.normalize('C:\\Users/jane\\doc\\..\\proj\\\\src'),
  'C:\\Users\\jane\\proj\\src'
)

// 部分限定路径
assert.equal(
  path.win32.normalize('.\\jane\\doc\\..\\proj\\\\src'),
  'jane\\proj\\src'
)
```

::: warning

🚨 `path.join()` 传入一个参数也会标准化，效果和 `path.normalize()` 一样：

```js
path.posix.normalize('/home/./join/lib/../photos///pet')
// '/home/join/photos/pet'
path.posix.join('/home/./join/lib/../photos///pet')
// '/home/join/photos/pet'

path.posix.normalize('./join/lib/../photos///pet')
// 'join/photos/pet'
path.posix.join('./join/lib/../photos///pet')
// 'join/photos/pet'
```

:::



### 5.2 path.resolve()（一个参数）：确保路径标准化和完全限定

`path.resolve()` 只传一个参数时，它标准化路径的同时，也会确保其完全限定。

Unix中使用 `path.resolve()`:

```js {7-8}
process.cwd()
// '/usr/local'

path.resolve('/home/./john/lib/../photos///pet')
// '/home/join/photos/pet'

path.resolve('./join/lib/../photos///pet')
// '/usr/local/join/photos/pet'  // 💡 标准化 + 完全限定
```

Windows中使用 `path.resolve()`:

```js
process.cwd()
// 'C:\\Windows\\System'

path.resolve('C:\\Users/jane\\doc\\..\\proj\\\\src')
// 'C:\\Users\\jane\\proj\\src'

path.resolve('.\\jane\\doc\\..\\proj\\\\src')
// 'C:\\Windows\\System\\jane\\proj\\src'
```



### 5.3 ⭐ path.relative()：创建相对路径

📒：

```typescript
path.relative(sourcePath: string, destinationPath: string): string
```

从 `sourcePath` 到 `destinationPath` 得到一个相对路径：

```js {5}
path.posix.relative('/home/john/', '/home/join/proj/my-lib/README.md')
// 'proj/my-lib/README.md'

path.posix.relative('/tmp/proj/my-lib/', '/tmp/doc/zsh.txt')
// '../../doc/zsh.txt'
```

在windows上，如果 `sourcePath` 和 `destinationPath` 的驱动字符不一样，则返回一个完全限定的路径：

```js
path.win32.relative('Z:\\tmp\\', 'C:\\Users\\Jane\\')
// 'C:\\Users\\Jane\\'
```

对相对路径也一样：

```js
path.posix.relative('proj/my-lib/', 'doc/zsh.txt')
// '../../doc/zsh.txt'
```



## 6️⃣ 解析路径：提取路径的各个部分（文件名扩展等）



### 6.1 path.parse(): 创建包含path各部分的对象

📒：

```typescript
type PathObject = {
  dir: string,
  	root: string,
  base: string,
  	name: string,
  	ext: string,
}

path.parse(path: string): PathObject
```

提取 `path` 的各个部分，返回对象形式：

- `.base`：路径的最后一段
  - `.ext`: base的文件名扩展
  - `.name`: 没有扩展的base。这部分也称为路径的茎（`stem`）
- `root`： 路径的开始（在第一段前的部分）
- `.dir`：base所在的目录 - 不包含base部分的路径



#### 6.1.1 path.parse() Unix例子

```js
path.posix.parse('/home/jane/file.txt')

// 得到如下对象
{
  dir: '/home/jane',
	root: '/',
  base: 'file.txt',
  name: 'file',
  ext: '.txt'
}
```

🚀🚀 下图可视化各部分：

```bash
  /      home/jane / file   .txt
| root |           | name | ext  |
| dir              | base        |  
```

可以看出，`.dir` 是不包含 `base` 部分，而 `base = name + ext`。





#### 6.1.2 path.parse() Windows例子

```js
path.win32.parse(String.raw`C:\Users\john\file.txt`)

// 得到如下对象
{
  dir: 'C:\\Users\\john',
  root: 'C:\\',
  base: 'file.txt',
  name: 'file',
  ext: '.txt',
}
```

下图可视化各部分：

```bash
  C:\    Users\john \ file   .txt
| root |            | name | ext  |
| dir               | base        |
```



### 6.2 path.basename(): 提取路径的base部分

📒：

```typescript
path.basename(path, ext?)
```

返回路径的base部分：

```js
path.basename('/home/jane/file.txt')
// file.txt
```

可选的，这个函数可以移除后缀：

```js {4,7}
path.basename('/home/jane/file.txt', '.txt')
// 'file'

path.basename('/home/jane/file.txt', 'txt')
// 'file.'

path.basename('/home/jane/file.txt', 'xt')
// 'file.t'
```



### 6.3 path.dirname()：提取路径的父目录

📒：

```typescript
path.dirname(path)
```

返回文件或者目录的父目录：

```js
path.win32.dirname(String.raw`C:\Users\john\file.txt`)
// 'C:\\Users\\john'
path.win32.dirname('C:\\Users\\john\\dir\\')
// 'C:\\Users\\john'

path.posix.dirname('/home/jane/file.txt')
// '/home/jane'
path.posix.dirname('/home/jane/dir')
// '/home/jane'
```



### 6.4 path.extname()：提取路径的扩展

📒：

```typescript {4-5}
path.extname('/home/jane/file.txt')
// '.txt'

path.extname('/home/jane/file.')
// '.'

path.extname('/home/jane/file')
// ''

path.extname('/home/jane/')
// ''
```



## 7️⃣ `path.isAbsolute()` ：是否为绝对路径？



📒：

```typescript
path.isAbsolute(path: string): boolean
```

如果为绝对路径，返回 `true`，否则返回 `false`。



Unix上的结果很直白：

```js
path.posix.isAbsolute('/home/john')
// true

path.posix.isAbsolute('john')
// false
```

Windows上，`绝对` 不意味着必须是 `完全限定的`（只需要第一路径时完全限定）：

```js {4-5,7-8}
path.win32.isAbsolute('C:\\Users\\jane')
// true

path.win32.isAbsolute('\\Users\jane')
// true

path.win32.isAbsolute('C:jane')
// false

path.win32.isAbsolute('jane')
// false
```





## 8️⃣ `path.format()`：使用path parts创建路径

📒：

```typescript
type PathObject = {
  dir: string,
  	root: string,
  base: string,
  	name: string,
  	ext: string,
}

path.format(pathObject: PathObject): sring
```

依据路径对象创建路径：

```js
path.format({
  dir: '/home/jane',
  base: 'file.txt'
})
// '/home/jane/file.txt'
```



### 8.1 例子：改变文件扩展

我们可以使用 `path.format()` 改变路径的扩展：

```js
function changeFilenameExtension(pathstr, newExtension) {
  if (!newExtension.startsWith('.')) {
    throw new Error('Extension must start with a dot: '
                    + JSON.stringify(newExtension))
  }
  const parts = path.parse(pathstr) // 先解析为PathObject对象
  return path.format({              // 然后再创建路径
    ...parts,
    base: undefined,                // 阻止 .base 覆盖 .name & .ext
    ext: newExtension
  })
}

assert.equal(
  changeFilenameExtension('/tmp/file.md', '.html'),
  '/tmp/file.html'
)

assert.equal(
  changeFilenameExtension('/tmp/file', '.html'),
  '/tmp/file.html'
)

assert.equal(
  changeFilenameExtension('/tmp/file/', '.html'),
  '/tmp/file.html'
)
```

💡如果我们已经知道了文件扩展，可以使用正则直接替换：

```js
'/tmp/file.md'.replace(/\.md$/i, '.html')
// '/tmp/file.html'

'/tmp/file.MD'.replace(/\.md$/i, '.html')
// '/tmp/file.html
```



## 9️⃣ 在不同平台使用相同路径

有时我们想在不同平台使用相同路径。因此我们将面临2个问题：

1. path separtor可能不相同
2. 文件结构可能不相同：home目录和临时目录可能在不同位置等

比如，一个Node应用操作data目录。我们假设应用可以配置2种类型路径：

1. 系统中任意位置的完全限定路径
2. 在data目录下的路径

因为前面的问题：

- 我们不能在不同平台复用完全限定目录：
  - 有时我们需要绝对路径。它们必须在每个data目录实例进行配置，并且存储在外部（或在内部然后通过git忽略它们）。这些路径不随data目录移动
- 我们可以重用指向data目录的路径。此类路径可能存储在配置文件中（是否在data目录中）和应用程序代码的常量中。为了这样：
  - 我们必须以相对路径的形式进行存储
  - 我们必须确保path separator在各个平台是正确的

下面解释如何实现。



### 9.1 相对平台独立的路径

😎相对平台独立的路径可以以path segments数组的形式进行存储，然后转换为完全限定平台指定的路径，如下：

```js {5}
const universalRelativePath = ['static', 'img', 'logo.jpg']

const dataDirUnix = '/home/john/data-dir'
assert.equal(
  path.posix.resolve(dataDirUnix, ...universalRelativePath),
  '/home/john/data-dir/static/img/logo.png'
)

const dataDirWindows = 'C:\\Users\\jane\\data-dir'
assert.equal(
  path.win32.resolve(dataDirWindows, ...universalRelativePath),
  'C:\\Users\\jane\\data-dir\\static\\img\\logo.jpg'
)
```



为了创建相对平台指定路径，我们可以使用：

```js {5}
const dataDir = '/home/john/data-dir'
const pathInDataDir = '/home/john/data-dir/static/img/logo.jpg'

assert.equal(
  path.relative(dataDir, pathInDataDir),
  'static/img/logo.jpg'
)
```

🔥以下函数将特定于平台的相对路径转换为独立于平台的路径：

```js
import * as path from 'node:path'

function splitRelativePathIntoSegments(relPath) {
  if (path.isAbsolute(relPath)) {
    throw new Error('路径不是相对的：' + relPath)
  }
  
  relPath = path.normalize(relPath) // 标准化路径
  const result = []
  while (true) {
    const base = path.basename(relPath) // base部分
    if (base.length === 0) break
    result.unshift(base)
    const dir = path.dirname(relPath) // 目录部分
    if (dir === '.') break
    relPath = dir
  }
  
  return result
}
```

Unix上使用 `splitRelativePathIntoSegments()`：

```js
splitRelativePathIntoSegments('static/img/logo.jpg')
// ['static', 'img', 'logo.jpg']

splitRelativePathIntoSegments('file.txt')
// ['file.txt']
```

Windows上使用 `splitRelativePathIntoSegments()`：

```js
splitRelativePathIntoSegments('static/img/logo.jpg')
// [ 'static', 'img', 'logo.jpg' ]
splitRelativePathIntoSegments('C:static/img/logo.jpg')
// [ 'static', 'img', 'logo.jpg' ]

splitRelativePathIntoSegments('file.txt')
// [ 'file.txt' ]
splitRelativePathIntoSegments('C:file.txt')
// [ 'file.txt' ]
```



## 🔟 使用第三方库匹配路径，通过globs

[minimatch](https://github.com/isaacs/minimatch) 允许我们通过模式匹配路径，称之为 `glob expressions | glob patterns | globs`：

```js
import monimatch from 'minimatch'

assert.equal(
  minimatch('/dir/sub/file.txt', '/dir/sub/*.txt'),
  true
)
assert.equal(
  minimatch('/dir/sub/file.txt', '/**/file.txt'),
  true
)
```

globs的使用场景：

- 指定目录中的哪些文件可以被脚本处理
- 指定哪些文件被忽略

更多globs库：

- [multimatch](https://github.com/sindresorhus/multimatch) 扩展了minimatch，并支持多个模式
- [micromatch](https://github.com/micromatch/micromatch) 是minimatch & multimatch的替代品，拥有相似的API
- [globby](https://github.com/sindresorhus/globby) 基于 [fast-glob](https://github.com/mrmlnc/fast-glob)，并增加了便利的功能



### 10.1 minimatch API

完整API可阅读其 [readme](https://github.com/isaacs/minimatch)。后面看看其最重要的功能。

📚 **minimatch将globs编译为正则对象，并使用它进行匹配**。



#### 10.1.1 minimatch()：编译和匹配一次

📒：

```typescript
minimatch(
  path: string, 
  glob: string, 
  options?: MinimatchOptions
): boolean
```

如果 `glob` 匹配上了 `path`，则返回 `true`，否则返回 `false`。



2个有趣的配置项：

- `dot: boolean` (默认 `false`): 如果为 `true`，通配符号 `*` & `**` 能匹配不可见的路径片段（以点开头的）

  ```js {6}
  minimatch('/usr/local/.tmp/data.json', '/usr/**/data.json')
  // false
  minimatch(
    '/usr/local/.tmp/data.json', 
    '/usr/**/data.json',
    { dot: true }
  )
  // true
  
  minimatch('/tmp/.log/events.txt', '/tmp/*/events.txt')
  // false
  minimatch(
    '/tmp/.log/events.txt', 
    '/tmp/*/events.txt', 
    { dot: true }
  )
  // true
  ```

- `matchBase: boolean` (默认 `false`)： 如果为 `true`，没有slashes的模式能匹配路径basename

  ```js
  minimatch('/dir/file.txt', 'file.txt')
  // false
  
  minimatch('/dir/file.txt', 'file.txt', { matchBase: true })
  // true
  ```



#### 10.1.2 new minimatch.Minimatch()：编译一次，匹配多次

类 `minimatch.Minimatch` 使我们只将glob编译为正则一次，然后可以匹配多:

📒：

```typescript
new Minimatch(pattern: string, options?: MinimatchOptions)
```

下面是用法：

```js
import minimatch from 'minimatch'

const { Minimatch } = minimatch
const glob = new Minimatch('/dir/sub/*txt')

assert.equal(
  glob.match('/dir/sub/file.txt'), true
)
assert.equal(
  glob.match('/dir/sub/notes.txt'), true
)
```







原文链接：

- [Working with file system paths on Node.js - Dr.Axel Rauschmayer](https://2ality.com/2022/07/nodejs-path.html#path.format()%3A-creating-paths-out-of-parts)