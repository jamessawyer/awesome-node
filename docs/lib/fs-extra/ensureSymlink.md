---
title: ensureSymlink
---

## 接口定义



::: tip 作用

确保符号链接的存在。

- 如果目录结构不存在，则创建该目录结构

:::



📔：
```js
ensureSymlink(srcPath, destPath[, type][, callback])

// 别名 
createSymlink(srcPath, destPath[, type][, callback])
```

参数：

- `srcPath <String>`
- `destPath <String>`
- `type <String>` 只针对Windows平台，其余平台忽略。可以设置的值为 `dir | file | function`
- `callback <Function>`
  - `err <Error>`



## 示例

```js {3-4,6,12,21}
const fs = require('fs-extra')

const srcPath = '/tmp/file.txt'
const destPath = '/tmp/this/path/does/not/exist/file.txt'

// 1️⃣ 使用回调
fs.ensureSymlink(srcPath, destPath, err => {
  console.log(err) // null
  // 符号链接被创建，包括它所在的目录
})

// 2️⃣ 使用Promise
fs.ensureSymlink(srcPath, destPath)
  .then(() => {
    console.log('成功')
  })
  .catch(err => {
    console.error(err)
  })

// 3️⃣ 使用async/await
aysnc function example(src, dest) {
  try {
    await fs.ensureSymlink(src, dest)
    console.log('成功')
  } catah(err) {
    console.error(err)
  }
}
example(srcPath, destPath)
```

2022年08月15日19:31:56

