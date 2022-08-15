---
title: copy async
---

## 接口定义
::: tip 作用
拷贝文件或目录。目录可以有内容。
:::

📔：
```js
copy(src, dest[, options][, callback])
```

参数：

- `src <String>`： 注意，如果 `src` 是一个目录，它将拷贝目录里面所有的内容，而不是整个目录自身（[issus#537](https://github.com/jprichardson/node-fs-extra/issues/537)）
- `dest <String>`： 注意，如果 `src` 是一个文件，`dest` 不能为目录（[issue#323](https://github.com/jprichardson/node-fs-extra/issues/323)）
- `options <Object>`：
  - `overwrite <boolean>`：覆写整个文件或文件夹，默认为 `true`。如果将其设置为 `false` ，并且 `dest` 已经存在，则拷贝操作会静默失败🚨
  - `errorOnExist <boolean>`：当 `overwrite: false`，且 `dest` 已经存在时，抛出错误。默认为 `false`
  - `dereference <boolean>`：取消引用符号链接，默认是 `false`
  - `preserveTimestamps <boolean>`：当为 `true`，将设置最后一次修改和访问时间戳为原文件时间戳；当为 `false`，时间戳行为取决于操作系统。默认 `false`
  - `filter <Function>`：过滤拷贝文件或文件夹的函数。要拷贝的返回 `true`，被忽略的返回 `false`。也可以返回一个 `Promise`，resolve true或false（或传递一个 `异步函数`）
  - `callback <Function>` 回调函数
    - `err <Error>`



## 示例

```js {3,9,15,24}
const fs = require('fs-extra')

// 1️⃣ 包含回调
fs.copy('/tmp/myfile', '/tmp/mynewfile', (err) => {
  if (err) return console.error(err)
  console.log('拷贝成功')
})

// 2️⃣ 拷贝目录，即使它包含一个子目录或文件
fs.copy('/tmp/mydir', '/my/mynewdir', err => {
  if (err) return console.error(err)
  console.log('拷贝成功')
})

// 3️⃣ 使用Promises
fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => {
    console.log('拷贝成功')
  })
  .catch(err => {
    console.error(err)
  })

// 4️⃣ async/await
async function example() {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile')
    console.log('拷贝成功')
  } catch(err) {
    console.error(err)
  }
}
example()
```

使用 `filter` 函数过滤拷贝的文件：

```js {4-6,12}
const fs = require('fs-extra')

const filterFunc = (src, dest) => {
  // 这里写过滤逻辑
  // 要被拷贝的返回true
  // 比如，只拷贝文件夹中 `.js` 文件
}

fs.copy(
  '/tmp/mydir', 
  '/tmp/mynewdir', 
  {filter: filterFunc},
  err => {
    if (err) return console.error(err)
    console.log('拷贝成功')
  }
)
```

