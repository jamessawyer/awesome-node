import{_ as e,c as o,o as t,V as d}from"./chunks/framework.19aa805b.js";const f=JSON.parse('{"title":"模块的必要性","description":"","frontmatter":{"title":"模块的必要性"},"headers":[],"relativePath":"book/patterns/module-system/the-need-for-modules.md","filePath":"book/patterns/module-system/the-need-for-modules.md","lastUpdated":1683625893000}'),s={name:"book/patterns/module-system/the-need-for-modules.md"},c=d("<p>一个好的模块系统应该有助于解决软件工程中的一些基本需求:</p><ul><li><code>存在将代码拆分为多个文件的方式</code>。这有助于使代码更具组织性，易于理解，功能开发和测试更独立</li><li><code>允许代码在不同项目中复用</code>。模块可以实现通用逻辑用于不同的项目中。在模块中组织此类功能可以更容易地将其引入可能想要使用它的不同项目中。</li><li><code>封装性（或信息隐藏）</code>。隐藏信息的复杂性，只暴露功能清晰的简单接口通常是一个好的想法。大多数模块系统允许选择性的使 <code>私有</code> 代码隐藏，同时向使用者暴露该模块 <code>公开的</code> 接口，比如功能，函数，类，或对象。</li><li><code>依赖管理</code>。一个好的模块系统应当是模块开发者能轻松构建在已有模块之上，或第三方模块。模块系统还应该让模块使用者能够轻松地导入运行给定模块所必需的依赖链（临时依赖）。</li></ul><p>📚 分清楚 <code>module</code> 和 <code>module system</code> 的区别很重要。我们可以定义一个模块为软件的实际单元，而模块系统则是允许我们定义模块和在项目中使用模块的一种语法和工具。</p><p>2022年09月12日22:15:54</p>",4),l=[c];function a(_,r,n,i,m,p){return t(),o("div",null,l)}const h=e(s,[["render",a]]);export{f as __pageData,h as default};
