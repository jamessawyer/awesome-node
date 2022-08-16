import{_ as s,c as a,o as n,b as l}from"./app.249d2899.js";const f=JSON.parse('{"title":"write|read|writev","description":"","frontmatter":{"title":"write|read|writev"},"headers":[{"level":2,"title":"\u5173\u4E8E fs.read() & fs.write()","slug":"\u5173\u4E8E-fs-read-fs-write"},{"level":2,"title":"fs.read()","slug":"fs-read"},{"level":2,"title":"fs.write()","slug":"fs-write"},{"level":2,"title":"fs.writev()","slug":"fs-writev"}],"relativePath":"lib/fs-extra/fs-write-read-writev.md","lastUpdated":1660618168000}'),p={name:"lib/fs-extra/fs-write-read-writev.md"},o=l(`<h2 id="\u5173\u4E8E-fs-read-fs-write" tabindex="-1">\u5173\u4E8E <code>fs.read()</code> &amp; <code>fs.write()</code> <a class="header-anchor" href="#\u5173\u4E8E-fs-read-fs-write" aria-hidden="true">#</a></h2><p>\u539F\u751F <a href="https://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback" target="_blank" rel="noopener noreferrer">fs.read()</a>\uFF0C<a href="https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback" target="_blank" rel="noopener noreferrer">fs.write()</a> &amp; <a href="https://nodejs.org/api/fs.html#fs_fs_writev_fd_buffers_position_callback" target="_blank" rel="noopener noreferrer">fs.writev()</a> \u8FD93\u4E2A\u65B9\u6CD5\u4E0D\u540C\u4E8E\u5176\u5B83\u7684 <code>fs</code> \u6A21\u5757\u4E2D\u7684\u65B9\u6CD5\uFF1A<code>\u5B83\u4EEC\u7684\u56DE\u8C03\u51FD\u6570\u67093\u4E2A\u53C2\u6570\uFF0C\u800C\u4E0D\u662F\u5E38\u89C4\u76842\u4E2A</code>\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u56DE\u8C03\u7248\u672C\uFF0C\u5B83\u4EEC\u8868\u73B0\u5E38\u89C4\u3002<code>\u4F46\u662F\uFF0C\u5B83\u4EEC\u7684promise\u7248\u672C\u4F7F\u7528\u6709\u70B9\u4E0D\u4E00\u6837\u{1F605}</code> \u3002<code>fs-extra</code> \u5BF9\u8FD9\u4E9B\u65B9\u6CD5\u8FDB\u884C\u4E86Promise\u5316\uFF0C\u7C7B\u4F3C <a href="https://nodejs.org/api/util.html#util_util_promisify_original" target="_blank" rel="noopener noreferrer">util.promisify()</a>\u3002</p><p>\u4E0B\u9762\u662F\u5B83\u4EECpromise\u7248\u672C\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A</p><h2 id="fs-read" tabindex="-1">fs.read() <a class="header-anchor" href="#fs-read" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528 Promise</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(fd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> buffer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> offset</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> length</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> position)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(results </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">results</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// { bytesRead: 20, buffer: &lt;Buffer 0f 34 5d ...&gt; }</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528 async/await</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">example</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bytesRead</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">buffer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    	</span><span style="color:#A6ACCD;">fd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    	</span><span style="color:#A6ACCD;">Buffer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">alloc</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    	</span><span style="color:#A6ACCD;">offset</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    	</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    	</span><span style="color:#A6ACCD;">position</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="fs-write" tabindex="-1">fs.write() <a class="header-anchor" href="#fs-write" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528Promise</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(fd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> buffer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> offset</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> length</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> position)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(results </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">results</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// // { bytesWritten: 20, buffer: &lt;Buffer 0f 34 5d ...&gt; }</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528 async/await:</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">example</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bytesWritten</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">buffer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Buffer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">alloc</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">offset</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">position</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="fs-writev" tabindex="-1">fs.writev() <a class="header-anchor" href="#fs-writev" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528 async/await</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">example</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bytesWritten</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">buffers</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writev</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">buffers</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">position</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>2022\u5E7408\u670816\u65E510:45:21</p>`,11),e=[o];function t(r,c,y,F,D,i){return n(),a("div",null,e)}var C=s(p,[["render",t]]);export{f as __pageData,C as default};
