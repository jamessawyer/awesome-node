---
title: EventEmitter
---

整个Node.js的异步通信都是通过 [EventEmitter](https://nodejs.org/api/events.html) 来实现的，了解这种模式对于理解Node的事件系统非常的重要。它本身的也是很简单的一个类。

## 文章

1. [How to code your own event emitter in Node.js: a step-by-step guide - @freecodecamp](https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/)
   - 如何一步一步实现EventEmitter的核心功能 + 图解各个属性的含义😎
   - `on | addEventListener` 方法
   - `off | removeEventListener` 方法
   - `once` 方法，本文中的实现是有问题的🚨，具体实现可以参考 [events once源码](https://github.com/nodejs/node/blob/v19.2.0/lib/events.js#L632)
   - `emit` 方法
   - `rawListeners` 方法
   - `listenerCount` 获取某个事件注册的监听器数量