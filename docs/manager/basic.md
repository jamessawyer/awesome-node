---
title: Package.json
---

关于 `package.json` 中的一些字段介绍：

1. [name, type, exports, main字段的含义](https://www.baobangdong.cn/node.js-package.json-field-definitions/)
   - `name` 主要用于包的唯一标识
   - `type` 决定包采用那种模块规范，`commonjs | esm`
   - `exports` 允许引用自己的package name来定义package的入口文件，以及`条件导出`，根据不同的模块环境，执行不同的文件🚀
   - `main` 包的入口文件，如果 `package.json` 中同时存在 `exports` 和 `main`字段，则 `exports` 优先级更高
   - [vitejs options - resolve.conditions](https://cn.vitejs.dev/config/shared-options.html#resolve-conditions) 关于条件导出的介绍
   - [conditional exports - nodejs.org](https://nodejs.org/api/packages.html#packages_conditional_exports)
   - [package.json field definitions - nodejs.org](https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions)
2. [🚀🚀 打包JavaScript库的现代化指南](https://mp.weixin.qq.com/s/m-i_Et6YqkZ0aj537vN2_A) 构建一个lib指南
   - 确定打包格式： `esm | commonjs | umd | amd`
   - 是否要输出多个文件保留文件格式，还是只输出一个大文件
   - 是否使用TypeScript，如何使用则 `.d.ts` 文件需要在 `package.json#exports` 或者 `package.json#types` 中声明
   - 针对浏览器版本，生成多个格式，比如现代浏览器使用 `esm` 版本；老版本浏览器使用 `umd` 版本
   - 外置框架的处理，不要将框架（比如React,Vue）打到lib中，而是将其添加到 `package.json#peerDependencies` 中
   - 🎉配置package.json
     - `name` 属性
     - `version` 版本控制遵循semver控制策略
     - `exports` 为lib定义公共API，优先使用这个，可定义 `types`(`.d.ts` 文件) & `module` & `import`(针对esm作为入口文件) & `require` (针对cjs) & `default`
     - 如果运行的node版本不支持 `exports` 字段，则可能需要在package.json顶层定义 `types` & `main` & `module` & `browser` 等字段；如果node支持 `exports` 字段，`types` & `main` & `module` & `browser` 这些字段自动被忽略💡
     - `files` 列举出lib上传到npm registry中包含的文件
     - `sideEffects` 帮助打包工具确认是否包含副作用模块，或者明确指出哪些模块是包含副作用的
     - `peerDependencies` 列举出lib所需的相对依赖
   - 定义lib协议，比如 `MIT`



