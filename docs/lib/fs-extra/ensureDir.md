---
title: ensureDir async
---

## 接口定义
::: tip 作用
确保文件夹存在。
- 如果目录结构不存在，则创建该目录。
:::



📔：
```js
ensureDir(src[, options][, callback])

// 别名 
mkdirs(src[, options][, callback])
mkdirp(src[, options][, callback])
```

参数：

- `dir <String>`： 待验证或创建的文件夹
- `options <Integer> | <Object>`
  - 如果是 `<Integer>`，它表示 `mode`
  - 如果是 `<Object>`，则表示 `{mode: <Integer>}`
- `callback <Function>` 回调函数
  - `err <Error>`

## 示例

```js {3-7,9,12,15,21,30,41,44}
const fs = require('fs-extra')

const dir = '/tmp/this/path/does/not/exist'
const desiredMode = 0o2775 // `0o` 表示8进制 💡
const options = {
  mode: 0o2775
}

// 1️⃣ 包含回调
fs.ensureDir(dir, (err) => {
  console.error(err) // null
  // 目录以及它父目录一同被创建😎
})

// 2️⃣ 回调 + mode integer
fs.ensureDir(dir, desiredMode, err => {
  console.error(err) // null
  // 目录以及它父目录一同被创建😎 
})

// 3️⃣ 使用Promises
fs.ensureDir(dir, desiredMode)
  .then(() => {
    console.log('成功')
  })
  .catch(err => {
    console.error(err)
  })

// 4️⃣ async/await
async function example(directory) {
  try {
    await fs.ensureDir(directory)
    console.log('成功')
  } catch(err) {
    console.error(err)
  }
}
example(dir)

// 5️⃣ async/await + 包含mode的对象
async function exampleMode(directory) {
  try {
    await fs.ensureDir(directory, options)
    console.log('成功')
  } catch(err) {
    console.log(err)
  }
}
exampleMode(dir, options)
```

2022年08月15日19:04:16
