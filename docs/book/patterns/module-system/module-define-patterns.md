---
title: CommonJS模式
---

[[toc]]

模块系统除了是一种加载依赖的机制外，同时还是一种定义APIs的工具。与API设计的任何其他问题一样，需要考虑的主要因素是私有功能和公共功能之间的平衡。目标是最大化隐藏信息和API的复用性，同时平衡扩展性和代码复用这样的软件质量要求。

本节将分析一下Node.js中定义模块最流行的几种模式：

- 有名导出（`Named exports`）
- 导出函数，类和类实例
- 猴子补丁（`Monkey Patching`）

每种模式都对信息隐藏，可扩展性和代码复用进行了自身的平衡。



## 1️⃣ 有名导出

👩‍🏫导出公共API最简单的方法是 `named exports`，将公共属性赋值为 `exports`(或 `module.exports`)。通过这种方式，导出的对象成为相关功能的一个容器或命名空间。

🌰

`logger.js`

```js {1,5}
exports.info = (message) => {
  console.log(`info: ${message}`)
}

exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}
```

`导出的函数可通过加载模块的属性的方式被访问`，即：`main.js`

```js {3}
const logger = require('./logger')

// logger.js中导出的2个函数，可通过模块属性的方式使用
logger.info('info')
logger.verbose('verbose')
```

大多数Node.js核心模块都使用了这种模式😎。

::: warning

但是，CommonJS规范只允许通过 `exports` 变量导出公共成员。因此，有名导出模式是唯一真正兼容CommonJS规范的模式。而Node.js提供的 `module.exports` 扩展支持更宽广的模块定义模式🤩，下面我们将看到这一点。

:::



## 2️⃣ ⭐ 导出一个函数

最流行的模块定义模式包含将整个 `module.exports` 赋值给一个函数。

- 这个模式最主要的优势在于，`它允许你只暴露单一功能`，这为模块提供了一个清晰的入口，使模块更易于理解和使用
- 它也贴合了 `最小表面（small surface）` 的原则
- 社区也称这个模式为 `substack pattern`

🌰 `logger.js`

```js
module.exports = (message) => {
  console.log(`info: ${message}`)
}
```

📚这种模式的一种可能扩展是，使用导出的函数作为其它公共APIs的命名空间。

- 这是一种非常强大的组合，因为它给模块一个很清晰的单一入口点（主导出函数）
- 同时它允许暴露其它次要的或更高级的使用场景的功能🤩

🎉下面代码展示了如何将上面导出的函数作为命名空间进行扩展：（`相当于给函数对象添加新的属性 `）

```js
// 💡 verbose功能比较次要
module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}
```

使用：`main.js`

```js {3-4,6}
const logger = require('./logger')

// 因为导出的是一个函数，因此可以直接调用🚀
logger('info')

// 次要功能，在其命名空间下 😀
logger.verbose('verbose')
```

尽管只导出一个函数看起来是一种限制，但实际上，这很好的将重点放在模块中最重要的在单一功能上，同时通过暴露属性的方式降低了次要功能或内部细节的可见性。Node.js模块化强烈推荐采用单一职责原则（`SRP`）- 即每个模块都应该对单个功能负责，并且该职责应该完全封装在模块中。

::: info

译者注：这种模式最著名的应属 `express.js`了

:::

## 3️⃣ 导出一个类

导出类的模块本质上是一个特殊化的函数导出。区别在于，这种模式允许用户通过构造器函数创建新的实例，同时可通过原型链对类进行扩展以及创建新的类。

🌰：

`logger.js`

```js {18}
class Logger {
  constructor(name) {
    this.name = name
  }
  log(message) {
    console.log(`[${this.name}] ${message}`)
  }
  
  info(message) {
    this.log(`info: ${message}`)
  }
  
  verbose(message) {
    this.log(`verbose: ${message}`)
  }
}

module.exports = Logger
```

使用：`main.js`

```js
const Logger = require('./logger')

const dbLogger = new Logger('DB') // 实例化
dbLogger.info('info')

const accessLogger = new Logger('ACCESS') // 实例化一个新的
accessLogger.verbose('verbose')
```

导出一个类仍然是对模块提供单一入口，但相比于 `substack pattern`，它暴露了更多模块内部细节。另一方面，就扩展性而言，这个模式会更加的强大😎。



