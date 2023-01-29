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

