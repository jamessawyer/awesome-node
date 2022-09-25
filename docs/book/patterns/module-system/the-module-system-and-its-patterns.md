---
title: 模块系统和模式
---

正如前面所说，模块是构建大型应用以及通过导出和不导出方式暴露和隐藏信息的核心。

在了解CommonJS之前，我们先讨论一种帮助隐藏信息，用于构建简单模块系统的通用模式 - `revealing module pattern`(揭露模块模式)。



## The revealing module pattern

浏览器中的JS最大问题就是缺少命名空间。每个脚本都运行在全局作用于。而应用内部代码或第三方依赖暴露出来的功能会污染全局作用域😅。这是极其有害的。假设，有个第三方库实例化一个全局变量 `utils`，如果应用代码自身不小心改变或覆盖了该 `utils`，这就可能导致不可预知的错误。

::: tip

简而言之，依赖全局作用域是一件极其危险的事。尤其是当代码越来越复杂，依赖越来越多时。

:::

一种解决这类问题比较流行的技术称之为 `揭露模块模式`，看起来如下：

```typescript {3,7}
// IIFE
const myModule = (() => {
  // 私有信息
  const privateFoo = () => {}
  const privateBar = []
  
  // 暴露给外界的信息
  const exported = {
    publicFoo: () => {},
    publicBar: () => {}
  }
  
  return exported
})()

console.log(myModule)
console.log(myModule.privateFoo, myModule.privateBar)
```

打印结果：

```bash
{ publicFoo: [Function: publicFoo],
  publicBar: [Function: publicBar] }
undefined undefined
```



这种模式利用自调用函数。

::: tip

`IIFE`(Immediately Invoked Function Expression) 用于创建私有作用域，只导出公共部分。

在JS中，函数内创建的变量外部作用域是无法访问的。函数可以使用 `return` 语句选择性的向外部作用域暴露信息。

📚这个模式本质上就是隐藏私有信息，只暴露公开API。

:::

这种思想正是CommonJS模块系统的基石😎。



2022年09月25日12:26:08

