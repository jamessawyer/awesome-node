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





原文链接：

- [Working with file system paths on Node.js - Dr.Axel Rauschmayer](https://2ality.com/2022/07/nodejs-path.html#path.format()%3A-creating-paths-out-of-parts)