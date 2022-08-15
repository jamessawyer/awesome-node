---
title: ensureLink async
---

## 接口定义
::: tip 作用

确保链接的存在。

- 如果请求创建的文件在不存在的目录中，则创建这些目录。

:::



📔：
```js
ensureLink(srcPath, destPath[, callback])

// 别名 
createLink(srcPath, destPath[, callback])
```

参数：

- `srcPath <String>`： 源路径
- `destPath <String>`：要链接的目标路径
- `callback <Function>` 回调函数
  - `err <Error>`

## 示例

```js {3-4,6,9,12,21}
const fs = require('fs-extra')

const srcPath = '/tmp/file.txt'
const destPath = '/tmp/this/path/does/not/exist/file.txt'

// 1️⃣ 使用回调
fs.ensureLink(srcPath, destPath, err => {
  console.log(err) // null
  // 链接被创建，包括它存放的目录
})

// 2️⃣ 使用Promises
fs.ensureLink(srcPath, destPath)
  .then(() => {
    console.log('成功')
  })
  .then(err => {
    console.error(err)
  })

// 3️⃣ 使用 aysnc/await
async function example(src, dest) {
  try {
    await fs.ensureLink(src, dest)
    console.log('成功')
  } catch(err) {
    console.log(err)
  }
}
example(srcPath, destPath)
```

2022年08月15日19:15:37

