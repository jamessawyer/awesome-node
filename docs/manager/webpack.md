---
title: webpack
---
学习webpack

## 基础
📺 视频：
1. [🔥 「前端工程化」之 Webpack 原理与实践（彻底搞懂吃透 Webpack）汪磊原版 - @bilibili](https://www.bilibili.com/video/BV1kP41177wp)
   - 讲的非常的好，看完基本入门
   - 对一些原理性的东西也会讲到，非常的推荐观看





## 深入

🧾文章：

1. [🔥Webpack: An in-depth introduction to SplitChunksPlugin Webpack：SplitChunksPlugin - @indepth.dev](https://indepth.dev/posts/1490/webpack-an-in-depth-introduction-to-splitchunksplugin) 理解如何分包必读🚀
   - 深入的讲解了 `SplitChunksPlugin` 的作用，原理，分包规则
   - 2个默认的缓存组`cacheGroups`，以及如何禁用某个默认缓存组
     - `default` - 处理 `node_modules` 之外的modules的分包
     - `defaultVendors` - 处理来自 `node_modules` 的modules的分包
   - 分包的条件
     - `chunks` - `initial` | `async` (默认值) | `all`
     - `minChunks` - module被chunks引入的最小次数
     - `minSize` - module的最小尺寸，单位bytes
     - 等等