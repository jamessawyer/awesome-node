---
title: 互操性
---
[[toc]]

之前已经提到了ESM和CommonJS模块系统的几个重要差异，比如，ESM导入时必须显式的带上文件扩展名，而CJS的 `require()` 文件扩展名完全是可选的。
下面接着讨论一下ESM和CJS的其它重要差异以及2个模块系统之间在必要时如何结合使用。

## ESM默认严格模式
ESM隐式的运行在严格模式下。这意味着我们不必在文件的最开头添加 `"use strict;"` 语句。并且ESM严格模式是不能被禁用的，因此我们不能使用未声明的变量，或者 `with` 语句，或其它只能在非严格模式才允许的功能，这绝对是一件好事，因为严格模式更加的安全。
 - [strict mode -MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

## ⭐ ESM中缺少的引用
在ESM中，一些CommonJS中比较重要的引用是不存在的😅。
- 比如 `require` & `exports` & `module.exports` & `__dirname` & `__filename`
- 因为ESM运行在严格模式下，如果你直接使用这些不存在变量，会直接抛出 `ReferenceError`
```js
// ❌ ReferenceError: exports is not defined in ES module scope
console.log(exports)
// ❌ ReferenceError: module is not defined in ES module scope
console.log(module)
// ❌ ReferenceError: __filename is not defined in ES module scope
console.log(__filename)
// ❌ ReferenceError: __dirname is not defined in ES module scope
console.log(__dirname)
```
对CommonJS中的 `exports` 和 `module` 我们已经[讨论](./commonjs-modules#🚀-module-exports-vs-exports)很多了; `__filename` 和 `__dirname` 表示相对于当前模块文件的绝对路径和相对于父文件夹的绝对路径。当我们需要构建一个相对当前文件的相对路径时，这2个特殊的变量会非常的有用。
::: tip
在ESM中，可以通过特殊的 **`import.meta`** 对象来获取当前文件URL的引用。具体来讲，`import.meta.url` 是对当前模块文件的引用，格式类似是 `file:///path/to/current_module.js`。通过这个值我们可以通过绝对路径的方式重建 `__filename` & `__dirname` 功能🎉。

```js
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(__filename)
console.log(__dirname)
```

同样可以通过下面方式重建 `require()` 函数：
```js
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
```
🌰 `./cjs/math.js` 是一个 `CommonJS` 模块，注意 `cjs` 文件夹中的 `package.json` 的 `type` 字段不要声明为 `"module"`
```js
module.exports = function(a, b) {
  return a + b
}
```
在ESM中导入CommonJS模块：
```js {2,4}
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// 使用定义的 require导入CJS模块
const add = require('./cjs/math')
console.log(add(1, 2))
```
:::

另一个差异就是，ESM中的 `this` 关键词：
- 因为ESM是严格模式， `this` 表示 `undefined`
- 而CJS中，`this` 表示对 `exports` 的引用

```js
// this.js - ESM
console.log(this) // undefined

// this.js - CJS
console.log(this === exports) // true
```

## ⭐ 互操性
上面我们已经讨论了，如果通过 `module.createRequire` 函数在ESM中导入CJS模块。**除了上面那种方式外，还可以使用标准的 `import` 语法导入CJS模块，但仅限于 `默认导出`😎**：
```js
// ✅ 导入CJS中的默认导出
import packageMain from 'commonjs-package'

// ❌ 导入CJS中的有名导出
import { method } from 'commonjs-package'
```
因此上面的例子可以写为：
```js
import add from './cjs/math.js'

console.log(add(1, 2))
```
::: warning
🚨 不能在CommonJS模块中导入ESM模块
:::
另外，ESM不能直接以模块形式导入JSON文件，这在CommonJS中是用得很多一个功能。下面 `import` 语句将失败：
```js
// ❌ TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".json" for
import data from './data.json'
```
为了突破这个限制，我们可以再次使用 `module.createRequire()` 工具💡：
```js {2,4}
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const data = require('./data.json')
console.log(data)
```
ESM原生支持JSON模块的能力还在开发中，因此，在未来我们可能可以不需要依赖 `createRequire()`的帮助，就可以直接导入JSON模块了😎。

## fileURLToPath & pathToFileURL
译者补充：关于ESM中的 `fileURLToPath` & `pathToFileURL` 定义和用法：
```typescript
/**
 * This function ensures the correct decodings of percent-encoded characters as
 * well as ensuring a cross-platform valid absolute path string.
 *
 * ```js
 * import { fileURLToPath } from 'url';
 *
 * const __filename = fileURLToPath(import.meta.url);
 *
 * new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
 * fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)
 *
 * new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
 * fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)
 *
 * new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
 * fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)
 *
 * new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
 * fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
 * ```
 * @since v10.12.0
 * @param url The file URL string or URL object to convert to a path.
 * @return The fully-resolved platform-specific Node.js file path.
 */
function fileURLToPath(url: string | URL): string;

/**
 * This function ensures that `path` is resolved absolutely, and that the URL
 * control characters are correctly encoded when converting into a File URL.
 *
 * ```js
 * import { pathToFileURL } from 'url';
 *
 * new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
 * pathToFileURL('/foo#1');              // Correct:   file:///foo%231 (POSIX)
 *
 * new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
 * pathToFileURL('/some/path%.c');       // Correct:   file:///some/path%25.c (POSIX)
 * ```
 * @since v10.12.0
 * @param path The path to convert to a File URL.
 * @return The file URL object.
 */
function pathToFileURL(path: string): URL;
```

2022年10月22日21:26:20
