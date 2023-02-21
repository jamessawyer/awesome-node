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



## 2️⃣ Path的基本概念

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

👩🏻‍🏫 当一个路径不是 *完整路径（`fully qualified(complete)`）* 时，Node会利用CWD补充缺失的部分。这使得我们可以在很多函数中使用部分限定路径🤩，比如：`fs.readFileSync()`



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



## 6️⃣ ⭐ 解析路径：提取路径的各个部分（文件名扩展等）



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



### 10.2 glob表达式语法

后面小节覆盖基本语法。更多功能可查看文档：

- [minimatch单元测试](https://github.com/isaacs/minimatch/tree/main/test) 有很多globs示例
- Bash手册有个[文件名扩展](https://www.gnu.org/software/bash/manual/bash.html#Filename-Expansion) 小节

#### 10.2.1 匹配Windows路径

即使在windows上，glob片段也是通过 `/` 分割的 - 但它同时匹配 `\` 和 `/`(在Windows上也是合法的路径separators)

```js
minimatch('dir\\sub/file.txt', 'dir/sub/file.txt')
// true
```

#### 10.2.2 Minimatch不会标准化路径

```js
minimatch('./file.txt', './file.txt')
// true

minimatch('./file.txt', 'file.txt')
// false

minimatch('file.txt', './file.txt')
// false
```

因此我们没有自己创建路径时，必须标准化路径：

```js
path.normalize('./file.txt')
// 'file.txt'
```



#### 10.2.3 没有通配符的模式：path separators必须是一条线

没有通配符的模式必须精确匹配。特别是path separators必须是一条线：

```js
// 💡 语法：minimatch(path, glob)
minimatch('/dir/file.txt', '/dir/file.txt')
// true

minimatch('dir/file.txt', 'dir/file.txt')
// true

minimatch('/dir/file.txt', 'dir/file.txt')
// false

minimatch('/dir/file.txt', 'file.txt')
// false
```

即，我们必须决定要么是绝对路径，要么是相对路径。

使用配置 `.matchBase`，我们可以对路径的basenames上匹配不带斜杠的模式:

```js
minimatch('/dir/file.txt', 'file.txt', {matchBase: true})
// true
```



#### 10.2.4 ⭐ `*` 匹配任意单一片段

通配符 `*` 匹配任意路径片段或片段的任意部分：

```js
// 匹配任意路径片段
minimatch('/dir/file.txt', '/*/file.txt')
// true
minimatch('/tmp/file.txt', '/*/file.txt')
// true

// 匹配片段任意部分
minimatch('/dir/file.txt', '/dir/*t.xt')
// true
minimatch('/dir/data.txt', '/dir/*.txt')
// true
```

::: warning

`*` 并不会匹配 *不可见文件*，即以 `.` 开头名字。如果我们像匹配，则必须在 `*` 添加 `.`

```js
minimatch('file.txt', '*')
// true

minimatch('.gitignore', '*')
// false

minimatch('.gitignore', '.*')
// true

minimatch('/tmp/.log/events.txt', '/tmp/*/events.txt')
// false
```

或者使用 `.dot` 配置关闭这种行为：

```js
minimatch('.gitignore', '*', { dot: true })
// true

minimatch(
  '/tmp/.log/events.txt', 
  '/tmp/*/events.txt',
  { dot: true }
)
// true
```

:::



#### 10.2.5 ⭐ `**` 匹配0或多个片段

```js
// 匹配0或多个片段😎
minimatch('/file.txt', '/**/file.txt')
// true

minimatch('/dir/file.txt', '/**/file.txt')
// true

minimatch('/dir/sub/file.txt', '/**/file.txt')
// true
```

如果我们想匹配相对路径，模式不能以path separator开头：

```js
minimatch('file.txt', '/**/file.txt')
// false
```

`**` 也不匹配 **不可见** 路径片段（以点开头的）

```js
minimatch('/usr/local/.tmp/data.json', '/usr/**/data.json')
// false
```

可以使用 `.dot` 配置：

```js {4}
minimatch(
  '/usr/local/.tmp/data.json', 
  '/usr/**/data.json',
  { dot: true }
)
// true
```



#### 10.2.6 ⭐ 否定globs

如果glob以 `!` 开头，只有感叹号后面的模式没有匹配上时才能匹配：

```js
minimatch('file.txt', '!**/*.txt')
// false

minimatch('file.js', '!**/*.txt')
// true
```



#### 10.2.7 可选匹配

使用在大括号用逗号分割多个模式，只许某个模式匹配了即可：

```js
minimatch('file.txt', 'file.{txt,js}')
// true

minimatch('file.js', 'file.{txt,js}')
// true
```



#### 10.2.8 整数区间

一组被 `..` 分割的整数定义证书秋季，匹配其中任意元素：

```js {7-8}
minimatch('file1.txt', 'file{1..3}.txt')
// true
minimatch('file2.txt', 'file{1..3}.txt')
// true
minimatch('file3.txt', 'file{1..3}.txt')
// true
minimatch('file4.txt', 'file{1..3}.txt')
// false
```

也支持填充 `0`：

```js {1-2}
minimatch('file1.txt', 'file{01..12}.txt')
// false
minimatch('file01.txt', 'file{01..12}.txt')
// true
minimatch('file02.txt', 'file{01..12}.txt')
// true
minimatch('file12.txt', 'file{01..12}.txt')
// true
```



## 1️⃣1️⃣ 使用 file:URLs 引用文件

在Node.js中有2种常见方式引用文件：

1. 字符串路径
2. URL实例，使用 `file:` 协议

🌰：

```js {11}
assert.equal(
  fs.readFileSync(
    '/tmp/data.txt',
    { encoding: 'utf-8' }
  ),
  'Content'
)

assert.equal(
  fs.readFileSync(
    new URL('file:///tmp/data.txt'),
    { encoding: 'utf-8' }
  ),
  'Content'
)
```

### 11.1 URL类

这一小节我们仔细看看URL类，更多：

- Node文档 [The WHATWG URL API](https://nodejs.org/api/url.html#the-whatwg-url-api)
- WHATWG URL标准 [API](https://url.spec.whatwg.org/#api)

这篇文章中，我们通过全局变量的形式使用URL类，因为这就是Web平台的使用方式，但你也可以导入：

```js
import { URL } from 'node:url'
```

#### 11.1.1 URIs vs. 相对引用

👩🏻‍🏫 URLs是URIs子集：

- URI以 [scheme](https://datatracker.ietf.org/doc/html/rfc3986#section-3.1) 开头，后面跟着 `:`
- 所有其它URl引用都是 *相对引用*



#### 11.1.2 URL构造器



URL类有2种实例化方式：

- `new URL(uri: string)`: uri必须是一个 URI。它指定新实例的URI。
- `new URL(uriRef: string, baseUri: string)`:`baseUri `必须是一个 URI。如果 `uriRef` 是一个相对引用，它会针对 `baseUri` 进行解析，结果将成为新实例的 URI。如果 `uriRef` 是一个 URI，它将完全取代 `baseUri` 作为实例所基于的数据。

🌰：

```js {14-18}
// 如果只有一个参数，则必须是一个合适的URI
assert.equal(
  new URL('https://example.com/public/page.html').toString(),
  'https://example.com/public/page.html'
)

assert.throws(
  () => new URL('../book/toc.html'),
  /^TypeError \[ERR_INVALID_URL\]: Invalid URL$/
)

// 解析针对 baseURI 的相对引用
assert.equal(
  new URL(
    '../book/toc.html',
    'https://example.com/public/page.html'
  ).toString(),
  'https://example.com/book/toc.html'
)
```

#### 11.1.3 对URL实例解析相对引用

我们先回顾一下URL下面的这个构造器：

```typescript
new URL(uriRef: string, baseUri: string)
```

参数 `baseUri` 会强转为字符串。因此任何强转为字符串后仍有些的URL的对象都可被使用：

```js
const obj = {
  toString() {
    // 返回一个合法的URL字符串
    return 'https://example.com'
  }
}

assert.equal(
  new URL('index.html', obj).href,
  'https://example.com/index.html'
)
```

这使我们能够解析针对 URL 实例的相对引用：😎

```js
const url = new URL('https://example.com/dir/file1.html');
assert.equal(
  new URL('../file2.html', url).href,
  'https://example.com/file2.html'
)
```

这种使用方式，构造器和 `path.resolve()` 很相似。



#### 11.1.4 ⭐ URL实例属性

URL实例有如下属性:

```typescript
type URL = {
  protocol: string,
  username: string,
  password: string,
  hostname: string,
  port: string,
  host: string,
  readonly origin: string,
  
  pathname: string,
  
  search: string,
  readonly searchParams: URLSearchParams,
  hash: string,

  href: string,
  toString(): string,
  toJSON(): string,
}
```



#### 11.1.5 将URLs转换为字符串

3种常用方式转换URL -> 字符串：

```js {14}
const url = new URL('https://example.com/about.html')

assert.equal(
  url.toString(),
  'https://example.com/about.html'
)

assert.equal(
  url.href,
  'https://example.com/about.html'
)

assert.equal(
  url.toJSON(),
  'https://example.com/about.html'
)
```

`.toJSON()` 方法使我们能在JSON数据中使用URLs：

```js
const jsonStr = JSON.stringify({
  pageUrl: new URL('https://2ality.com/p/subscribe.html')
})

assert.equal(
  jsonStr, '{"pageUrl":"https://2ality.com/p/subscribe.html"}'
)
```

#### 11.1.6 获取URL属性

👩‍🏫 **URL实例没有数据属性，它们都是访问器属性。**

下例中，我们使用 `pickProps()` 工具函数将getters返回值拷贝到普通对象中：

```js
const props = pickProps(
  new URL('https://jane:pw@example.com:80/news.html?date=today#misc'),
  'protocol', 'username', 'password', 'hostname', 'port', 'host',
  'origin', 'pathname', 'search', 'hash', 'href'
)

assert.deepEqual(
  props,
  {
    protocol: 'https:',
    username: 'jane',
    password: 'pw',
    hostname: 'example.com',
    port: '80',
    host: 'example.com:80',
    origin: 'https://example.com:80',
    pathname: '/news.html',
    search: '?date=today',
    hash: '#misc',
    href: 'https://jane:pw@example.com:80/news.html?date=today#misc'
  }
)

function pickProps(input, ...keys) {
  const output = {};
  for (const key of keys) {
    output[key] = input[key];
  }
  return output;
}
```

注意，`pathname` 是一个单一的原子单元。即，不能使用类URL访问其部分（base, extension等）。



#### 11.1.7 设置URL部分

我们可以通过设置属性的方式改变URL的部分，比如 `.hostname`：

```js {2}
const url = new URL('https://example.com')
url.hostname = '2ality.com'
assert.equal(
  url.href, 'https://2ality.com/'
)
```

我们可以使用setter从部分创建url：

```js
// Object.assign() 调用setters，当转移属性值时
const urlFromParts = (parts) => Object.assign(
  new URL('https://example.com'), // minimal dummy URL
  parts // assigned to the dummy
)

const url = urlFromParts({
  protocol: 'https:',
  hostname: '2ality.com',
  pathname: '/p/about.html',
})
assert.equal(
  url.href, 'https://2ality.com/p/about.html'
)
```



#### 11.1.8 通过 .searchParams  管理搜索参数

可以使用 `.searchParams` 属性管理URLs的搜索参数。它的值是 [URLSearchParams](https://nodejs.org/api/url.html#class-urlsearchparams) 实例。

我们可以用它读取搜索参数：

```js
const url = new URL('https://example.com/?topic=js')

assert.equal(
  url.searchParams.get('topic'), 'js'
)
assert.equal(
  url.searchParams.has('topic'), true
)
```

我们也可通过它改变搜索参数：

```js
url.searchParams.append('page', '5')
assert.equal(
  url.href, 'https://example.com/?topic=js&page=5'
)

url.searchParams.set('topic', 'css')
assert.equal(
  url.href, 'https://example.com/?topic=css&page=5'
)
```



### 11.2 ⭐ URLs和文件路径间转换

手动在文件路径和URLs之间转换很常见。比如，将URL实例 `myUrl`通过 `myUrl.pathname` 转换为文件路径。但是这并不是总生效 - 最好使用 [fileURLToPath](https://nodejs.org/api/url.html#urlfileurltopathurl) 这个函数：

```typescript
url.fileURLToPath(url: URL | string): string
```

下面代码比较这个函数的结果和 `.pathname`值：

```js
import * as assert from 'assert'
import * as url from 'node:url'

// Unix
const url1 = new URL('file:///tmp/with%20space.txt')
assert.equal(
  url1.pathname, '/tmp/with%20space.txt')
assert.equal(
  url.fileURLToPath(url1), '/tmp/with space.txt')

const url2 = new URL('file:///home/thor/Mj%C3%B6lnir.txt')
assert.equal(
  url2.pathname, '/home/thor/Mj%C3%B6lnir.txt')
assert.equal(
  url.fileURLToPath(url2), '/home/thor/Mjölnir.txt')


// Windows
const url3 = new URL('file:///C:/dir/')
assert.equal(
  url3.pathname, '/C:/dir/')
assert.equal(
  url.fileURLToPath(url3), 'C:\\dir\\')
```

[pathToFileURL](https://nodejs.org/api/url.html#url_url_pathtofileurl_path) 则是 `url.fileURLToPath()` 的反向过程

```typescript
url.pathToFileURL(path: string): URL
```

它将路径转换为文件URL：

```js
url.pathToFileURL('/home/john/Work Files').href
// 'file:///home/john/Work%20Files'
```



### 11.3 ⭐ URLs使用场景：相对于当前模块访问文件

📚多用于 `EMS`模块中。

URL 的一个重要场景是访问与当前模块同级的文件：

```js
function readData() {
  const url = new URL('data.txt', import.meta.url)
  return fs.readFileSync(url, {encoding: 'UTF-8'})
}
```

[import.meta.url](https://exploringjs.com/impatient-js/ch_modules.html#import.meta.url-on-node.js) 包含当前模块的URL，在Node中它使用文件URL。

使用 `fetch()` 可使上面代码更加跨平台。但是，Node18.5，`fetch()` 还不支持 文件URL:

```js
await fetch('file:///tmp/file.txt')

// TypeError: fetch failed
//  cause: Error: not implemented... yet...
```

### 11.4 URLs使用场景：检测当前模块是否以脚本形式运行

可查看：

- [blog: Node.js: checking if an ESM module is 'main'](https://2ality.com/2022/07/nodejs-esm-main.html)



### 11.5 Paths vs file:URLs

当shell脚本接收对文件的引用或者导出对文件的引用（比如：通过在屏幕上打印它们），它们实际上总是路径。然而，有两种情况下我们需要url(在前面的小节中讨论过):

- 访问相对于当前模块的文件
- 来检测当前模块是否作为脚本运行



原文链接：

- [Working with file system paths on Node.js - Dr.Axel Rauschmayer](https://2ality.com/2022/07/nodejs-path.html#path.format()%3A-creating-paths-out-of-parts)

2022年08月10日21:46:33

