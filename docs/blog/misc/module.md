---
title: ESM & CJS 模块
---

介绍一些ESM & CommonJS模块相关的文章：

1. [All you need to know to move from CommonJS to ECMAScript Modules (ESM) in Node.js](https://pawelgrzybek.com/all-you-need-to-know-to-move-from-commonjs-to-ecmascript-modules-esm-in-node-js/) 介绍如何从CommonJS迁移到ESM

   - 语法的区别: `require() & module.exports` vs `import & export`

   - commonjs独有的`__dirname` & `__filename` 如何在esm中的模拟

     ```js
     import { fileURLToPath } from "url";
     import { dirname } from "path";
     
     const __filename = fileURLToPath(import.meta.url);
     const __dirname = dirname(__filename);
     
     console.log(__dirname);
     console.log(__filename);
     ```

   - 如何在esm中使用 commonjs 中独有的 `require()` 方法

     ```js
     import { createRequire } from "module";
     
     const require = createRequire(import.meta.url);
     ```

   - esm独有的顶层 `await`

