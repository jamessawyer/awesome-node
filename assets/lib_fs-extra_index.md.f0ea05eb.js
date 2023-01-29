import{_ as t,c as e,o as d,b as r}from"./app.1b6a4c98.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"lib/fs-extra/index.md","lastUpdated":1674975353000}'),o={name:"lib/fs-extra/index.md"},c=r('<p>本文档是关于 <a href="https://github.com/jprichardson/node-fs-extra" target="_blank" rel="noreferrer">fs-extra@v10.1.0</a> 版本。</p><p>比如：下面别名</p><ul><li><code>emptyDir</code> -&gt; <code>emptydir</code> 忽略大小写的别名</li><li><code>ensureFile</code> -&gt; <code>createFile</code> 语义上的别名</li><li><code>ensureDir</code> -&gt; <code>mkdirs | mkdirp</code> 将之前常用的名字替换为fs-extra规范的名字</li><li><code>ensureLink</code> -&gt; <code>createLink</code></li><li><code>ensureSymlink</code> -&gt; <code>createSymlink</code></li><li><code>readJson</code> -&gt; <code>readJSON</code></li><li><code>writeJson</code> -&gt; <code>writeJSON</code></li></ul><p>相似功能：</p><ul><li><code>outputFile</code> &amp; <code>writeFile</code>: <code>output</code> 版本更加的安全，会在文件不存在的情况下，创建该文件</li><li><code>outputJson</code> &amp; <code>writeJson</code>: <code>output</code> 版本更加的安全，会在文件不存在的情况下，创建该文件</li></ul><p>同步版本和异步版本：</p><ul><li>同步版本一般就是在异步版本名字后添加 <code>Sync</code> 后缀。</li><li>因为同步版本比较简单，本文档并没有列举出同步版本的文档，具体可以参考GitHub文档</li></ul><p>下面对异步和同步的对应关系进行列举：</p><table><thead><tr><th>异步版本</th><th>同步版本</th><th>作用</th></tr></thead><tbody><tr><td><a href="./copy.html">copy</a></td><td>copySync</td><td>拷贝文件或目录</td></tr><tr><td><a href="./emptyDir.html">emptyDir</a></td><td>emptyDirSync</td><td>清空目录</td></tr><tr><td><a href="./ensureFile.html">ensureFile</a></td><td>ensureFileSync</td><td>确保文件存在，不存在创建文件，存在则不做任何事</td></tr><tr><td><a href="./ensureDir.html">ensureDir</a></td><td>ensureDirSync</td><td>确保文件夹存在，不存在则创建，别名 `mkdirs</td></tr><tr><td><a href="./ensureLink.html">ensureLink</a></td><td>ensureLinkSync</td><td>确保链接存在</td></tr><tr><td><a href="./ensureSymlink.html">ensureSymlink</a></td><td>ensureSymlinkSync</td><td>确保符号链接存在</td></tr><tr><td><a href="./move.html">move</a></td><td>moveSync</td><td>移动文件或文件夹</td></tr><tr><td><a href="./outputFile.html">outputFile</a></td><td>outputFileSync</td><td>写入文件，类似 <code>writeFile</code>，它在文件不存在时创建文件</td></tr><tr><td><a href="./pathExists.html">pathExists</a></td><td>pathExistsSync</td><td>测试给定路径是否存在</td></tr><tr><td><a href="./readJson.html">readJson</a></td><td>readJsonSync</td><td>读取JSON文件，解析为对象</td></tr><tr><td><a href="./remove.html">remove</a></td><td>removeSync</td><td>移除文件或文件夹，路径不存在不做任何事</td></tr><tr><td><a href="./outputJson.html">outputJson</a></td><td>outputJsonSync</td><td>将对象写入到JSON文件中，类似 <code>writeJson</code>，json文件不存在时创建</td></tr><tr><td><a href="./writeJson.html">writeJson</a></td><td>writeJsonSync</td><td>将对象写入到JSON文件中，注意和上面 <code>outputJson</code> 区别</td></tr></tbody></table><p>2022年08月16日10:47:41</p>',10),i=[c];function n(a,l,s,p,u,h){return d(),e("div",null,i)}const S=t(o,[["render",n]]);export{y as __pageData,S as default};
