---
title: FS in Node

---

这篇文章主要涵盖2个部分：

1. Node fs APIs 概览
2. 使用这些APIs执行不同任务的小技巧（代码片段）

本文关注shell脚本，这也是为什么我们只针对文本数据。



目录：

[[toc]]



## 1️⃣ ⭐ fs APIs的概念，模式和规范

本节，我们使用下面2个引入：

```js
import * as fs from 'node:fs'
import * as fsPromises from 'node:fs/promises'
```



### 1.1 函数不同的风格

📚Node fs APIs有3种不同的风格：

1. 1种同步风格，比如
   - [fs.readFileSync(path, options?): string|Buffer](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options)
2. 2种异步风格
   1. **基于回调函数** 的异步风格，比如
      - [fs.readFile(path, options?, callback): void](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback)
   2. **基于Promises函数** 的异步风格，比如：
      - [fsPromises.readFile(path, options?): Promise<string|Buffer>](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options)

🚀上面3个例子，展示了功能相同函数的命名规范：

- 基于回调的函数有一个基础名：`fs.readFile()`
- 基于Promise的版本名字相同，但是在不同模块中：`fsPromises.readFile()`
- 同步版本的名字为，基础名字 + `Sync` 后缀：`fs.readFileSync()`

下面进一步看看这3种风格。



#### 1.1.1 同步函数

同步函数最简单 - 它们立即返回值，出现异常则抛出错误：

```js
import * as fs from 'node:fs'

try {
  const result = fs.readFileSync('/etc/passwd', { encoding: 'utf-8' })
  console.log(result)
} catch (err) {
  console.log(err)
}
```

本文主要使用这种风格，因为它们很方便，并且很适合shell脚本😎。



#### 1.1.2 基于Promise的函数

