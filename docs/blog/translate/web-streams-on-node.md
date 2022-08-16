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

1. 一开始，WritableStream发出消耗，它此时已经不能处理更多的数据了（即饱和了）
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
- `cancel(reason)`: 取消流，因为消费者对它不再感兴趣了。`reason` 参数是可读流底层源。当这个操作完成时，返回的Promise也会resolve
- `pipeTo()`: 将可读流数据填充给可写流。当这个操作完成时，返回的Promise也会resolve。`pipeTo()` 确保背压，关闭，错误等等能正确的在管道链中传播。我们可以通过其第二个参数指定配置项：
  - `signal`: 允许我们给这个方法传递一个 `AbsortSignal`，允许我们通过该AbsortSignal终止管道
  - `preventClose`：如果为 `true`，当可读流关闭时，会阻止可写流的关闭。当我们想将多个可读流连接到相同的可写流时特别有用
  - 其余配置可参考 [web streams定义](https://streams.spec.whatwg.org/#rs-prototype)
- `pipeThrough()`: 将它的ReadableStream连接到 ReadableWritablePair(某种 TransformStream).它返回结果ReadableStream（比如：ReadableWritablePair的可读端）。

下面小结包含2种消费ReadableStreams的方式：

1. 通过 `Readers` 读取
2. 通过异步迭代方式读取







