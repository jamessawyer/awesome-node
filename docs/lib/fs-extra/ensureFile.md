---
title: ensureFile async
---

## 接口定义
::: tip 作用
确保文件存在。
- 如果请求创建的文件在不存在的目录中，则创建这些目录。
- 如果文件已经存在，**不会去修改该文件😎**
:::



📔：
```js
ensureFile(file[, callback])

// 别名 
createFile(file[, callback])
```

参数：

- `file <String>`： 待验证或创建的文件
- `callback <Function>` 回调函数
  - `err <Error>`

## 示例

```js {3,5,8,11,20}
const fs = require('fs-extra')

const file = '/tmp/this/path/does/not/exist/file.txt'

// 1️⃣ 包含回调
fs.ensureFile(file, (err) => {
  console.error(err) // null
  // 文件以及它所在的目录一同被创建😎
})

// 2️⃣ 使用Promises
fs.ensureFile(file)
  .then(() => {
    console.log('成功')
  })
  .catch(err => {
    console.error(err)
  })

// 3️⃣ async/await
async function example(f) {
  try {
    await fs.ensureFile(f)
    console.log('成功')
  } catch(err) {
    console.error(err)
  }
}
example(file)
```

2022年08月15日17:52:45