返回 [Promises](https://exploringjs.com/impatient-js/ch_promises.html)，完成则返回结果或reject错误:

```js {4-6}
import * as fsPromises from 'node:fs/promises' // A

try {
  const result = await fsPromises.readFile(
    '/etc/passwd', { encoding: 'utf-8' }
  )
  console.log(result)
} catch (err) {
  console.log(err)
}
```

注意 `A` 行处的模块指示符：基于Promise的API位于不同的模块中。



#### 1.1.3 基于Callback的函数

基于回调的函数将结果和错误传递给callbacks，它是最后一个参数：

```js {6-12}
import * as fs from 'node:fs'

fs.readFile(
  '/etc/passwd',
  { encoding: 'utf-8' },
  (err, result) => { // error-first callback
    if (err) {
      console.error(err)
      return
    }
    console.log(result)
  }
)
```

本文不会使用这种风格。[Node文档中有具体介绍](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)



### 1.2 ⭐ 访问文件的方式

1. 我们可以通过字符串读或写文件的所有内容
2. 我们可以以流的方式打开或者写入，一次性更小块的处理文件。流只允许顺序访问
3. 我们可以使用文件描述符（`file descriptors`） 或 文件句柄（`FileHandles`），通过一个类似于流的API来获得顺序访问和随机访问
   - [文件描述符](https://nodejs.org/api/fs.html#file-descriptors_1) 是表示文件的整数。它们通过如下函数管理（下面只展示同步版本，当然也有基于回调的版本 - `fs.open()` 等）：
     - `fs.openSync(path, flags?, mode?)` 打开一个指定路径的文件的文件描述符，然后将其返回
     - `fs.closeSync(fd)` 关闭文件描述符
     - `fs.fchmodSync(fd, mode)`
     - `fs.fchownSync(fd, uid, gid)`
     - `fs.fdatasyncSync(fd)`
     - `fs.fstatSync(fd, options?)`
     - `fs.fsyncSync(fd)`
     - `fs.ftruncateSync(fd, len?)`
     - `fs.futimesSync(fd, atime, mtime)`
   - **只有同步版本和基于回调的API才使用文件描述符，基于Promise版本API有更好的抽象 - [class FileHandle](https://nodejs.org/api/fs.html#class-filehandle)** - 它基于文件描述符🤩。通过 `fsPromises.open()` 创建的实例，各种操作通过方法的形式提供（而不是函数）：
     - `fileHandle.close()`
     - `fileHandle.chmod(mode)`
     - `fileHandle.chown(uid, gid)`
     - ...

::: warning

🚨 本文不使用第3种形式，我们的目的只使用第1,2种方式就足够了。

:::



### 1.3 ⭐ 函数名前缀



#### 1.3.1 前缀 `l` : 符号链接

以 `l` 开头的函数通常是对符号链接进行操作的：

- `fs.lchmodSync()` + `fs.lchmod()` + `fsPromises.lchmod()`
- `fs.lchownSync()` + `fs.lchown()` + `fsPromises.lchown()`
- `fs.lutimeSync()` + `fs.lutimes()` + `fsPromises.lutimes()`
- ...等等



#### 1.3.2 前缀 `f`：文件描述符

以 `f` 开头的函数通常用于管理文件描述符：

- `fs.fchmodSync()` + `fs.fchmod()`
- `fs.fchownSync()` + `fs.fchown()`
- `fs.fstatSync()` + `fs.fstate()`
- ...等等





### 1.4 重要的类

有几个类在Node文件系统API中扮演着举足轻重的角色。



#### 1.4.1 ⭐ URLs : 字符串文件系统的另一种选择

🚀🚀 每当某个Node函数接收以字符串形式的文件系统路径（行 `A`），通常也可以接收一个 `URL` 实例（行 `B`）:

```js {5,12}
import * as fs from 'node:fs'

assert.equal(
  fs.readFileSync(
    '/tmp/text-file.txt', {encoding: 'utf-8'}, // A
    'Text Content'
  )
)

assert.equal(
  fs.readFileSync(
    new URL('file:///tmp/text-file.txt'), {encoding: 'utf-8'}, // B
    'Text Content'
  )
)
```

手动转换路径和 `file:` URLs看起来很容易，但是却有很多弊端：百分号编码或解码，Windows磁盘盘符等。相反，最好使用下面2个函数：

1. [url.pathToFileURL()](https://nodejs.org/api/url.html#urlpathtofileurlpath)
2. [url.fileURLToPath()](https://nodejs.org/api/url.html#urlpathtofileurlpath)

::: info

本文并不会使用文件URLs.

:::



#### 1.4.2 Buffers

Node中的 [Buffer](https://nodejs.org/api/buffer.html) 表示 *固定长度的字节序列*。它是 `Uint8Array` (一种 [TypedArray](https://exploringjs.com/impatient-js/ch_typed-arrays.html))。Buffers主要处理二进制文件（`binary files`），因此本文并不会使用它。

👩‍🏫 当Node接收一个Buffer时，它也接收一个Uint8Array。因此，**鉴于Uint8Arrays是跨平台的，而Buffers并不是，因此更偏向选择Uint8Arrays**。

Buffers能完成Uint8Arrays不能完成的一件事：以多种格式编码和解码文本😎。如果我们以Uint8Arrays编码或解码UTF-8，我们可以使用 [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) 或 [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) 类。这些类在大多数JS平台都可以使用：

```js
new TextEncoder().encode('café')
// Uint8Array.of(99, 97, 102, 195, 169)

new TextDecoder().decode(Uint8Array.of(99, 97, 102, 195, 169))
// 'café'
```



#### 1.4.3 Node.js Streams

有些函数接收或返回原生的Node.js流：

- `stream.Readable` 是Node中用于可读的流。模块 `node:fs` 使用 `fs.ReadStream`，它是一个子类
- `stream.Writable` 是Node中用于写入的流。模块 `node:fs` 使用 `fs.WriteStream`，它是一个子类

除了使用原生流，我们还可以在Node中使用跨平台的 `web stream`

- [Using web streams on Node.js - 2ality](https://2ality.com/2022/06/web-streams-nodejs.html)



## 2️⃣ 读和写文件



### 2.1 同步读文件为单一字符串（可选：拆分为行）

[fs.readFileSync](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options) 同步读取 `filePath` 处的文件为单一字符串：

```js
import * as fs from 'node:fs'

assert.equal(
  fs.readFileSync('text-file.txt', {encoding: 'utf-8'}),
  'there\r\nare\nmultiple\nlines'
)
```

这种方式的优点和缺点（对比流）：

- 😋优点：使用简单，并且同步。适用于大多数场景
- 😥缺点：不适用于大文件：在我们处理数据前，必须将其完全读取到内存中



下面看看拆分字符串，以行的方式读取。



#### 2.1.1 拆分行，并且不包含行分隔符

下面代码拆分字符串为行的同时，移除行分隔符。适用于Unix和Windows行分隔符：

```js {1}
const RE_SPLIT_EOL = /\r?\n/
function splitLines(str) {
  return str.split(RE_SPLIT_EOL)
}

assert.deepEqual(
  splitLines('there\r\nare\nmultiple\nlines'),
  ['there', 'are', 'multiple', 'lines']
)
```

`EOL` 表示 `end of line`。我们同时接收Unix行分割符（`\n`）和 Windows行分隔符（`\r\n`）。



#### 2.1.2 拆分行，并且保留行分隔符

下面代码将字符串拆分为行，并且保留行分隔符。同时适用于Unix和Windows行分隔符：、

```js {1}
const RE_SPLIT_AFTER_EOL = /(?<=\r?\n)/ // A
function splitLines(str) {
  return str.split(RE_SPLIT_EOL)
}

assert.deepEqual(
  splitLinesWithEols('there\r\nare\nmultiple\nlines'),
  ['there\r\n', 'are\n', 'multiple\n', 'lines']
)
assert.deepEqual(
  splitLinesWithEols('first\n\nthird'),
  ['first\n', '\n', 'third']
)
assert.deepEqual(
  splitLinesWithEols('EOL at the end\n'),
  ['EOL at the end\n']
)
assert.deepEqual(
  splitLinesWithEols(''),
  ['']
)
```

A行处使用了 [后行断言](https://jamessawyer.github.io/deep-javascript-cn/6/Regular-expressions-lookaround-assertions-by-example.html#_1%EF%B8%8F%E2%83%A3-%E2%AD%90-cheatsheet-%E7%8E%AF%E8%A7%86%E6%96%AD%E8%A8%80) 正则表达式。它匹配后面跟着的模式 `\r?\n`，但它自身不会被捕获。因此，它不会删除将输入字符串分割成的字符串片段之间的任何内容。

对于不支持后续断言的引擎（[caniuse - lookbehind](https://caniuse.com/js-regexp-lookbehind)），可以使用下面方案：

```js
function splitLinesWithEols(str) {
  if (str.length === 0) return ['']
  const lines = []
  let prevEnd = 0
  while (prevEnd < str.length) {
    // 搜索 `\n`，意味着我们也能找到 `\r\n`
    const newlineIndex = str.indexOf('\n', prevEnd)
    // 如果存在新行，它被包含在改行中
    const end = newlineIndex < 0 ? str.length : newlineIndex + 1
    lines.push(str.slice(prevEnd, end))
    prevEnd = end
  }
  return lines
}
```

这个方案简单，但是太冗长。

2个版本都同时接收Unix和Windows行分隔符，更多可查看：[Handling line terminators across platforms](https://2ality.com/2022/06/nodejs-file-system.html#handling-line-terminators-across-platforms)



### 2.2 ⭐ 通过流读取文件，一行接一行

我们也可以通过流的方式读取文本文件：

```js {8,11}
import * as fs from 'node:fs'
import { Readable } from 'node:stream'

const nodeReadable = fs.createReadStream(
  'text-file.txt',
  {encoding: 'utf-8'}
)
// 💡 web跨平台流
const webReadableStream = Readable.toWeb(nodeReadable)

const lineStream = webReadableStream.pipeThrough(new ChunksToLinesStream())
for await (const line of lineStream) {
  console.log(line)
}

// 输出
// 'there\r\n'
// 'are\n'
// 'multiple\n'
// 'lines'
```

🚀🚀我们使用了下面外部函数：

1. [fs.createReadStream(filePath, options?)](https://nodejs.org/api/fs.html#fscreatereadstreampath-options) 创建Node.js流（`stream.Readable` 实例）
2. [stream.Readable.toWeb(streamReadable)](https://nodejs.org/api/stream.html#streamreadabletowebstreamreadable) 将Node可读流转换为web流（`ReadableStream` 实例）
3. `ChunksToLinesStream` 在 [Using web streams on Node.js](https://2ality.com/2022/06/web-streams-nodejs.html#example%3A-transforming-a-stream-of-arbitrary-chunks-to-a-stream-of-lines) 中已解释。**块（`Chunks`）是由流产生的数据片段**。如果我们有一个流，它是任意长度的字符串块，通过 `ChunksToLinesStream` 管道，我们将获得一个块是行的流。



Web流是 [异步可迭代的](https://exploringjs.com/impatient-js/ch_async-iteration.html)，这回也是为什么我们可以使用 `for-await-of` 循环迭代行。

如果你对文本行不感兴趣，则我们可以不使用 `ChunksToLinesStream`，对 `webReadableStream` 迭代，得到任意长度的块。



更多信息L:

- web流在 [Using web streams on Node.js](https://2ality.com/2022/06/web-streams-nodejs.html#example%3A-transforming-a-stream-of-arbitrary-chunks-to-a-stream-of-lines) 已介绍
- 行分割符在上面也介绍了

这种方式优点和缺点（对比 读取单一字符串）：

- 😋优点：对大文件效果好 - 我们可以逐渐处理数据，一小块一小块的，不需等待将数据完全读取到内存中
- 😥缺点：很复杂，不是同步的



### 2.3 单一字符串同步写入文件

[fs.writeFileSync(filePath, str, options?)](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options) 将 `str` 写入到 `filePath` 处的文件中。如果该文件已经存在，则会覆写。

🌰：

```js
import * as fs from 'node:fs'

fs.writeFileSync(
  'new-file.txt',
  'First line\nSecond line\n',
  {encoding: 'utf-8'}  
)
```

优缺点（对比流方式）：

- 😋优点：使用简单，同步。使用大多数场景
- 😥缺点：不适用于大文件



### 2.4 追加字符串到文件中（同步的）

下面代码追加文本到已经存在的文件中：

```js {6}
import * as fs from 'node:fs'

fs.writeFileSync(
  'new-file.txt',
  'Append line\n',
  {encoding: 'utf-8', flag: 'a'}  // 🚨 注意这里的 `flag`
)
```

📚这里的代码几乎和上面相同。唯一的区别在于，添加了 `.flag` 配置： `'a'`  表示追加数据。其余可能的配置值（比如，文件不存在抛出错误）可参考 [fs.WriteFileSync-data-options](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)



::: warning

🚨 在某些函数中，这个配置项名为 `.flag`，而有一些又是 `.flags`。

:::



### 2.5 使用流写入多个字符串到文件中

🌰下面代码使用流写入多个字符串到文件中：

```js {8,10,12-14,16}
import * as fs from 'node:fs'
import { Writable } from 'node:stream'

const nodeWritable = fs.createWriteStream(
  'new-file.txt',
  {encoding: 'utf-8'}
)
const webWritableStream = Writable.toWeb(nodeWritable)

const writer = webWritableStream.getWriter()
try {
  await writer.write('First line\n')
  await writer.write('Second line\n')
  await writer.close()
} finally {
  writer.releaseLock()
}
```

🚀🚀我们使用了下面函数：

- [fs.createWriteStream(path, options?)](https://nodejs.org/api/fs.html#fscreatewritestreampath-options) 创建Node流（`stream.Writable` 实例）
- [stream.Writable.toWeb(streamWritable)](https://nodejs.org/api/stream.html#streamwritabletowebstreamwritable) 将Node可写流转换为web流（`WritableStream` 实例）

更多信息：

- WritableStream & Writers 在 [Using web streams On Node.js](https://2ality.com/2022/06/web-streams-nodejs.html) 中已经介绍
- 行分割符在上面也介绍了

优缺点（对比写入单一字符串）：

- 😋优点：适用于大文件，因为数据是以小块小块逐步写入的
- 😥缺点：很复杂，不是同步的方式



### 2.6 通过流追加多个字符串到文件中（异步的）

下面使用流追加文本到已存在文件中：

```js {6}
import * as fs from 'node:fs'
import { Writable } from 'node:stream'

const nodeWritable = fs.createWriteStream(
  'existing-file.txt',
  {encoding: 'utf-8', flags: 'a'} // 🚨 注意这里是 `flags` 而不是 `flag`
)

const webWritableStream = Writable.toWeb(nodeWritable)

const writer = webWritableStream.getWriter()
try {
  await writer.write('First appended line\n')
  await writer.write('Second appended line\n')
  await writer.close();
} finally {
  writer.releaseLock()
}
```

这个代码和上面几乎一样。唯一区别在于我们添加了 `.flags` 配置项：值为 `a`，其余可能的配置值（比如，文件不存在抛出错误）可参考 [fs.WriteFileSync-data-options](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)



::: warning

🚨 在某些函数中，这个配置项名为 `.flag`，而有一些又是 `.flags`。

:::



## 3️⃣ 跨平台处理行分隔符

👩‍🏫不是所有的平台的行分隔符（EOL）都是相同的：

- 在Windows中，EOL是 `\r\n`
- 在Unix中，EOL是 `\n`

想要跨平台处理EOL，可以使用下面几种策略。



### 3.1 读取行分隔符

当读取文本时，最好识别2个平台的EOLs。

当将文本分成行时，会是什么样子？我们可以将eol(以任何一种格式)包括在最后。如果我们修改这些行并将它们写入文件，这使我们能够尽可能少地更改。

当处理包含EOLs行时，有时移除它们也很有用 - 比如：通过下面函数：

```js
const RE_EOL_REMOVE = /\r?\n$/
function removeEol(line) {
  const match = RE_EOL_REMOVE.exec(line)
  if (!match) return line
  return line.slice(0, match.index)
}

assert.equal(
  removeEol('Windows EOL\r\n'),
  'Windows EOL'
)
assert.equal(
  removeEol('Unix EOL\n'),
  'Unix EOL'
)
assert.equal(
  removeEol('No EOL'),
  'No EOL'
)
```



### 3.2 写行分割符

当碰到写入行分隔符时，我们有2种方法：

- ['node:os'模块包含常量EOL](https://nodejs.org/api/os.html#oseol) 表示当前平台的EOL
- 我们可以检测输入文件的EOL格式，然后在改变该文件时，使用该EOL



## 4️⃣ ⭐ 遍历和创建目录



### 4.1 遍历一个目录

下面函数遍历目录，并列举其所有后代（子元素，及子元素的子元素）：

```js
import * as path from 'node:path'
import * as fs from 'node:fs'

function* traverseDirectory(dirPath) {
  const dirEntries = fs.readdirSync(dirPath, {withFileType: true})
  // 对条目进行排序，以保持目录更有调理性
  dirEntries.sort(
    (a, b) => a.name.localeCompare(b.name, 'en')
  )
  
  for (const dirEntry of dirEntries) {
    const fileName = dirEntry.name
    const pathName = path.join(dirPath, fileName)
    yield pathName
    if (dirEntry.isDirectory()) {
      yield* traverseDirectory(pathName) // 💡 递归
    }
  }
}
```

上面函数使用了如下函数：

- [fs.readdirSync(thePath, options?)](https://nodejs.org/api/fs.html#fsreaddirsyncpath-options) 返回 `thePath` 路径下的子元素
  - 如果配置 `withFileTypes: true`，函数返回 `目录条目（directory entries）`，一个 [fs.Dirent](https://nodejs.org/api/fs.html#class-fsdirent) 实例。它有如下属性：
    - dirent.name
    - dirent.isDirectory()
    - dirent.isFile()
    - dirent.isSymbolicLink()
  - 如果 `withFileTypes: false` 或乜有提供，函数返回文件名的字符串

实战🌰：

```js
for (const filePath of traverseDirectory('dir')) {
  console.log(filePath)
}

// 输出
// 'dir/dir-file.txt'
// 'dir/subdir'
// 'dir/subdir/subdir-file1.txt'
// 'dir/subdir/subdir-file2.csv'
```



### 4.2 创建目录（mkdir, mkdir -p）

📒 我们可以使用下面函数创建目录：[fs.mkdirSync](https://nodejs.org/api/fs.html#fsmkdirsyncpath-options)

```js
fs.mkdirSync(thePath, options?)
```

`options.recursive` 决定函数如果创建 `thePath` 目录：

- 如果 `recursive: false` 或不提供，`mkdirSync()` 对如下2种情况返回undeinfed或者抛出异常：
  - `thePath` 处目录（或文件）已经存在
  - `thePath` 的父目录不存在
- 如果 `recursive: true`:
  - 即使 `thePath` 处目录已经存在也没问题
  - `thePath` 的祖先目录在需要时被创建😎
  - `mkdirSync()` 返回第一个最新创建的目录的路径

实战🌰：

```js {4,10}
import * as fs from 'node:fs'

assert.deepEqual(
  Array.from(traverseDirectory('.')), // 遍历当前目录的目录 查看4.1节
  [
    'dir'
  ]
)

fs.mkdirSync('dir/sub/subsub', { recursive: true })

assert.deepEqual(
  Array.from(traverseDirectory('.')), 
  [
    'dir',
    'dir/sub',
    'dir/sub/subsub'
  ]
)
```



### 4.3 确保父目录存在

如果我们想按需设置一个嵌套的文件结构，**当我们创建一个新文件时，我们不缺确认祖先目录是否存在😅**。下面函数可以帮助我们解决这个问题：

```js {6}
import * as path from 'node:path'
import * as fs from 'node:fs'

function ensureParentDirectory(filePath) {
  const parentDir = path.dirname(filePath)
  if (!fs.existsSync(parentDir)) { // 判断是否存在父目录
    fs.mkdirSync(parentDir, {recursive: true})
  }
}
```

实战🌰：

```js {8-10}
assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir'
  ]
)

const filePath = 'dir/sub/subsub/new-file.txt'
ensureParentDirectory(filePath) // A
fs.writeFileSync(filePath, 'content', {encoding: 'utf-8'})

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/sub',
    'dir/sub/subsub',
    'dir/sub/subsub/new-file.txt'
  ]
)
```



### 4.4 创建临时目录

📒 [fs.mktempSync(pathPrefix, options?)](https://nodejs.org/api/fs.html#fsmkdtempsyncprefix-options) 创建临时目录：它会添加6个随机字符给 `pathPrefix`，在新的路径创建目录，并返回该路径。

::: warning

`pathPrefix` 不能以大写 `X` 结尾，因为某些平台会将尾部的 `X`s 用随机字符替换。

:::



如果我们想在操作系统特定的全局临时目录创建临时目录，我们可以使用 [os.tmpdir()](https://nodejs.org/api/os.html#ostmpdir) 函数：

```js {5,8}
import * as os from 'node:os'
import * as path from 'node:path'
import * as fs from 'node:fs'

const pathPrefix = path.resolve(os.tmpdir(), 'my-app') // 路径前缀
// e.g. '/var/folders/ph/sz0384m11vxf/T/my-app'

const tempPath = fs.mktempSync(pathPrefix) // 随机给前缀添加6个随机字符
// e.g. '/var/folders/ph/sz0384m11vxf/T/my-app1QXOXP'
```

::: tip

💡 临时目录不会随着Node脚本的结束而自动被移除。要么我们自己删除它，要么依赖操作系统间歇性的清理全局临时目录（也有可能不被移除）

:::



## 5️⃣ 拷贝，重命名，移动文件或者目录



### 5.1 拷贝文件或目录

📒 [fs.cpSync(srcPath, destPath, options?)](https://nodejs.org/api/fs.html#fscpsyncsrc-dest-options)：从 `srcPath` 处拷贝文件或目录到 `desPath`。有趣配置：

- `recursive` (默认 `false`)：只有这个配置为 `true` 时，目录（包含空目录）才会被拷贝
- `force` (默认 `true`)：如果为 `true`，已存在的文件将被覆写。如果 `false`，已经存在的文件会被保存：
  - `force: false` 时，设置 `errorOnExist: true` 时，如果存在文件路径冲突，会抛出错误
- `filter` 是一个函数，允许我们控制哪些文件被拷贝😎
- `preserveTimestamps` (默认 `false`)：如果 `true`，被拷贝到 `destPath` 的文件或目录保持和来源 `srcPath` 一样的时间戳

实战🌰：

```js {11,16-17}
import * as fs from 'node:fs'

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir-orig',
    'dir-orig/some-filex.txt'
  ]
)

fs.cpSync('dir-orig', 'dir-copy', {recursive: true})

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir-copy',
    'dir-copy/some-file.txt'
    'dir-orig',
    'dir-orig/some-filex.txt'
  ]
)
```



### 5.2 重命名或移动文件或文件夹

📒 [fs.renameSync(oldPath, newPath)](https://nodejs.org/api/fs.html#fsrenamesyncoldpath-newpath) 将 `oldPath` 重命名或移动文件或目录到 `newPath`。



🌰重命名一个目录：

```js {11}
import * as fs from 'node:fs'

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'old-dir-name',
    'old-dir-name/some-file-txt'
  ]
)

fs.renameSync('old-dir-name', 'new-dir-name') // 重命名效果

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'new-dir-name',
    'new-dir-name/some-file-txt'
  ]
)
```



🌰移动文件：

```js {6,10,17}
assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/subdir',
    'dir/subdir/some-file.txt'
  ]
)

fs.renameSync('dir/subdir/some-file.txt', 'some-file.txt') // 移动效果

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/subdir',
    'some-file.txt'
  ]
)
```





## 6️⃣ 移除文件或目录



### 6.1 移除文件和任意目录（shell: rm, rm -r）

📒 [fs.rmSync(thePath, options?)](https://nodejs.org/api/fs.html#fsrmsyncpath-options) 移除 `thePath` 处的文件或目录。有趣的配置项：

- `recursive` (默认 `false`)： 只有这个配置为 `true` 时，目录（包括空目录）才会被移除
- `force` (默认 `false`)：如果为 `false`，当 `thePath` 不存在该文件或目录时，会抛出异常



🌰移除文件：

```js {7,11}
import * as fs from 'node:fs'

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/some-file.txt',
  ]
)

fs.rmSync('dir/some-file.txt')

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
  ]
)
```

🌰 使用 `fs.rmSync()` 递归移除非空目录：

```js {7-8,12}
import * as fs from 'node:fs'

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/subdir',
    'dir/subdir/some-file.txt',
  ]
)

fs.rmSync('dir/subdir', {recursive: true}) // 递归移除子目录及其文件

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
  ]
)
```





### 6.2 移除空目录（shell: rmdir）

📒 [fs.rmdirSync(thePath, options?)](https://nodejs.org/api/fs.html#fsrmdirsyncpath-options) 移除空目录（如果目录不为空，则抛出异常）。

🌰：

```js {7,11}
import * as fs from 'node:fs'

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/subdir',
  ]
)

fs.rmdirSync('dir/subdir') // 移除空目录

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
  ]
)
```





### 6.3 清空目录

一个脚本保存其输出到目录 `dir`，通常需要在开始前先 `清空目录（clear dir）`：清空 `dir` 下所有文件，下面函数帮助我们完成这一需求：

```js
import * as path from 'node:path'
import * as fs from 'node:fs'

function clearDirectory(dirPath) {
  for (const fileName of fs.readdirSync(dirPath)) {
    const pathName = path.join(dirPath, fileName)
    fs.rmSync(pathName, {recursive: true})
  }
}
```

这里使用到了2个fs函数：

1. `fs.readdirSync(dirPath)` 返回 `dirPath` 目录中所有子元素的名字。可参考上面的 `4.1` 节
2. `fs.rmSync(pathName, options?)` 移除文件和目录（包括空目录）。可参考上面的 `6.1` 节

🌰：

```js {5-7,11}
assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/dir-file.txt', // 下面都是'dir'目录中的文件或子目录
    'dir/subdir',
    'dir/subdir/subdir-file.txt'
  ]
)

clearDirectory('dir')

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
  ]
)
```



### 6.4 trash库

[trash库](https://github.com/sindresorhus/trash) 将文件和文件夹移到垃圾桶。跨平台。例子:

```js
import trash from 'trash'

await trash(['*.png', '!rainbow.png'])
```

`trash()` 第一个参数接收字符串数组或者字符串。任何字符串都可以是 `glob` 模式。





## 7️⃣ 读和改变文件系统条目



### 7.1 ⭐ 检测文件或目录是否存在



📒 [fs.existsSync(thePath)](https://nodejs.org/api/fs.html#fsexistssyncpath) 检测 `thePath` 路径的文件或目录是否存在。

```js {12,16,20}
import * as fs from 'node:fs'

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/some-file.txt'
  ]
)

assert.equal(
  fs.existsSync('dir'), // 目录是否存在
  true
)
assert.equal(
  fs.existsSync('dir/some-file.txt'), // 文件是否存在
  true
)
assert.equal(
  fs.existsSync('dir/non-existent-file.txt'), 
  false
)
```



### 7.2 检测文件stats：是否是路径？创建时间？等



📒 [fs.statSync(thePath, options?)](https://nodejs.org/api/fs.html#fsstatsyncpath-options) 返回一个 `fs.Stats` 实例，包含 `thePath` 文件或目录信息。

有趣配置：

- `throwIfNoEntry` (默认： true)：如果给定路径不存在实体会发生什么？
  - `throwIfNoEntry: true` : 抛出异常
  - `throwIfNoEntry: false`: 返回undefined
- `bigint` (默认： false): 如果为 `true`，函数使用bigints表示数值类型值，比如时间戳。

[fs.Stats](https://nodejs.org/api/fs.html#class-fsstats) 实例属性：

- 什么类型的文件系统条目？
  - `stats.isFile()`
  - `stats.isDirectory()`
  - `stats.isSymbolicLink()`
- `stats.size` 字节尺寸
- 时间戳（`Timestamps`）:
  - 3种类型时间戳
    - `stats.atime`: 最后访问时间
    - `stats.mtime`: 最后修改时间
    - `stats.birthtime`: 创建时间
  - 每个时间戳都可以指定3种不同的单位 - 以 `atime` 为例
    - `stats.atime`: `Date` 实例
    - `stats.atimeMS`: ms (POSIX Epoch开始)
    - `stats.atimeNs`: ns (POSIX Epoch开始，需要开启 `bigints` 配置)

下面用 `fs.statSync()` 属性 `isDirectory()` 函数：

```js
import * as fs from 'node:fs'

function isDirectory(thePath) {
  const stats = fs.statSync(thePath, {throwIfNoEntry: false})
  return stats !== undefined && stats.isDirectoru()
}

assert.deepEqual(
  Array.from(traverseDirectory('.')),
  [
    'dir',
    'dir/some-file.txt',
  ]
)

assert.equal(
  isDirectory('dir'), true
)

assert.equal(
  isDirectory('dir/some-file.txt'), false
)
assert.equal(
  isDirectory('non-existent-dir'), false
)
```



### 7.3 改变文件特性：权限，拥有者，组，时间戳

下面函数用于改变文件特性：

1. [fs.chmodSync(path, mode)](https://nodejs.org/api/fs.html#fschmodsyncpath-mode) 改变文件权限（`permission`）
2. [fs.chownSync(path, uid, gid)](https://nodejs.org/api/fs.html#fschownsyncpath-uid-gid) 改变文件拥有者（`owner`） 和 组（`group`）
3. [fs.utimeSync(path, atime, mtime)](https://nodejs.org/api/fs.html#fsutimessyncpath-atime-mtime) 改变文件时间戳
   - `atime`: 最近一次访问时间
   - `mtime`: 最近一次修改时间



## 8️⃣ 操作链接（Links）

👩‍🏫操作硬链接（`hard links`）的函数：

- [fs.linkSync(existingPath, newPath)](https://nodejs.org/api/fs.html#fslinksyncexistingpath-newpath) 创建一个硬链接
- [fs.unlinkSync(path)](https://nodejs.org/api/fs.html#fsunlinksyncpath) 移除硬链接，并可能性的移除硬链接指向的文件（如果移除的是最后一个指向该文件的硬链接）



操作符号链接（`symbolic links`） 的函数：

- [fs.symlinkSync(target, path, type?)](https://nodejs.org/api/fs.html#fssymlinksynctarget-path-type) 创建从 `path` 到 `target` 的符号链接
- [fs.readlinkSync(path, options?)](https://nodejs.org/api/fs.html#fsreadlinksyncpath-options) 获取 `path` 处的目标符号链接



下面函数用于操作符号链接，并且不会解除对符号链接的引用（注意前缀为 `l` 🤩）:

- [fs.lchmodSync(path, mode)](https://nodejs.org/api/fs.html#fslchmodsyncpath-mode) 改变 `path` 路径的符号链接的权限
- [fs.lchownSync(path, uid, gid)](https://nodejs.org/api/fs.html#fslchownsyncpath-uid-gid) 改变对应路径符号链接的用户和组
- [fs.lutimesSync(path, atime, mtime)](https://nodejs.org/api/fs.html#fslutimessyncpath-atime-mtime) 改变对应路径符号链接的时间戳
- [fs.lstatSync(path, options?)](https://nodejs.org/api/fs.html#fslstatsyncpath-options) 返回对应路径符号链接的统计数据（时间戳等）

其它有用函数：

- [fs.realpathSync(path, options?)](https://nodejs.org/api/fs.html#fsrealpathsyncpath-options) 通过解析点(`.`)、双点(..)和符号链接计算规范路径名

影响符号链接处理方式的函数：

- [fs.cpSync(src, dest, options?)](https://nodejs.org/api/fs.html#fscpsyncsrc-dest-options):
  - `dereference` (默认 `false`)： 如果为 `true`，拷贝符号链接指向的we年，而不是符号链接本身😎
  - `verbatimSymlinks`  (默认 `true`)： 如果为 `false`，复制的符号链接的目标将被更新，以便它仍然指向相同的位置。如果为 `true`，则不会更改目标





## 9️⃣ 进一步阅读



- [Using web streams on Node.js - blog](https://2ality.com/2022/06/web-streams-nodejs.html)
- 关于js异步编程的 `JavaScript for impatient programmers`：
  - [Foundations of asynchronous programming in javascript](https://exploringjs.com/impatient-js/ch_async-js.html)
  - [Promises for asynchrous programming](https://exploringjs.com/impatient-js/ch_promises.html)
  - [Async functions](https://exploringjs.com/impatient-js/ch_async-functions.html)
  - [Asynchronous iteration](https://exploringjs.com/impatient-js/ch_async-iteration.html)

原文链接：

- [Working with the file system on Node.js - @2ality](https://2ality.com/2022/06/nodejs-file-system.html#important-classes)

2022年08月14日15:01:06

