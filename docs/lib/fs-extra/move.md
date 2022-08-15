---
title: move async
---

## 接口定义



::: tip 作用

移动文件或文件夹，即使跨设备。

:::



📔：
```js
move(src, dest[, options][, callback])
```

参数：

- `src <String>`
- `dest <String>` 🚨 当 `src` 是一个文件时，`dest` 也必须是一个文件；`src` 是文件夹时，`dest` 也必须是一个文件夹
- `options <Object>` 
  - `overwrite <boolean>`：覆盖已经存在的文件或文件夹，默认为 `false`

- `callback <Function>`
  - `err <Error>`



## 示例

```js {3-4,6,12,21}
const fs = require('fs-extra')

const src = '/tmp/file.txt'
const dest = '/tmp/this/path/does/not/exist/file.txt'

// 1️⃣ 使用回调
fs.move(src, dest, err => {
  if (err) console.log(err) // null
  console.log('移动成功')
})

// 2️⃣ 使用Promise
fs.move(src, dest)
  .then(() => {
    console.log('移动成功')
  })
  .catch(err => {
    console.error(err)
  })

// 3️⃣ 使用async/await
aysnc function example(src, dest) {
  try {
    await fs.ensureSymlink(src, dest)
    console.log('移动成功')
  } catah(err) {
    console.error(err)
  }
}
example(src, dest)
```



使用 `overwrite` 配置：

```js {5-6}
const fs = require('fs-extra')

fs.move(
  '/tmp/somedir',
  '/tmp/may/alreay/exist/somedir',
  { overwrite: true },
  err => {
    console.log('移动成功')
  }
)
```





- [move - docs](https://github.com/jprichardson/node-fs-extra/blob/0220eac966/docs/move.md)

2022年08月15日19:40:34

