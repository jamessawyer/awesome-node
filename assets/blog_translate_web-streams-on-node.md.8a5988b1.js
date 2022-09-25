import{_ as e,c as s,o as a,b as l}from"./app.92517a2a.js";const m=JSON.parse('{"title":"Web Streans","description":"","frontmatter":{"title":"Web Streans"},"headers":[{"level":2,"title":"1\uFE0F\u20E3 \u2B50 \u4EC0\u4E48\u662Fweb streams?","slug":"_1\uFE0F\u20E3-\u2B50-\u4EC0\u4E48\u662Fweb-streams","link":"#_1\uFE0F\u20E3-\u2B50-\u4EC0\u4E48\u662Fweb-streams","children":[{"level":3,"title":"1.1 streams\u7684\u79CD\u7C7B","slug":"_1-1-streams\u7684\u79CD\u7C7B","link":"#_1-1-streams\u7684\u79CD\u7C7B","children":[]},{"level":3,"title":"1.2 \u7BA1\u9053\u94FE\uFF08Pipe chains\uFF09","slug":"_1-2-\u7BA1\u9053\u94FE\uFF08pipe-chains\uFF09","link":"#_1-2-\u7BA1\u9053\u94FE\uFF08pipe-chains\uFF09","children":[]},{"level":3,"title":"1.3 \u80CC\u538B\uFF08Backpressure\uFF09","slug":"_1-3-\u80CC\u538B\uFF08backpressure\uFF09","link":"#_1-3-\u80CC\u538B\uFF08backpressure\uFF09","children":[]},{"level":3,"title":"1.4 Node\u5BF9Web streams\u7684\u652F\u6301","slug":"_1-4-node\u5BF9web-streams\u7684\u652F\u6301","link":"#_1-4-node\u5BF9web-streams\u7684\u652F\u6301","children":[]}]},{"level":2,"title":"2\uFE0F\u20E3 \u4ECE ReadableStreams \u8BFB\u53D6","slug":"_2\uFE0F\u20E3-\u4ECE-readablestreams-\u8BFB\u53D6","link":"#_2\uFE0F\u20E3-\u4ECE-readablestreams-\u8BFB\u53D6","children":[]}],"relativePath":"blog/translate/web-streams-on-node.md","lastUpdated":1664078313000}'),n={name:"blog/translate/web-streams-on-node.md"},o=l(`<nav class="table-of-contents"><ul><li><a href="#_1\uFE0F\u20E3-\u2B50-\u4EC0\u4E48\u662Fweb-streams">1\uFE0F\u20E3 \u2B50 \u4EC0\u4E48\u662Fweb streams?</a><ul><li><a href="#_1-1-streams\u7684\u79CD\u7C7B">1.1 streams\u7684\u79CD\u7C7B</a></li><li><a href="#_1-2-\u7BA1\u9053\u94FE\uFF08pipe-chains\uFF09">1.2 \u7BA1\u9053\u94FE\uFF08Pipe chains\uFF09</a></li><li><a href="#_1-3-\u80CC\u538B\uFF08backpressure\uFF09">1.3 \u80CC\u538B\uFF08Backpressure\uFF09</a></li><li><a href="#_1-4-node\u5BF9web-streams\u7684\u652F\u6301">1.4 Node\u5BF9Web streams\u7684\u652F\u6301</a></li></ul></li><li><a href="#_2\uFE0F\u20E3-\u4ECE-readablestreams-\u8BFB\u53D6">2\uFE0F\u20E3 \u4ECE ReadableStreams \u8BFB\u53D6</a></li></ul></nav><p><a href="https://streams.spec.whatwg.org/" target="_blank" rel="noreferrer">web streams</a> \u662F\u4E00\u79CD\u6807\u51C6\u6D41\uFF0C\u76EE\u524D\u652F\u6301\u6240\u6709\u4E3B\u6D41web\u5E73\u53F0\uFF1Aweb\u6D4F\u89C8\u5668\uFF0CNode.js\uFF0CDeno\u{1F60E}\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u{1F680} \u6D41\u662F\u5BF9\u6570\u636E\u8BFB\u548C\u5199\u7684\u4E00\u79CD\u62BD\u8C61\uFF0C\u5B83\u4EE5\u5C0F\u5757\u5C0F\u5757\u987A\u5E8F\u6570\u636E\u7684\u65B9\u5F0F\u5BF9\u5404\u79CD\u6765\u6E90\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u6765\u6E90\u53EF\u80FD\u662F - \u6587\u4EF6\uFF0C\u670D\u52A1\u5668\u4E0A\u7684\u6570\u636E\u7B49\u7B49</p></div><p>\u4F8B\u5982\uFF0C<a href="https://developer.mozilla.org/en-US/docs/Web/API/fetch" target="_blank" rel="noreferrer">\u5168\u5C40\u51FD\u6570fetch()</a>(\u7528\u4E8E\u4E0B\u8F7D\u7EBF\u4E0A\u8D44\u6E90) \u5F02\u6B65\u8FD4\u56DE\u4E00\u4E2AResponse\uFF0C\u5B83\u6709\u4E00\u4E2A\u662Fweb stream\u7684 <code>.body</code> \u5C5E\u6027\u3002</p><p>\u672C\u6587\u8BB2\u89E3Web streams \u5728Node.js\u5E73\u53F0\u4E0A\uFF0C\u4F46\u662F\u6211\u4EEC\u6240\u5B66\u7684\uFF0C\u5927\u591A\u6570\u9002\u7528\u4E8E\u6240\u6709web streams\u652F\u6301\u7684\u5E73\u53F0\u3002</p><h2 id="_1\uFE0F\u20E3-\u2B50-\u4EC0\u4E48\u662Fweb-streams" tabindex="-1">1\uFE0F\u20E3 \u2B50 \u4EC0\u4E48\u662Fweb streams? <a class="header-anchor" href="#_1\uFE0F\u20E3-\u2B50-\u4EC0\u4E48\u662Fweb-streams" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u770B\u770Bweb streams\u7684\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\uFF0C\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u770B\u770B\u793A\u4F8B\u3002</p><p>\u{1F469}\u{1F3FB}\u200D\u{1F3EB} \u6D41\u662F\u4E00\u79CD\u7528\u4E8E\u8BBF\u95EE\u4EE5\u4E0B\u6570\u636E\u7684\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF1A</p><ul><li>Files\uFF08\u6587\u4EF6\uFF09</li><li>\u670D\u52A1\u5668\u4E0A\u7684\u6570\u636E</li><li>\u6265\u7B49</li></ul><p>2\u5927\u597D\u5904\u{1F929}\uFF1A</p><ol><li>\u6211\u4EEC\u53EF\u4EE5\u5904\u7406\u5927\u91CF\u7684\u6570\u636E\uFF0C\u56E0\u4E3A\u6D41\u4E91\u540E\u7EED\u6211\u4EEC\u5C06\u5176\u62C6\u5206\u4E3A\u5C0F\u5757\uFF08\u79F0\u4E4B\u4E3A <code>chunks</code>\uFF09\uFF0C\u8FD9\u6837\u4FBF\u53EF\u4EE5\u4E00\u6B21\u6027\u5904\u7406\u4E00\u5C0F\u5757</li><li>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684\u6570\u636E\u7ED3\u6784 - streams\uFF0C\u540C\u65F6\u5904\u7406\u4E0D\u540C\u7684\u6570\u636E\uFF0C\u8FD9\u4F7F\u5F97\u590D\u7528\u4EE3\u7801\u53D8\u5F97\u7B80\u5355</li></ol><p>\u{1F469}\u{1F3FB}\u200D\u{1F3EB} <a href="https://streams.spec.whatwg.org/#intro" target="_blank" rel="noreferrer">Web streams</a> \uFF08<code>web</code> \u901A\u5E38\u4F1A\u88AB\u5FFD\u7565\uFF09\u662F\u4E00\u79CD\u9762\u5411web\u6D4F\u89C8\u5668\u76F8\u5BF9\u65B0\u7684\u6807\u51C6\uFF0C\u4F46\u662F\u5B83\u540C\u65F6\u4E5F\u88ABNode.js\u548CDeno\u6240\u652F\u6301\u3002\uFF08<a href="https://developer.mozilla.org/en-US/docs/Web/API/Streams_API#browser_compatibility" target="_blank" rel="noreferrer">MDN\u517C\u5BB9\u6027\u8868</a>\uFF09</p><p>\u{1F680} \u5728web streams\u4E2D\uFF0C<code>chunks</code> \u901A\u5E38\u662F\u4E0B\u9762\u4E2D\u7684\u67D0\u4E00\u79CD\uFF1A</p><ul><li>\u6587\u672C\u6D41\uFF1A\u5B57\u7B26\u4E32</li><li>\u5B57\u8282\u6D41\uFF1AUint8Array\uFF08\u4E00\u79CD <a href="https://exploringjs.com/impatient-js/ch_typed-arrays.html" target="_blank" rel="noreferrer">TypedArray</a>\uFF09</li></ul><h3 id="_1-1-streams\u7684\u79CD\u7C7B" tabindex="-1">1.1 streams\u7684\u79CD\u7C7B <a class="header-anchor" href="#_1-1-streams\u7684\u79CD\u7C7B" aria-hidden="true">#</a></h3><p>\u{1F469}\u{1F3FB}\u200D\u{1F3EB} \u67093\u79CD\u4E3B\u8981\u7C7B\u578B\u7684web streams:</p><ol><li><code>ReadableStream</code>(\u53EF\u8BFB\u6D41) \u7528\u4E8E\u4ECE <code>source</code> \u5904\u8BFB\u53D6\u6570\u636E\u3002\u5B8C\u6210\u8FD9\u4E00\u4EFB\u52A1\u7684\u4EE3\u7801\u901A\u5E38\u79F0\u4E4B\u4E3A <code>Consumer</code>\uFF08\u6D88\u8D39\u8005\uFF09</li><li><code>WritableStream</code>\uFF08\u53EF\u5199\u6D41\uFF09 \u7528\u4E8E\u5C06\u6570\u636E\u5199\u5165\u5230 <code>sink</code>\u3002\u5B8C\u6210\u8FD9\u4E00\u4EFB\u52A1\u7684\u4EE3\u7801\u901A\u5E38\u79F0\u4E4B\u4E3A <code>Producer</code>\uFF08\u751F\u4EA7\u8005\uFF09</li><li><code>TransformStream</code>\uFF08\u8F6C\u6362\u6D41\uFF09 \u75312\u79CD\u6D41\u7EC4\u6210\uFF1A <ol><li>\u4ECE\u5B83 <code>writable side</code>\uFF08\u53EF\u5199\u7AEF\uFF09 \u63A5\u6536\u8F93\u5165\uFF0C\u5B83\u662F\u4E00\u4E2A <code>WritableStream</code></li><li>\u5B83\u53D1\u9001\u6570\u636E\u5230 <code>readable side</code> \uFF08\u53EF\u8BFB\u7AEF\uFF09\uFF0C\u5B83\u662F\u4E00\u4E2A <code>ReadableStream</code></li></ol></li></ol><p>\u5176\u601D\u60F3\u662F\u901A\u8FC7TransformStream <code>\u7BA1\u9053\uFF08pipeline\uFF09</code> \u6765\u8F6C\u6362\u6570\u636E\u3002\u5373\uFF0C\u6211\u4EEC\u5199\u5165\u6570\u636E\u5230\u53EF\u5199\u7AEF\uFF0C\u7136\u540E\u4ECE\u53EF\u8BFB\u7AEF\u8BFB\u53D6\u8F6C\u6362\u597D\u7684\u6570\u636E\u3002\u4EE5\u4E0B\u7684TransformStreams\u88AB\u6784\u5EFA\u5230\u5927\u591A\u6570JavaScript\u5E73\u53F0\u4E2D\uFF1A</p><ul><li>\u56E0\u4E3AJS\u5B57\u7B26\u4E32\u662F <code>UTF-16</code> \u7F16\u7801\u7684\uFF0C\u800C <code>UTF-8</code> \u7F16\u7801\u7684\u6570\u636E\u5728JS\u5728\u88AB\u5F53\u505A\u5B57\u8282\u3002<code>TextDecoderStream</code> \u53EF\u5C06\u8FD9\u6837\u7684\u6570\u636E\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li><li><code>TextEncoderStream</code> \u5C06JS\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A <code>UTF-8</code> \u6570\u636E</li><li><code>CompressionStream</code> \u538B\u7F29\u5B57\u8282\u6570\u636E\u4E3A <code>GZIP</code> \u548C\u5176\u5B83\u538B\u7F29\u683C\u5F0F</li><li><code>DecompressionStream</code> \u4ECEGZIP\u548C\u5176\u5B83\u538B\u7F29\u683C\u5F0F\u89E3\u538B\u4E3A\u5B57\u8282\u6570\u636E\u3002</li></ul><p>ReadableStreams &amp; WritableStreams &amp; TransformStreams \u53EF\u7528\u4E8E <code>\u4F20\u8F93</code> \u6587\u672C\u6216\u5B57\u8282\u6570\u636E\u3002\u672C\u6587\u4E3B\u8981\u5BF9\u6587\u672C\u8FDB\u884C\u5904\u7406\u3002 \u7528\u4E8E\u5B57\u8282\u6570\u636E\u7684 <code>Byte streams</code> \u4F1A\u5728\u6700\u540E\u7B80\u77ED\u7684\u63D0\u4E00\u4E0B\u3002</p><h3 id="_1-2-\u7BA1\u9053\u94FE\uFF08pipe-chains\uFF09" tabindex="-1">1.2 \u7BA1\u9053\u94FE\uFF08Pipe chains\uFF09 <a class="header-anchor" href="#_1-2-\u7BA1\u9053\u94FE\uFF08pipe-chains\uFF09" aria-hidden="true">#</a></h3><p><code>Piping</code> \u662F\u4E00\u79CD\u64CD\u4F5C\uFF0C\u5141\u8BB8\u6211\u4EEC\u5C06\u4E00\u4E2AReadableStream <code>\u8FDE\u63A5</code> \u5230\u4E00\u4E2AWritableStream\uFF1A\u53EA\u8981ReadableStream\u4EA7\u751F\u6570\u636E\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u4FBF\u4F1A\u8BFB\u53D6\u8BE5\u6570\u636E\uFF0C\u7136\u540E\u5199\u5165\u5230WritableStream\u4E2D\u{1F60E}\u3002</p><p>\u{1F680}\u5982\u679C\u6211\u4EEC\u8FDE\u63A52\u4E2A\u6D41\uFF0C\u6211\u4EEC\u4FBF\u5F97\u5230\u4E00\u79CD\u4FBF\u5229\u7684\u65B9\u5F0F\uFF0C\u5C06\u6570\u636E\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u8F6C\u79FB\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\uFF08\u6BD4\u5982\uFF1A\u62F7\u8D1D\u6587\u4EF6\uFF09\u3002\u7136\u800C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FDE\u63A52\u4E2A\u4EE5\u4E0A\u7684\u6D41\uFF0C\u7136\u540E\u6211\u4EEC\u4FBF\u5F97\u5230\u4E00\u4E2A <code>\u7BA1\u9053\u94FE\uFF08pipe chains\uFF09</code>\uFF0C\u7528\u8FD9\u4E2A\u7BA1\u9053\u94FE\u6211\u4EEC\u53EF\u4EE5\u4EE5\u5404\u79CD\u65B9\u5F0F\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002\u7BA1\u9053\u94FE\u7684\u4F8B\u5B50\uFF1A</p><ol><li>\u4EE5\u4E00\u4E2A Readablestream \u5F00\u59CB</li><li>\u63A5\u7740\u8DDF\u4E0A\u4E00\u4E2A\u6216\u591A\u4E2ATransformStreams</li><li>\u94FE\u7684\u7EC8\u7AEF\u4EE5\u4E00\u4E2A WritableStream \u7ED3\u675F</li></ol><p>ReadableStream\u901A\u8FC7\u7BA1\u9053\u5C06\u524D\u8005\u8FDE\u63A5\u5230\u540E\u8005\u7684\u53EF\u5199\u7AEF\uFF0C\u4ECE\u800C\u8FDE\u63A5\u5230TransformStream\u3002\u7C7B\u4F3C\u5730\uFF0CTransformStream\u901A\u8FC7\u7BA1\u9053\u5C06\u524D\u8005\u7684\u53EF\u8BFB\u7AEF\u8FDE\u63A5\u5230\u540E\u8005\u7684\u53EF\u5199\u7AEF\uFF0C\u4ECE\u800C\u8FDE\u63A5\u5230\u53E6\u4E00\u4E2ATransformStream\u3002TransformStream\u901A\u8FC7\u5C06\u524D\u8005\u7684\u53EF\u8BFB\u7AEF\u8F93\u9001\u5230\u540E\u8005\u6765\u8FDE\u63A5\u5230WritableStream\u3002</p><h3 id="_1-3-\u80CC\u538B\uFF08backpressure\uFF09" tabindex="-1">1.3 \u80CC\u538B\uFF08Backpressure\uFF09 <a class="header-anchor" href="#_1-3-\u80CC\u538B\uFF08backpressure\uFF09" aria-hidden="true">#</a></h3><p><strong>\u{1F605}\u5728\u7BA1\u9053\u94FE\u4E2D\u5B58\u5728\u7684\u4E00\u4E2A\u95EE\u9898\u662F\uFF0C\u67D0\u4E2A\u6210\u5458\u63A5\u6536\u5230\u7684\u6570\u636E\u8D85\u8FC7\u4E86\u5B83\u5F53\u65F6\u80FD\u5904\u7406\u7684\u6570\u636E\u91CF\u3002</strong> <code>Backpressure</code> \u662F\u7528\u6765\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\u7684\u4E00\u79CD\u6280\u672F\uFF1A\u5B83\u4F7F\u5B83\u7684\u6570\u636E\u63A5\u53D7\u8005\uFF08<code>receiver</code>\uFF09\u544A\u8BC9\u53D1\u9001\u8005\uFF08<code>sender</code>\uFF09\uFF0C\u5B83\u5E94\u8BE5\u4E34\u65F6\u505C\u6B62\u53D1\u9001\u6570\u636E\uFF0C\u8FD9\u6837\u4EE5\u514D\u63A5\u53D7\u8005\u8FC7\u8F7D\u3002</p><p>\u53E6\u4E00\u79CD\u7406\u89E3\u80CC\u538B\u7684\u65B9\u5F0F\u662F\uFF0C\u5B83\u662F\u4E00\u4E2A\u901A\u8FC7\u7BA1\u9053\u94FE\u5411\u540E\u4F20\u64AD\u7684\u4FE1\u53F7\uFF0C\u4ECE\u88AB\u8FC7\u8F7D\u7684\u6210\u5458\u5230\u94FE\u7684\u8D77\u70B9\u3002\u4F5C\u4E3A\u4F8B\u5B50\uFF0C\u8003\u8651\u4E0B\u9762\u7BA1\u9053\u94FE\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ReadableStream -pipeTo-</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> TransformStream -pipeTo-</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> WritableStream</span></span>
<span class="line"></span></code></pre></div><p>\u{1F680}\u{1F680}\u4E0B\u9762\u662F\u80CC\u538B\u5982\u4F55\u901A\u8FC7\u8FD9\u4E2A\u94FE\u7684\uFF1A</p><ol><li>\u4E00\u5F00\u59CB\uFF0CWritableStream\u53D1\u51FA\u6D88\u8017\uFF0C\u5B83\u6B64\u65F6\u5DF2\u7ECF\u4E0D\u80FD\u5904\u7406\u66F4\u591A\u7684\u6570\u636E\u4E86\uFF08\u5373\u9971\u548C\u4E86\uFF09</li><li>\u7BA1\u9053\u505C\u6B62\u4ECETransformStream\u8BFB\u53D6\u6570\u636E</li><li>\u8F93\u5165\u79EF\u538B\u5728TransformStream\u5185\u90E8\uFF08\u4F7F\u7528buffer\uFF09</li><li>TransformStream\u53D1\u51FA\u4FE1\u53F7\uFF0C\u5B83\u7684buffer\u4E5F\u5DF2\u7ECF\u6EE1\u4E86</li><li>\u7BA1\u9053\u5F00\u59CB\u505C\u6B62\u4ECEReadableStream\u8BFB\u53D6\u6570\u636E</li></ol><p>\u6211\u4EEC\u56DE\u5230\u4E86\u7BA1\u9053\u94FE\u7684\u5F00\u7AEF\u3002\u56E0\u6B64\uFF0C\u4E0D\u518D\u6709\u6570\u636E\u79EF\u7D2F\u5728ReadableStream\u4E2D\uFF08\u4E5F\u662Fbuffer\uFF09\uFF0CWritableStream \u4FBF\u6709\u65F6\u95F4\u8FDB\u884C\u4FEE\u590D\u4E86\u3002\u4E00\u65E6\u5904\u7406\u5B8C\u6210\uFF0CWritableStream\u4FBF\u53D1\u51FA\u4FE1\u53F7\uFF0C\u5B83\u5DF2\u7ECF\u51C6\u5907\u597D\u518D\u6B21\u63A5\u6536\u6570\u636E\u4E86\u3002\u8FD9\u4E2A\u4FE1\u53F7\u5F80\u56DE\u8D70\uFF0C\u76F4\u5230\u5230\u8FBEReadableSteam\uFF0C\u6570\u636E\u5904\u7406\u5F00\u59CB\u6062\u590D\u3002</p><p>\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u7684\u8BF4\u4E86\u80CC\u538B\u7684\u8FC7\u7A0B\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\uFF0C\u6709\u4E9B\u7EC6\u8282\u88AB\u5FFD\u7565\u4E86\u3002\u540E\u9762\u4F1A\u8BE6\u7EC6\u7684\u8BB2\u89E3\u3002</p><h3 id="_1-4-node\u5BF9web-streams\u7684\u652F\u6301" tabindex="-1">1.4 Node\u5BF9Web streams\u7684\u652F\u6301 <a class="header-anchor" href="#_1-4-node\u5BF9web-streams\u7684\u652F\u6301" aria-hidden="true">#</a></h3><p>\u5728Node.js\u4E2D\uFF0Cweb streams\u67092\u79CD\u6E90\uFF1A</p><ol><li>\u6765\u81EA <a href="https://nodejs.org/api/webstreams.html" target="_blank" rel="noreferrer">node:stream/web</a> \u6A21\u5757</li><li>\u901A\u8FC7\u5168\u5C40\u53D8\u91CF\uFF08\u7C7B\u4F3Cweb\u6D4F\u89C8\u5668\uFF09</li></ol><p>\u6B64\u65F6\uFF0C\u5728Node.js\u4E2D\u53EA\u6709\u4E00\u4E2AAPI\u76F4\u63A5\u652F\u6301web streams - <a href="https://nodejs.org/api/globals.html#fetch" target="_blank" rel="noreferrer">fetch API</a> :</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> readableStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span></span>
<span class="line"></span></code></pre></div><p>\u5176\u4F59\u7684\u63A5\u53E3\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u6A21\u5757 <code>node:stream</code> \u4E2D\u7684\u67D0\u4E2A\u9759\u6001\u65B9\u6CD5\u5C06Node\u6D41\u8F6C\u6362\u4E3Aweb\u6D41\uFF0C\u6216web\u6D41\u8F6C\u6362\u4E3ANode\u6D41\uFF1A</p><ul><li>Node\u7684 Readables \u53EF\u8F6C\u6362\u4E3A WritableStream \u6216\u4ECE WritableStream \u8F6C\u6362\u4E3AReadable <ul><li><code>Readable.toWeb(nodeReadable)</code></li><li><code>Readable.fromWeb(webReadableStream, options?)</code></li></ul></li><li>Node\u7684 Writables \u53EF\u8F6C\u6362\u4E3A ReadableStreams \u6216 \u4ECE ReadableStreams \u8F6C\u6362\u4E3A Writables: <ul><li><code>Writable.toWeb(nodeWritable)</code></li><li><code>Writable.fromWeb(webWritableStream, options?)</code></li></ul></li><li>Node\u7684 Duplexes \u53EF\u4EE5\u8F6C\u6362\u4E3A TransformStreams \u6216 \u4ECE TransformStreams \u8F6C\u6362\u4E3A Duplexes <ul><li><code>Duplex.toWeb(nodeDuplex)</code></li><li><code>Duplex.fromWeb(webTransformStream, options?)</code></li></ul></li></ul><p>\u5176\u5B83API\u90E8\u5206\u652F\u6301web streams\uFF1A<code>FileHandles</code> \u6709\u4E2A <a href="https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#filehandlereadablewebstream" target="_blank" rel="noreferrer">readableWebStream()</a> \u65B9\u6CD5\u3002</p><h2 id="_2\uFE0F\u20E3-\u4ECE-readablestreams-\u8BFB\u53D6" tabindex="-1">2\uFE0F\u20E3 \u4ECE ReadableStreams \u8BFB\u53D6 <a class="header-anchor" href="#_2\uFE0F\u20E3-\u4ECE-readablestreams-\u8BFB\u53D6" aria-hidden="true">#</a></h2><p>\u53EF\u8BFB\u6D41\uFF08<code>ReadableStreams</code>\uFF09\u5141\u8BB8\u6211\u4EEC\u4ECE\u5404\u79CD\u6E90\u8BFB\u53D6\u6570\u636E\u5757\u3002\u5176\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadableStream</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getReader</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadableStreamDefaultReader</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">locked</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  [Symbol</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">asyncIterator]</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AsyncIterator</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cancel</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">reason</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pipeTo</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#A6ACCD;">destination</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WritableStream</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StreamPipeOptions</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pipeThrough</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk2</span><span style="color:#89DDFF;">&gt;(</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#A6ACCD;">transfrom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadableWritablePair</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TChunk</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StreamPipeOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadableStream</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk2</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u672C\u6587\u4E0D\u4F1A\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tee</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">ReadableStream</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReadableStream</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TChunk</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StreamPipeOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">signal</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AbsortSignal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preventClose</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preventAbort</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preventCancel</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u89E3\u91CA\u4E00\u4E0B\u8FD9\u4E9B\u5C5E\u6027\uFF1A</p><ul><li><code>getReader()</code>: \u8FD4\u56DE\u4E00\u4E2A Reader - \u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B83\u4ECE ReadableStream \u4E2D\u8BFB\u53D6\u6570\u636E\u3002ReadableStreams\u8FD4\u56DEReader\uFF0C\u7C7B\u4F3C\u4E8E <a href="https://exploringjs.com/impatient-js/ch_sync-iteration.html" target="_blank" rel="noreferrer">iterables</a> \u8FD4\u56DEiterators\u3002</li><li><code>locked</code>: \u540C\u4E00\u65F6\u95F4\u6BCF\u4E2AReadableStream\u53EA\u80FD\u6709\u4E00\u4E2AReader\u6FC0\u6D3B\u3002\u5F53\u4E00\u4E2AReader\u6B63\u5728\u4F7F\u7528\u65F6\uFF0CReadableStream\u88AB\u9501\u5B9A\uFF0C\u6B64\u65F6 <code>getReader()</code> \u4E0D\u80FD\u88AB\u8C03\u7528</li><li><a href="https://exploringjs.com/impatient-js/ch_async-iteration.html" target="_blank" rel="noreferrer">Symbol.asyncIterator</a>: \u8FD9\u4E2A\u65B9\u6CD5\u4F7FReadableStreams <a href="https://exploringjs.com/impatient-js/ch_async-iteration.html" target="_blank" rel="noreferrer">\u5F02\u6B65\u53EF\u8FED\u4EE3</a>\u3002\u73B0\u5728\u53EA\u6709\u67D0\u51E0\u4E2A\u5E73\u53F0\u5B9E\u73B0\u8FD9\u4E2A\u51FD\u6570</li><li><code>cancel(reason)</code>: \u53D6\u6D88\u6D41\uFF0C\u56E0\u4E3A\u6D88\u8D39\u8005\u5BF9\u5B83\u4E0D\u518D\u611F\u5174\u8DA3\u4E86\u3002<code>reason</code> \u53C2\u6570\u662F\u53EF\u8BFB\u6D41\u5E95\u5C42\u6E90\u3002\u5F53\u8FD9\u4E2A\u64CD\u4F5C\u5B8C\u6210\u65F6\uFF0C\u8FD4\u56DE\u7684Promise\u4E5F\u4F1Aresolve</li><li><code>pipeTo()</code>: \u5C06\u53EF\u8BFB\u6D41\u6570\u636E\u586B\u5145\u7ED9\u53EF\u5199\u6D41\u3002\u5F53\u8FD9\u4E2A\u64CD\u4F5C\u5B8C\u6210\u65F6\uFF0C\u8FD4\u56DE\u7684Promise\u4E5F\u4F1Aresolve\u3002<code>pipeTo()</code> \u786E\u4FDD\u80CC\u538B\uFF0C\u5173\u95ED\uFF0C\u9519\u8BEF\u7B49\u7B49\u80FD\u6B63\u786E\u7684\u5728\u7BA1\u9053\u94FE\u4E2D\u4F20\u64AD\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5176\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u914D\u7F6E\u9879\uFF1A <ul><li><code>signal</code>: \u5141\u8BB8\u6211\u4EEC\u7ED9\u8FD9\u4E2A\u65B9\u6CD5\u4F20\u9012\u4E00\u4E2A <code>AbsortSignal</code>\uFF0C\u5141\u8BB8\u6211\u4EEC\u901A\u8FC7\u8BE5AbsortSignal\u7EC8\u6B62\u7BA1\u9053</li><li><code>preventClose</code>\uFF1A\u5982\u679C\u4E3A <code>true</code>\uFF0C\u5F53\u53EF\u8BFB\u6D41\u5173\u95ED\u65F6\uFF0C\u4F1A\u963B\u6B62\u53EF\u5199\u6D41\u7684\u5173\u95ED\u3002\u5F53\u6211\u4EEC\u60F3\u5C06\u591A\u4E2A\u53EF\u8BFB\u6D41\u8FDE\u63A5\u5230\u76F8\u540C\u7684\u53EF\u5199\u6D41\u65F6\u7279\u522B\u6709\u7528</li><li>\u5176\u4F59\u914D\u7F6E\u53EF\u53C2\u8003 <a href="https://streams.spec.whatwg.org/#rs-prototype" target="_blank" rel="noreferrer">web streams\u5B9A\u4E49</a></li></ul></li><li><code>pipeThrough()</code>: \u5C06\u5B83\u7684ReadableStream\u8FDE\u63A5\u5230 ReadableWritablePair(\u67D0\u79CD TransformStream).\u5B83\u8FD4\u56DE\u7ED3\u679CReadableStream\uFF08\u6BD4\u5982\uFF1AReadableWritablePair\u7684\u53EF\u8BFB\u7AEF\uFF09\u3002</li></ul><p>\u4E0B\u9762\u5C0F\u7ED3\u5305\u542B2\u79CD\u6D88\u8D39ReadableStreams\u7684\u65B9\u5F0F\uFF1A</p><ol><li>\u901A\u8FC7 <code>Readers</code> \u8BFB\u53D6</li><li>\u901A\u8FC7\u5F02\u6B65\u8FED\u4EE3\u65B9\u5F0F\u8BFB\u53D6</li></ol>`,48),r=[o];function p(t,c,i,d,F,D){return a(),s("div",null,r)}const b=e(n,[["render",p]]);export{m as __pageData,b as default};
