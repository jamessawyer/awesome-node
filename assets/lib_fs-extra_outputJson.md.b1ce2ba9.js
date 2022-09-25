import{_ as s,c as a,o as n,b as l}from"./app.92517a2a.js";const i=JSON.parse('{"title":"outputJson async","description":"","frontmatter":{"title":"outputJson async"},"headers":[{"level":2,"title":"\u63A5\u53E3\u5B9A\u4E49","slug":"\u63A5\u53E3\u5B9A\u4E49","link":"#\u63A5\u53E3\u5B9A\u4E49","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]}],"relativePath":"lib/fs-extra/outputJson.md","lastUpdated":1664078313000}'),p={name:"lib/fs-extra/outputJson.md"},o=l(`<h2 id="\u63A5\u53E3\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3\u5B9A\u4E49" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u4F5C\u7528</p><p>\u5C06\u5BF9\u8C61\u5199\u5165\u5230JSON\u6587\u4EF6\u4E2D\u3002</p><ul><li>\u548C <a href="./writeJson.html">writeJson</a> \u529F\u80FD\u51E0\u4E4E\u4E00\u6837\uFF0C\u9664\u4E86\u5F53\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\uFF0CoutputJson\u4F1A\u521B\u5EFA\u8BE5\u76EE\u5F55</li></ul></div><p>\u{1F4D4}\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">outputJson</span><span style="color:#A6ACCD;">(file</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> object[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options][</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u522B\u540D</span></span>
<span class="line"><span style="color:#82AAFF;">outputJSON</span><span style="color:#A6ACCD;">(file</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> object[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options][</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback])</span></span>
<span class="line"></span></code></pre></div><p>\u53C2\u6570\uFF1A</p><ul><li><p><code>file &lt;String&gt;</code></p></li><li><p><code>object &lt;Object&gt;</code></p></li><li><p><code>options &lt;Object&gt;</code></p><ul><li><code>spaces &lt;Number&gt; | &lt;String&gt;</code> \u7528\u4E8E\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u91CF\uFF1B\u6216\u7528\u4E8E\u7F29\u8FDB\u7684\u5B57\u7B26\u4E32\uFF08\u6BD4\u5982\uFF0C\u4F20\u5165 <code>\\t</code> \u8868\u793Atab\u7F29\u8FDB\uFF09\u3002<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument" target="_blank" rel="noreferrer">the space argument</a></li><li><code>EOL &lt;String&gt;</code> \u8BBE\u7F6EEOL\uFF08\u884C\u7EC8\u6B62\u7B26\uFF09\u5B57\u7B26\u3002\u9ED8\u8BA4\u662F <code>\\n</code></li><li><code>replacer</code> - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter" target="_blank" rel="noreferrer">JSON replacer</a></li><li>\u4E5F\u63A5\u53D7 <a href="https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback" target="_blank" rel="noreferrer">fs.writeFile()</a> \u914D\u7F6E\u9879</li></ul></li><li><p><code>callback &lt;Function&gt;</code></p><ul><li><code>err &lt;Error&gt;</code></li></ul></li></ul><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs-extra</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/tmp/this/path/does/not/exist/file.json</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"></span>
<span class="line"><span style="color:#676E95;">// 1\uFE0F\u20E3 \u4F7F\u7528\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">outputJson</span><span style="color:#A6ACCD;">(file</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JP</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// null \u{1F60E}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readJson</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// &#39;JP&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 2\uFE0F\u20E3 \u4F7F\u7528Promise</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">outputJson</span><span style="color:#A6ACCD;">(file</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JP</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readJson</span><span style="color:#A6ACCD;">(file))</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)) </span><span style="color:#676E95;">// &#39;JP&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#A6ACCD;">(err))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 3\uFE0F\u20E3 \u4F7F\u7528async/await</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">aysnc </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">example</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">outputJson</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JP</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readJson</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// &#39;JP&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">example</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u53E6\u5916\u53EF\u67E5\u770B <a href="./writeJson.html">writeJson</a></p><ul><li><a href="https://github.com/jprichardson/node-fs-extra/blob/0220eac966/docs/outputJson.md" target="_blank" rel="noreferrer">outputJson</a></li></ul><p>2022\u5E7408\u670816\u65E509:43:37</p>`,11),e=[o];function t(c,r,y,F,D,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
