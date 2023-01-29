import{_ as e,c as o,o as a,b as t}from"./app.1b6a4c98.js";const m=JSON.parse('{"title":"Package.json","description":"","frontmatter":{"title":"Package.json"},"headers":[],"relativePath":"manager/basic.md","lastUpdated":1674975353000}'),n={name:"manager/basic.md"},s=t('<p>关于 <code>package.json</code> 中的一些字段介绍：</p><ol><li><a href="https://www.baobangdong.cn/node.js-package.json-field-definitions/" target="_blank" rel="noreferrer">name, type, exports, main字段的含义</a><ul><li><code>name</code> 主要用于包的唯一标识</li><li><code>type</code> 决定包采用那种模块规范，<code>commonjs | esm</code></li><li><code>exports</code> 允许引用自己的package name来定义package的入口文件，以及<code>条件导出</code>，根据不同的模块环境，执行不同的文件🚀</li><li><code>main</code> 包的入口文件，如果 <code>package.json</code> 中同时存在 <code>exports</code> 和 <code>main</code>字段，则 <code>exports</code> 优先级更高</li><li><a href="https://cn.vitejs.dev/config/shared-options.html#resolve-conditions" target="_blank" rel="noreferrer">vitejs options - resolve.conditions</a> 关于条件导出的介绍</li><li><a href="https://nodejs.org/api/packages.html#packages_conditional_exports" target="_blank" rel="noreferrer">conditional exports - nodejs.org</a></li><li><a href="https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions" target="_blank" rel="noreferrer">package.json field definitions - nodejs.org</a></li></ul></li></ol>',2),c=[s];function i(r,d,l,p,_,g){return a(),o("div",null,c)}const k=e(n,[["render",i]]);export{m as __pageData,k as default};
