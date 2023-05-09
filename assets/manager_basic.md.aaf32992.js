import{_ as e,c as o,o as a,V as c}from"./chunks/framework.19aa805b.js";const f=JSON.parse('{"title":"Package.json","description":"","frontmatter":{"title":"Package.json"},"headers":[],"relativePath":"manager/basic.md","filePath":"manager/basic.md","lastUpdated":1683625893000}'),i={name:"manager/basic.md"},d=c('<p>关于 <code>package.json</code> 中的一些字段介绍：</p><ol><li><a href="https://www.baobangdong.cn/node.js-package.json-field-definitions/" target="_blank" rel="noreferrer">name, type, exports, main字段的含义</a><ul><li><code>name</code> 主要用于包的唯一标识</li><li><code>type</code> 决定包采用那种模块规范，<code>commonjs | esm</code></li><li><code>exports</code> 允许引用自己的package name来定义package的入口文件，以及<code>条件导出</code>，根据不同的模块环境，执行不同的文件🚀</li><li><code>main</code> 包的入口文件，如果 <code>package.json</code> 中同时存在 <code>exports</code> 和 <code>main</code>字段，则 <code>exports</code> 优先级更高</li><li><a href="https://cn.vitejs.dev/config/shared-options.html#resolve-conditions" target="_blank" rel="noreferrer">vitejs options - resolve.conditions</a> 关于条件导出的介绍</li><li><a href="https://nodejs.org/api/packages.html#packages_conditional_exports" target="_blank" rel="noreferrer">conditional exports - nodejs.org</a></li><li><a href="https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions" target="_blank" rel="noreferrer">package.json field definitions - nodejs.org</a></li></ul></li><li><a href="https://mp.weixin.qq.com/s/m-i_Et6YqkZ0aj537vN2_A" target="_blank" rel="noreferrer">🚀🚀 打包JavaScript库的现代化指南</a> 构建一个lib指南 <ul><li>确定打包格式： <code>esm | commonjs | umd | amd</code></li><li>是否要输出多个文件保留文件格式，还是只输出一个大文件</li><li>是否使用TypeScript，如何使用则 <code>.d.ts</code> 文件需要在 <code>package.json#exports</code> 或者 <code>package.json#types</code> 中声明</li><li>针对浏览器版本，生成多个格式，比如现代浏览器使用 <code>esm</code> 版本；老版本浏览器使用 <code>umd</code> 版本</li><li>外置框架的处理，不要将框架（比如React,Vue）打到lib中，而是将其添加到 <code>package.json#peerDependencies</code> 中</li><li>🎉配置package.json <ul><li><code>name</code> 属性</li><li><code>version</code> 版本控制遵循semver控制策略</li><li><code>exports</code> 为lib定义公共API，优先使用这个，可定义 <code>types</code>(<code>.d.ts</code> 文件) &amp; <code>module</code> &amp; <code>import</code>(针对esm作为入口文件) &amp; <code>require</code> (针对cjs) &amp; <code>default</code></li><li>如果运行的node版本不支持 <code>exports</code> 字段，则可能需要在package.json顶层定义 <code>types</code> &amp; <code>main</code> &amp; <code>module</code> &amp; <code>browser</code> 等字段；如果node支持 <code>exports</code> 字段，<code>types</code> &amp; <code>main</code> &amp; <code>module</code> &amp; <code>browser</code> 这些字段自动被忽略💡</li><li><code>files</code> 列举出lib上传到npm registry中包含的文件</li><li><code>sideEffects</code> 帮助打包工具确认是否包含副作用模块，或者明确指出哪些模块是包含副作用的</li><li><code>peerDependencies</code> 列举出lib所需的相对依赖</li></ul></li><li>定义lib协议，比如 <code>MIT</code></li></ul></li><li><a href="https://twitter.com/bluwyoo/status/1623644164046073856?s=20&amp;t=S_xtzmAnYY3fZHZE2gY62w" target="_blank" rel="noreferrer">🎉The complete guide to packaging library - Bjorn Lu@Twitter </a>比上面文章更加的详细 <ul><li>着重介绍了 <code>package.json#exports</code> 的各种用户，以及含义</li><li>发布包构建工具的选择</li><li>类型文件的处理以及不同模块规范，开发还是生产</li><li>也可以选择特殊的构建工具 - tsup</li><li>以及如何使用JSDoc，不使用TS，简化整个过程</li><li><a href="https://github.com/bluwy/package-library" target="_blank" rel="noreferrer">slides github</a></li><li><a href="https://package-library.bjornlu.com/" target="_blank" rel="noreferrer">slides preview</a></li><li><a href="https://publint.dev/" target="_blank" rel="noreferrer">🔧 发布包之前对lib进行在线验证工具</a></li></ul></li></ol>',2),l=[d];function r(t,s,n,p,m,g){return a(),o("div",null,l)}const b=e(i,[["render",r]]);export{f as __pageData,b as default};
