import{_ as s,c as n,o as a,b as l}from"./app.1e54b5c6.js";const i=JSON.parse('{"title":"ensureLink async","description":"","frontmatter":{"title":"ensureLink async"},"headers":[{"level":2,"title":"\u63A5\u53E3\u5B9A\u4E49","slug":"\u63A5\u53E3\u5B9A\u4E49","link":"#\u63A5\u53E3\u5B9A\u4E49","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]}],"relativePath":"lib/fs-extra/ensureLink.md","lastUpdated":1666853863000}'),p={name:"lib/fs-extra/ensureLink.md"},o=l(`<h2 id="\u63A5\u53E3\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3\u5B9A\u4E49" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u4F5C\u7528</p><p>\u786E\u4FDD\u94FE\u63A5\u7684\u5B58\u5728\u3002</p><ul><li>\u5982\u679C\u8BF7\u6C42\u521B\u5EFA\u7684\u6587\u4EF6\u5728\u4E0D\u5B58\u5728\u7684\u76EE\u5F55\u4E2D\uFF0C\u5219\u521B\u5EFA\u8FD9\u4E9B\u76EE\u5F55\u3002</li></ul></div><p>\u{1F4D4}\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">ensureLink</span><span style="color:#A6ACCD;">(srcPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> destPath[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u522B\u540D </span></span>
<span class="line"><span style="color:#82AAFF;">createLink</span><span style="color:#A6ACCD;">(srcPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> destPath[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback])</span></span>
<span class="line"></span></code></pre></div><p>\u53C2\u6570\uFF1A</p><ul><li><code>srcPath &lt;String&gt;</code>\uFF1A \u6E90\u8DEF\u5F84</li><li><code>destPath &lt;String&gt;</code>\uFF1A\u8981\u94FE\u63A5\u7684\u76EE\u6807\u8DEF\u5F84</li><li><code>callback &lt;Function&gt;</code> \u56DE\u8C03\u51FD\u6570 <ul><li><code>err &lt;Error&gt;</code></li></ul></li></ul><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs-extra</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> srcPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/tmp/file.txt</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> destPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/tmp/this/path/does/not/exist/file.txt</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// 1\uFE0F\u20E3 \u4F7F\u7528\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ensureLink</span><span style="color:#A6ACCD;">(srcPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> destPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// null</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u94FE\u63A5\u88AB\u521B\u5EFA\uFF0C\u5305\u62EC\u5B83\u5B58\u653E\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// 2\uFE0F\u20E3 \u4F7F\u7528Promises</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ensureLink</span><span style="color:#A6ACCD;">(srcPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> destPath)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// 3\uFE0F\u20E3 \u4F7F\u7528 aysnc/await</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">example</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">dest</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ensureLink</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dest</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">example</span><span style="color:#A6ACCD;">(srcPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> destPath)</span></span>
<span class="line"></span></code></pre></div><p>2022\u5E7408\u670815\u65E519:15:37</p>`,9),e=[o];function t(c,r,y,D,F,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};