## 4️⃣ ⭐ 导出一个实例

📚我们可以利用 `require()` 函数缓存的机制，轻松的从构造器函数或工厂函数中定义`有状态`实例，并且状态在不同模块之间进行`共享`。

🌰 `logger.js`

```js {3,8,13-14}
class Logger {
  constructor(name) {
    this.count = 0 // count是一个状态
    this.name = name
  }
  
  log(message) {
    this.count++
    console.log('[' + this.name + '] ' + message )
  }
}

// 🤩 这里直接导出一个实例
module.exports = new Logger('DEFAULT')
```

使用: `main.js`

```js
const logger = require('./logger')

logger.log('info')
```

::: tip

因为模块已经被缓存起来了，因此每次模块被加载时，获取的都是相同的对象实例，因此状态（这里的 `count`）也得以共享。

:::

这个模式非常类似创建了一个 **单例（`singleton`）**，但是它不能像单例一样确保整个应用中的唯一性。在分析解析算法时，我们已经看到一个模块可能在应用程序的依赖树中被安装多次。这会导致同一个逻辑模块的多个实例，所有实例都运行在同一个Node.js应用程序的上下文中。（我们将在第7章中详细分析单例模式）

🎉这个模式的一个有趣细节是，导出实例并不会阻碍创建新实例，即使我们没有导出一个类。

::: tip

事实上，我们可以依赖导出实例的 `constructor` 属性构建一个相同类型的新实例：

```js {1-2}
// 🚀 新的知识点
const customLogger = new logger.constructor('CUSTOM')
customLogger.log('info')
```

:::

如你所见，通过使用 `logger.constructor()`，我们可以实例化一个新的 `Logger` 对象。🚨注意使用这种技术应当十分小心或完全禁用这种使用方式。你可以这样想，既然作者不想导出类，大概是想隐藏这个类才导出实例的。



## 5️⃣ 修改其它模块或全局作用域（猴子补丁）

**一个模块可以什么也不导出😅**。这看起来可能没什么用，但是，不要忘记了，**模块能够修改全局作用域和全局作用域内的任何对象**，包括在缓存中的模块。但要注意的是，这通常认为是一种坏的实践，但这种模式在某些情况下（比如，测试）是有用且安全大的，并在实际项目中会使用到，因此还是值得了解的。

我们将修改全局作用域中其它模块或对象的模式称之为 **猴子补丁（`Monkey Patching`）**。

::: tip 📚

它通常指的是在运行时修改现有对象以更改或扩展其行为或应用临时修复程序的做法。

:::

🌰如何通过猴子补丁方式给模块添加一个新的函数：`patcher.js`

```js {1}
require('./logger').customMessage = function() {
  console.log('This is a new functionality')
}
```

使用新的补丁模块也很简单：`main.js`

```js {1,3}
require('./patcher') // 引入补丁

const logger = require('./logger')
logger.customMessage()
```

::: warning 🚨

在这里描述的这个技术可能很危险。主要的问题是，使用修改全局命名空间或其他模块的模块是一种具有 **副作用（`side effects`）** 的操作。换而言之，它会影响范围之外的实体的状态，这可能会产生不容易预测的后果，特别是当多个模块与相同的实体交互时。

想象一下，有两个不同的模块试图设置相同的全局变量，或者修改相同模块的相同属性。影响可能是不可预测的(哪个模块获胜?)，但最重要的是，它将对整个应用程序产生影响。

:::

所以，再次小心使用这个技巧，并确保你了解所有可能的副作用，再这样做。此时，我们应该对CommonJS和它通常使用的一些模式有了一个相当完整的理解😎。

::: info

如果你想要一个真实的示例来说明这是如何有用的，请查看 [nock](https://www.npmjs.com/package/nock) 库，这是一个允许你在测试中模拟HTTP响应的模块。nock的工作方式是通过猴子补丁 Node.js `http`模块，并通过改变其行为，使其提供模拟响应，而不是发出真正的http请求。这允许我们的单元测试在不触及实际生产HTTP接口的情况下运行，这在为依赖于第三方api的代码编写测试时非常方便。

:::

后面我们将探索ESM🎉。



2022年09月30日01:00:20

