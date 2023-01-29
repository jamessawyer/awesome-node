import{_ as e,a as s}from"./chunks/pipe-stream-example.aae87789.js";import{_ as a,c as r,o as t,b as o}from"./app.1b6a4c98.js";const l="/awesome-node/assets/streams-tank.26c9e313.jpg",p="/awesome-node/assets/readable-stream.f84df7cd.jpg",n="/awesome-node/assets/writable-tream.aa25999d.jpg",i="/awesome-node/assets/duplex-stream.951f8ddf.jpg",c="/awesome-node/assets/transform-stream.62eafd42.jpg",d="/awesome-node/assets/highWaterMark.fc023e6a.jpg",m="/awesome-node/assets/inner-highWaterMark.8fa2af9e.jpg",h="/awesome-node/assets/resize-image.3d3ccbbe.jpg",g="/awesome-node/assets/pipe-stream-real-example.959f1da7.jpg",j=JSON.parse('{"title":"Stream图解","description":"","frontmatter":{"title":"Stream图解"},"headers":[{"level":2,"title":"1️⃣ 水流和信息流（Water flows, Information flows）","slug":"_1️⃣-水流和信息流-water-flows-information-flows","link":"#_1️⃣-水流和信息流-water-flows-information-flows","children":[]},{"level":2,"title":"2️⃣ Readable Stream","slug":"_2️⃣-readable-stream","link":"#_2️⃣-readable-stream","children":[]},{"level":2,"title":"3️⃣ Writable Stream","slug":"_3️⃣-writable-stream","link":"#_3️⃣-writable-stream","children":[]},{"level":2,"title":"4️⃣ Duplex Stream","slug":"_4️⃣-duplex-stream","link":"#_4️⃣-duplex-stream","children":[]},{"level":2,"title":"5️⃣ Transform Stream","slug":"_5️⃣-transform-stream","link":"#_5️⃣-transform-stream","children":[]},{"level":2,"title":"6️⃣ Piping Streams","slug":"_6️⃣-piping-streams","link":"#_6️⃣-piping-streams","children":[]},{"level":2,"title":"7️⃣ Copying Data with Streams🌰","slug":"_7️⃣-copying-data-with-streams🌰","link":"#_7️⃣-copying-data-with-streams🌰","children":[]},{"level":2,"title":"8️⃣ 背压（Backpressure）","slug":"_8️⃣-背压-backpressure","link":"#_8️⃣-背压-backpressure","children":[]},{"level":2,"title":"9️⃣ 图片压缩实例🌰","slug":"_9️⃣-图片压缩实例🌰","link":"#_9️⃣-图片压缩实例🌰","children":[]}],"relativePath":"core/stream/stream-visulization.md","lastUpdated":1674975353000}'),_={name:"core/stream/stream-visulization.md"},f=o('<p>想象你有一堆砖，你想用这些砖砌一面墙。假设你有一个朋友帮助你移动这些砖块。为了砌这面墙，你现在有2个选择：</p><ol><li>等你朋友将这堆砖全部搬给你之后，你再开始砌墙</li><li>只要你朋友给你砖，你就开始砌墙</li></ol><p>哪一种更高效呢？显然第2种方式更加的高效，<strong>这其实是 <code>stream</code> （这里实例是砖块流）提升效率的一个很形象的比喻</strong>。另一个常见的场景就是，看电影时，边看边缓存，而不是将整部电影下载好之后再去看。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>维基百科对 <strong>流</strong> 的定义是： <em>在计算机科学中，流是随时间推移可用的数据元素序列。流就像传送带上的物件，一次只处理部分，而不是一次性大批量的被处理</em>。</p></div><p>在Node.js中，<a href="https://nodejs.org/api/stream.html" target="_blank" rel="noreferrer">stream模块</a> 提供了很多处理流的工具。即使你没有显式的使用过流模块，但是Node.js应用很多底层功能都会用到流。流是一个简单的概念，但是如果你之前没接触过流的概念，会觉得它很复杂。因此，这里我用可视化的形式来描述Node.js中流的一些关键概念，希望能帮助你理解。</p><h2 id="_1️⃣-水流和信息流-water-flows-information-flows" tabindex="-1">1️⃣ 水流和信息流（Water flows, Information flows） <a class="header-anchor" href="#_1️⃣-水流和信息流-water-flows-information-flows" aria-hidden="true">#</a></h2><p>信息就像液体，它以 <code>bits</code> 流的形式从一个地方流向另一个地方。例如，当2个人通过网络聊天时，流从一个地方流向另一个地方，即使你的应用可能通过磁盘或者外设通信。但这种形式的 <strong>I/O</strong> 出现时，信息从一个设备读取，然后流向应用，反之亦然。</p><p>然而，有可能出现，在上述的事务中一个终端由于种种原因比另一个设备更慢。因此，一些数据可能需要在中间地段被“缓冲”起来，直到接收端准备好接受更多数据。</p><p>如下图所示，2个尺寸不一样大的水龙头通过一个罐子连接，上面注入水的速度比下面排水的速度更快。因此，罐子必须临时存储（<strong>缓冲</strong>）多余的水。</p><p><img src="'+l+'" alt="streams-tank"></p><p>📚 这便是Node.js中流的基本思想。<strong><code>stream</code> 模块模块在处理流数据时提供了实现此行为的功能。</strong> Node.js中提供了2种基本的流类型：</p><ol><li><strong>可读流（<code>Readable Stream</code>s）</strong></li><li><strong>可写流（<code>Writable Streams</code>）</strong></li></ol><p>然后还有2种混合了上面2种基本流的混合类型流，用于特殊的目的：</p><ol><li><strong>双工流（<code>Duplex Streams</code>）</strong></li><li>转换流（<code>Transform Streams</code>）</li></ol><p>下面我们了解更多的细节，尝试可视化这些概念🤩。</p><h2 id="_2️⃣-readable-stream" tabindex="-1">2️⃣ Readable Stream <a class="header-anchor" href="#_2️⃣-readable-stream" aria-hidden="true">#</a></h2><p>📚可读流可用于从底层源（比如 <code>file descriptor</code>） 读取数据。如果应用消耗数据的速度比操作系统从源读取的数据要更慢，可以使用<code>Readable内部</code>的 <a href="https://nodejs.org/api/stream.html#stream_buffering" target="_blank" rel="noreferrer">Buffer</a> 对数据进行缓存:</p><p><img src="'+p+'" alt="可读流"></p><p>NodeJS中几个最常见的可读流是：</p><ol><li><a href="https://nodejs.org/api/process.html#process_process_stdin" target="_blank" rel="noreferrer">process.stdin</a></li><li><a href="https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options" target="_blank" rel="noreferrer">fs.createReadStream</a></li><li>HTTP服务中的 <a href="http://nodejs.cn/api/http.html#http_class_http_incomingmessage" target="_blank" rel="noreferrer">IncomingMessage</a> 对象</li></ol><h2 id="_3️⃣-writable-stream" tabindex="-1">3️⃣ Writable Stream <a class="header-anchor" href="#_3️⃣-writable-stream" aria-hidden="true">#</a></h2><p>可写流用于将应用中的数据写入到特定的目的地。如果目的地消耗数据的速度比写入应用程序要更慢，为了防止数据丢失或目的地过载，数据可以存储在<code>Writable内部</code>的 <a href="https://nodejs.org/api/stream.html#stream_buffering" target="_blank" rel="noreferrer">Buffer</a> 中:</p><p><img src="'+n+'" alt="可写流"></p><p>你平时最常用的可写流，可能就是 <a href="https://nodejs.org/api/process.html#process_process_stdout" target="_blank" rel="noreferrer">process.stdout</a>, <code>console.log</code> 底层就是用到的它，除了它以外，另外2个很常见的写入流是：</p><ol><li><a href="https://nodejs.org/api/process.html#process_process_stderr" target="_blank" rel="noreferrer">process.stderr</a></li><li><a href="http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options" target="_blank" rel="noreferrer">fs.createWriteStream</a></li></ol><h2 id="_4️⃣-duplex-stream" tabindex="-1">4️⃣ Duplex Stream <a class="header-anchor" href="#_4️⃣-duplex-stream" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>正如上面提到的，<code>双工流</code>是可读流和可写流的混合体。连接双工流的应用，能同时从双工流中读取数据和向双工流中写入数据📚。</p></div><p>最常见的双工流就是 <a href="http://nodejs.cn/api/net.html#net_class_net_socket" target="_blank" rel="noreferrer">net.Socket</a>。在双工流中，读和写是<code>相互独立</code>的部分，它们都各自拥有自己的buffers📚:</p><p><img src="'+i+'" alt="双工流"></p><h2 id="_5️⃣-transform-stream" tabindex="-1">5️⃣ Transform Stream <a class="header-anchor" href="#_5️⃣-transform-stream" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>转换流是一个更特别的混合体，它的可读部分以某种方式连接到它的可写部分。</p></div><p>最常见的形式，可能是 <a href="https://nodejs.org/api/stream.html#stream_buffering" target="_blank" rel="noreferrer">Cipher</a> 类创建的加密流（crypto stream）。这种形式中，应用将普通数据写入流中，然后从相同的流中读取加密后的数据:</p><p><img src="'+c+'" alt="转换流"></p><p>可能最简单的转换流就是 <a href="http://nodejs.cn/api/stream.html#stream_class_stream_passthrough" target="_blank" rel="noreferrer">stream.PassThrough</a>, 其输入的数据不经过任何转换就传递给输出。虽然听起来没什么用，但是可用它实现对流的自定义行为。</p><div class="tip custom-block"><p class="custom-block-title">💡</p><p>可把 <code>PassThrough</code> 理解为RxJS中的 <a href="https://www.learnrxjs.io/learn-rxjs/operators/utility/do" target="_blank" rel="noreferrer">Tap</a> 操作符</p></div><h2 id="_6️⃣-piping-streams" tabindex="-1">6️⃣ Piping Streams <a class="header-anchor" href="#_6️⃣-piping-streams" aria-hidden="true">#</a></h2><p>📚在很多情形下，将多个流连接起来会更加有用。我们称之为 <strong>管道 （<code>piping</code>）</strong>。你可以使用<code>可读流</code>提供的 <strong><code>pipe()</code></strong> 方法将可读流连接到另一个可写流或者双工流或者转换流上：</p><p><img src="'+e+`" alt="Piping Stream"></p><p>比较常见的一个例子就是，将 <code>fs.createReadStream()</code> 和 <code>fs.createWriteStream()</code> 通过管道连接起来，实现将文件从一个地方拷贝到另一个地方的功能。</p><h2 id="_7️⃣-copying-data-with-streams🌰" tabindex="-1">7️⃣ Copying Data with Streams🌰 <a class="header-anchor" href="#_7️⃣-copying-data-with-streams🌰" aria-hidden="true">#</a></h2><p>管道的另一个有趣的地方就是，可以将同一个流使用管道多次连接起来😎。这对需要多次读取相同流的情况很有用，因为在另一个消费者完全读取后，你无法再次从可读流中读取。然而，通过多次管道可读流，多个消费者可以通过从原始可读流复制数据来读取相同的流。</p><p>下面的简单示例中，我们对<code>original.txt</code> 文件进行2次拷贝：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> original </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createReadStream</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./original.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> copy1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createWriteStream</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./copy1.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> copy2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createWriteStream</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./copy2.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">original</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(copy1)</span></span>
<span class="line"><span style="color:#A6ACCD;">original</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(copy2)</span></span>
<span class="line"></span></code></pre></div><p>上面示例，用图形表示如下：</p><p><img src="`+s+'" alt="Pipe Stream example"></p><h2 id="_8️⃣-背压-backpressure" tabindex="-1">8️⃣ 背压（Backpressure） <a class="header-anchor" href="#_8️⃣-背压-backpressure" aria-hidden="true">#</a></h2><p>现在我们回顾一下我们之前水箱的比喻，在上面的比喻中，上流以更快的速度注水，下流消费速度比较慢。这种情形下，水箱高度会持续上涨，直到某时刻可能溢出水箱，造成水流的浪费。</p><p>如果我们能 <strong>检测</strong> 正在发生什么，从而让上流停止注入呢？我们可以标记水箱的最高平面，当水面高度超过水箱的标记时，要求上流停止继续注水💡。</p><p><img src="'+d+'" alt="highWaterMark"></p><p>这和流的工作原理很类似。可读流和可写流能内部缓冲数据，缓冲数据量的大小是依据系统可获得内存大小而定的。因此，流有个阈值称之为 <strong><code>highWaterMark</code></strong>, 它可用于检测数据传入流的速率是否远高于数据从流中清除的速率。</p><p>举个例子，当可读流连接可写流时，当可写流的缓存超过 <code>highWaterMark</code> 时， 可写流能够要求可读流停止流动（<code>flowing</code>）。</p><p><img src="'+m+'" alt="highWaterMark"></p><p>然而 <code>highWaterMark</code> 不是一个硬性的限制，而只是一个阈值，但是在构建自定义流时遵守该阈值很重要，以避免数据丢失或不期望的内存使用。</p><h2 id="_9️⃣-图片压缩实例🌰" tabindex="-1">9️⃣ 图片压缩实例🌰 <a class="header-anchor" href="#_9️⃣-图片压缩实例🌰" aria-hidden="true">#</a></h2><p>目前我们讨论了不同类型的流，以及如何使用它们，下面我们拿一个现实中的例子对其进行可视化小结。</p><p>下面是一个简单图片服务的设计。在这个服务中，图片从Amazon S3 bucket取回，然后作为一个可变尺寸的图片提供给终端用户：</p><p><img src="'+h+'" alt="resize image"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果我们不使用流，我们将整个文件从S3 bucket中获取，然后将其保留到内存中，一次性的调整整个图片尺寸，然后将调整好的尺寸发送给用户。</p></div><p>然而，如果我们使用流，可以将上面的过程高效的连接起来，提升应用速度和优化内存的使用😎。</p><p>因为来自S3 bucket的数据流是一种<code>可读流</code>，我们可以以某种方式通过<code>管道</code>将其与一个用于转换图片尺寸的<code>转换</code>的流连接起来。因为转换流也是可读的，我们可以直接将其通过管道传输到响应流，以便调整来自 S3 bucket的数据块的大小并将其发送给用户，而无需等待来自 S3 bucket的整个文件</p><p><img src="'+g+'" alt="pipe stream real example"></p><p>按照这个思路，你可以自己对上面的过程进行实现。图片尺寸转换可以使用 <a href="https://sharp.pixelplumbing.com/" target="_blank" rel="noreferrer">sharp</a> 这个库，它是一个双工流，而不是转换流（原因参考 <a href="https://github.com/lovell/sharp/issues/1704" target="_blank" rel="noreferrer">sharp github issue@1704</a>）。</p><p>原文链接：</p><ul><li><a href="https://blog.insiderattack.net/a-visual-guide-to-nodejs-streams-9d2d594a9bf5" target="_blank" rel="noreferrer">A Visual Guide to NodeJS Streams - Deepal Jayasekara @medium</a></li></ul><p>2022年12月05日14:31:13</p>',65),u=[f];function b(y,D,k,A,C,F){return t(),r("div",null,u)}const x=a(_,[["render",b]]);export{j as __pageData,x as default};
