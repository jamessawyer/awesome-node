---
title: Web Streans
---

[[toc]]



[web streams](https://streams.spec.whatwg.org/) 是一种标准流，目前支持所有主流web平台：web浏览器，Node.js，Deno😎。

::: tip

🚀 流是对数据读和写的一种抽象，它以小块小块顺序数据的方式对各种来源的数据进行处理，来源可能是 - 文件，服务器上的数据等等

:::

例如，[全局函数fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)(用于下载线上资源) 异步返回一个Response，它有一个是web stream的 `.body` 属性。



本文讲解Web streams 在Node.js平台上，但是我们所学的，大多数适用于所有web streams支持的平台。





## 1️⃣ ⭐ 什么是web streams?

我们先看看web streams的一些基础知识，之后，我们再看看示例。

👩🏻‍🏫 流是一种用于访问以下数据的一种数据结构：

- Files（文件）
- 服务器上的数据
- 扥等

2大好处🤩：

1. 我们可以处理大量的数据，因为流云后续我们将其拆分为小块（称之为 `chunks`），这样便可以一次性处理一小块
2. 我们可以使用相同的数据结构 - streams，同时处理不同的数据，这使得复用代码变得简单

👩🏻‍🏫 [Web streams](https://streams.spec.whatwg.org/#intro) （`web` 通常会被忽略）是一种面向web浏览器相对新的标准，但是它同时也被Node.js和Deno所支持。（[MDN兼容性表](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API#browser_compatibility)）

🚀 在web streams中，`chunks` 通常是下面中的某一种：

- 文本流：字符串
- 字节流：Uint8Array（一种 [TypedArray](https://exploringjs.com/impatient-js/ch_typed-arrays.html)）



### 1.1 streams的种类

👩🏻‍🏫 有3种主要类型的web streams:

1. `ReadableStream`(可读流) 用于从 `source` 处读取数据。完成这一任务的代码通常称之为 `Consumer`（消费者）
2. `WritableStream`（可写流） 用于将数据写入到 `sink`。完成这一任务的代码通常称之为 `Producer`（生产者）
3. `TransformStream`（转换流） 由2种流组成：
   1. 从它 `writable side`（可写端） 接收输入，它是一个 `WritableStream`
   2. 它发送数据到 `readable side` （可读端），它是一个 `ReadableStream`



其思想是通过TransformStream `管道（pipeline）` 来转换数据。即，我们写入数据到可写端，然后从可读端读取转换好的数据。以下的TransformStreams被构建到大多数JavaScript平台中：

- 因为JS字符串是 `UTF-16` 编码的，而 `UTF-8` 编码的数据在JS在被当做字节。`TextDecoderStream` 可将这样的数据转换为字符串
- `TextEncoderStream` 将JS字符串转换为 `UTF-8` 数据
- `CompressionStream` 压缩字节数据为 `GZIP` 和其它压缩格式
- `DecompressionStream` 从GZIP和其它压缩格式解压为字节数据。



ReadableStreams & WritableStreams & TransformStreams 可用于 `传输` 文本或字节数据。本文主要对文本进行处理。 用于字节数据的 `Byte streams` 会在最后简短的提一下。



### 1.2 管道链（Pipe chains）

`Piping` 是一种操作，允许我们将一个ReadableStream `连接` 到一个WritableStream：只要ReadableStream产生数据，这个操作便会读取该数据，然后写入到WritableStream中😎。

🚀如果我们连接2个流，我们便得到一种便利的方式，将数据从一个位置转移到另一个位置（比如：拷贝文件）。然而，我们可以连接2个以上的流，然后我们便得到一个 `管道链（pipe chains）`，用这个管道链我们可以以各种方式对数据进行处理。管道链的例子：

1. 以一个 Readablestream 开始
2. 接着跟上一个或多个TransformStreams
3. 链的终端以一个 WritableStream 结束

ReadableStream通过管道将前者连接到后者的可写端，从而连接到TransformStream。类似地，TransformStream通过管道将前者的可读端连接到后者的可写端，从而连接到另一个TransformStream。TransformStream通过将前者的可读端输送到后者来连接到WritableStream。



### 1.3 背压（Backpressure）



**😅在管道链中存在的一个问题是，某个成员接收到的数据超过了它当时能处理的数据量。** `Backpressure` 是用来解决这一问题的一种技术：它使它的数据接受者（`receiver`）告诉发送者（`sender`），它应该临时停止发送数据，这样以免接受者过载。

另一种理解背压的方式是，它是一个通过管道链向后传播的信号，从被过载的成员到链的起点。作为例子，考虑下面管道链：

```bash
ReadableStream -pipeTo-> TransformStream -pipeTo-> WritableStream
```

🚀🚀下面是背压如何通过这个链的：

1. 一开始，WritableStream发出信号，它此时已经不能处理更多的数据了（即饱和了）
2. 管道停止从TransformStream读取数据
3. 输入积压在TransformStream内部（使用buffer）
4. TransformStream发出信号，它的buffer也已经满了
5. 管道开始停止从ReadableStream读取数据

我们回到了管道链的开端。因此，不再有数据积累在ReadableStream中（也是buffer），WritableStream 便有时间进行修复了。一旦处理完成，WritableStream便发出信号，它已经准备好再次接收数据了。这个信号往回走，直到到达ReadableSteam，数据处理开始恢复。



这里只是简单的说了背压的过程，为了便于理解，有些细节被忽略了。后面会详细的讲解。



### 1.4 Node对Web streams的支持

在Node.js中，web streams有2种源：

1. 来自 [node:stream/web](https://nodejs.org/api/webstreams.html) 模块
2. 通过全局变量（类似web浏览器）

此时，在Node.js中只有一个API直接支持web streams - [fetch API](https://nodejs.org/api/globals.html#fetch) :

```js
const response = await fetch('https://example.com')
const readableStream = response.body
```

其余的接口，我们需要使用模块 `node:stream` 中的某个静态方法将Node流转换为web流，或web流转换为Node流：

- Node的 Readables 可转换为 WritableStream 或从 WritableStream 转换为Readable
  - `Readable.toWeb(nodeReadable)`
  - `Readable.fromWeb(webReadableStream, options?)`
- Node的 Writables 可转换为 ReadableStreams 或 从 ReadableStreams 转换为 Writables:
  - `Writable.toWeb(nodeWritable)`
  - `Writable.fromWeb(webWritableStream, options?)`
- Node的 Duplexes 可以转换为 TransformStreams 或 从 TransformStreams 转换为 Duplexes
  - `Duplex.toWeb(nodeDuplex)`
  - `Duplex.fromWeb(webTransformStream, options?)`

其它API部分支持web streams：`FileHandles` 有个 [readableWebStream()](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#filehandlereadablewebstream) 方法。





## 2️⃣ 从 ReadableStreams 读取

可读流（`ReadableStreams`）允许我们从各种源读取数据块。其定义如下：

```typescript
interface ReadableStream<TChunk> {
  getReader(): ReadableStreamDefaultReader<TChunk>;
  readonly locked: boolean;
  [Symbol.asyncIterator](): AsyncIterator<TChunk>;
  
  cancel(reason?: any): Promise<void>;
  
  pipeTo(
  	destination: WritableStream<TChunk>,
    options?: StreamPipeOptions 
  ): Promise<void>;
  pipeThrough<TChunk2>(
  	transfrom: ReadableWritablePair<TChunk2, TChunk>,
    options?: StreamPipeOptions
  ): ReadableStream<TChunk2>;
  
  // 本文不会使用
  tee(): [ReadableStream<TChunk>, ReadableStream<TChunk>];
}

interface StreamPipeOptions {
  signal?: AbsortSignal;
  preventClose?: boolean;
  preventAbort?: boolean;
  preventCancel?: boolean;
}
```

解释一下这些属性：

- `getReader()`: 返回一个 Reader - 一个对象，我们可以通过它从 ReadableStream 中读取数据。ReadableStreams返回Reader，类似于 [iterables](https://exploringjs.com/impatient-js/ch_sync-iteration.html) 返回iterators。
- `locked`: 同一时间每个ReadableStream只能有一个Reader激活。当一个Reader正在使用时，ReadableStream被锁定，此时 `getReader()` 不能被调用
- [Symbol.asyncIterator](https://exploringjs.com/impatient-js/ch_async-iteration.html): 这个方法使ReadableStreams [异步可迭代](https://exploringjs.com/impatient-js/ch_async-iteration.html)。现在只有某几个平台实现这个函数
- `cancel(reason)`: 取消流，因为消费者对它不再感兴趣了。`reason` 参数会传递到底层可读流源的 `cancel()` 方法中。当这个操作完成时，返回的Promise也会resolve
- `pipeTo()`: 将可读流数据填充给可写流。当这个操作完成时，返回的Promise也会resolve。`pipeTo()` 确保背压，关闭，错误等等能正确的在管道链中传播。我们可以通过其第二个参数指定配置项：
  - `signal`: 允许我们给这个方法传递一个 `AbortSignal`，允许我们通过该AbortSignal终止管道
  - `preventClose`：如果为 `true`，当可读流关闭时，会阻止可写流的关闭。当我们想将多个可读流连接到相同的可写流时特别有用
  - 其余配置可参考 [web streams定义](https://streams.spec.whatwg.org/#rs-prototype)
- `pipeThrough()`: 将它的ReadableStream连接到 ReadableWritablePair(某种 TransformStream).它返回结果ReadableStream（比如：ReadableWritablePair的可读端）。

下面小结包含2种消费ReadableStreams的方式：

1. 通过 `Readers` 读取
2. 通过异步迭代方式读取



### 2.1 通过Readers消费可读流

📚我们可以通过 `Readers` 从 `ReadableStreams` 中读取数据。它们有如下类型：

```typescript
interface ReadableStreamGenericReader {
  readonly closed: Promise<undefined>;
  cancel(reason?: any): Promise<void>;
}

interface ReadableStreamDefaultReader<TChunk>
  extends ReadableStreamGenericReader
{
  releaseLock(): void;
  read(): Promise<ReadableStreamReadResult<TChunk>>;
}

interface ReadableStreamReadResult<TChunk> {
  done: boolean;
  value: TChunk | undefined;
}
```

属性解释：

- `.closed`：流关闭后，这个Promise完成。如果流出现错误或者流关闭前就释放了Reader的锁（`lock`）,这个Promise便会 `reject`
- `.cancel()`：在一个激活的Reader中，这个方法用于取消与之关联的可读流
- `.releaseLock()`：使Reader失活，并且解锁它的流
- `.read()`：返回一个 `ReadableStreamReadResult` 类型的Promise，该类型对数据块（`chunk`）进行了包装，它有2个属性：(`类似与iterator`)
  - `.done` - 是否chunks读取完成，完成则返回 `true`，没有完成则返回 `false`
  - `.value` - 数据块（`chunk`），最后一块数据块之后返回的为 `undefined`

::: tip

如果你熟悉迭代器（`iterators`）的话，`ReadableStreamReadResult` 可能看着有点眼熟，它与迭代器类似，`Readers` 类似于迭代器，而 `ReadableStreamReadResult` 则类似于迭代器 `.next()` 方法返回的对象。

:::

🌰 下面示例使用 `Readers` 展示了该协议：

```js
const reader = readableStream.getReader() // A
assert.equal(readableStream.locked, true) // B
try {
  while (true) {
    const { done, value: chunk } = await reader.read() // C
    if (done) break
    // 使用 `chunk`
  }
} finally {
  reader.releaseLock()                   // D
}
```

1. `A` - 获取一个Reader，每个可读流都最多有一个Reader
2. `B` - Reader被获取后，`readableStream` 便被锁定了
3. `C` - 读取数据块。`.read()` 方法返回一个包含 `.done` & `.value` 对象的Promise。最后一块数据块读取完成后，`.done` 变为 `true`。这个方式类似于JS中的 [Asynchronous Iteration](https://exploringjs.com/impatient-js/ch_async-iteration.html)
4. `D` - 为了能再次调用 `.getReader()` 获取Reader，我们必须调用 `.releaseLock()` 释放锁



#### 2.1.1 🌰 通过ReadableStream读取文件

下面示例我们从 `data.txt` 读取数据块（字符串形式）：

```js {10}
import * as fs from 'node:fs'
import path from 'node:path'
import { Readable } from 'node:stream';
import { __dirname } from '../../tool.js'

const nodeReadable = fs.createReadStream(
  path.join(__dirname, 'data.txt'),
  { encoding: 'utf8' } // 编码为 utf8 时，表示以字符串形式读取
)
// 将 Node Readable 转换为 Web ReadableStream
const webReadableStream = Readable.toWeb(nodeReadable) // A

const reader = webReadableStream.getReader()
try {
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    console.log(value)
  } 
} finally {
  reader.releaseLock()
}

// 打印data.txt文本中的内容
```

::: info



`__dirname` 是ESM模块对CJS中的全局变量的封装：

```js
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export {
  __filename,
  __dirname
}
```

:::





#### 2.1.2 🌰 将ReadableStream内容组装为字符串

下面将一个ReadableStream所有数据块拼接为一个字符串，然后返回它：

```js
async function readableStreamToString(readableStream) {
  const reader = readableStream.getReader()
  try {
    let result = ''
    while (true) {
      const { done, value } = await reader.read()
      if (done) {        // 流读取完成
        return result
      }
      result += value    // 拼接
    }
  } finally {
    reader.releaseLock() // 释放锁
  }
}
```



### 2.2 通过异步迭代器消费可读流

可读流也可以通过 [Asynchronous Iteration](https://exploringjs.com/impatient-js/ch_async-iteration.html) 消费：

```js {6}
const iterator = readableStream[Symbol.asyncIterator]()
let exhaustive = false
try {
  while (true) {
    let chunk;
    ({done: exhaustive, value: chunk} = await iterator.next());
    if (exhaustive) break
    console.log(chunk)
  }
} finally {
  // 如果循环在迭代完全前就终止了（异常或者提前的reture）
  // 我们必须调用 `iterator.return()` 检测是否是这种情形
  if (!exhaustive) {
    iterator.return()
  }
}
```

😎感谢 `for-await-of` 循环帮助我们处理异步迭代：

```js
for await (const chunk of readableStream) {
  console.log(chunk)
}
```

#### 2.2.1 🌰 使用异步迭代读取流

下面我们使用异步迭代的方式而不是 `Reader` 的方式完成上面读取文本 `data.txt` 内容的例子：

```js {12-14}
import * as fs from 'node:fs'
import { Readable } from 'node:stream'
import path from 'node:path'
import { __dirname } from '../../tool.js'

const nodeReadable = fs.createReadStream(
  path.join(__dirname, 'streams/web', 'data.txt'),
  { encoding: 'utf8' }
)

const webReadable = Readable.toWeb(nodeReadable)
for await (const chunk of webReadable) {
  console.log(chunk)
}

// 打印data.txt文本中的内容
```



#### 2.2.2 🚨陷阱：浏览器不支持对可读流的异步迭代

目前Node和Deno都是支持对可读流的异步迭代，但是web浏览器还不支持😅。[GitHub issue](https://github.com/whatwg/streams/issues/778) 讨论这个bug。

鉴于目前还不完全清楚如何在浏览器上支持异步迭代，包装是比polyfill更安全的选择。以下代码是[基于Chromium bug报告中的建议](https://bugs.chromium.org/p/chromium/issues/detail?id=929585#c10):

```js
async function* getAsyncIterableFor(readableStream) {
  const reader = readableStream.getReader()
  try {
    while (true) {
      const {done, value} = await reader.read()
      if (done) return
      yield value
    }
  } finally {
    reader.releaseLock()
  }
}
```



### 2.3 创建管道链

可读流有2种创建管道链（`pipe chains`）的方式:

1. `readableStream.pipeTo(writeableStream)` - 同步的返回一个Promise `p`。它异步的读取可读流中所有的数据块，然后写入到写入流中。当完成时，Promise p `resolve` 。
2. `readableStream.pipeThrough(transformStream)` - 将可读流连接到 `transform.writable`，然后返回 `transformStream.readable` （每个转换流都有这些属性指向它的可写端（`writable side`）和可读端（`readable side`））。可以理解为 `通过将一个转换流与可读流连接，我们创建了一个新的可读流`📚



## 3️⃣ 通过包装将数据源转换为ReadableStreams


原文地址：
 - [Using web streams on Node.js - @exploringjs.com](https://exploringjs.com/nodejs-shell-scripting/ch_web-streams.html)