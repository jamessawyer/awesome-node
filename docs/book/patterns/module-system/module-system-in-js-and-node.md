---
title: js和node中的模块系统
---

不是所有编程语言都存在内置的模块系统，JS很长一段时间是缺乏这个功能的😅。

在浏览器中，可以将代码拆分为多个部分，然后通过不同的 `<script>` 标签的方式导入。对于简单的应用这个还行，但是JS开发者一直缺少功能完善的模块系统。

当JS浏览器应用变得越来越复杂，像 `jQuery`, `Backbone`, `AngularJS` 这样的框架占据浏览器生态时，JS社区提出了几个计划，旨在定义一个可以在JavaScript项目中有效采用的模块系统。最成功的是 `AMD(Asynchronous Module Definition)`，它因 [RequireJS](http://nodejsdp.link/requirejs) 而流行，和之后的 [UMD](http://nodejsdp.link/umd)(Universal Module Definition)。

当Node.js被创建时，它被认为是一种 `JS服务端运行时`，能直接访问底层文件系统，因此，引入一种不同的模块管理方式是一个独特的机会。主体思想是，不依赖HTML `<script>` 标签和通过 `URLs` 的资源访问。相反，选择完全依赖本地文件系统上可用的JavaScript文件。作为其模块系统，Node.js想到了对 `CommonJS` 规范的实现（也称之为 [CJS](http://nodejsdp.link/commonjs)），用于给`非浏览器环境`的JS提供一个模块系统😎。

CommonJS自其发布起，就成为了Node.js中统治性的模块系统，同时由于像[Browserify](http://nodejsdp.link/browserify)  和 [Webpack](http://nodejsdp.link/webpack) 这样的 `模块打包器`的出现，使其在浏览器端也变得很流行起来。

🎉在2015年，随着ES2015的发布，终于出现了官方提出的标准的模块系统请求：`ESM` 或 `ES Modules`。ESM给JS生态带来了很多创新，这其中，它尝试填补服务端和浏览器端的模块管理的间隙，使其统一。

ECMAScript 6仅在语法和语义方面定义了ESM的正式规范，并没有提供任何实现细节。Node.js社区和浏览器公司花费了好几年对规范进行了实现。Node.js从 `V13.2` 封装了对ESM的稳定支持。

ESM将成为管理浏览器端和服务器端JS模块的绝对事实方式。但仍需要时间从CommonJS向ESM标准进行过度。

为了提供Node.js中模块相关的综合性概览，本章的第一部分，将在CommonJS的上下文中进行讨论。然后，第二部分将使用ESM。

本章的目的是，使你能同时适应这2种模块系统😎，但是`本书后面的内容，将只使用ESM作为代码演示`。这更加面向未来。

理解CommonJS的特质能帮助我们更好的理解ESM，和ESM的优势。



2022年09月12日23:53:30

