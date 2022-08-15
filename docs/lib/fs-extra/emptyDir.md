---
title: emptyDir async
---

## 接口定义
::: tip 作用

确保目录是个空目录。

- 如果目录不为空，则清空目录；
- 如果目录不存在，则创建该目录；
- 目录自身不会被删除。

:::



📔：
```js
emptyDir(dir[, callback])

// 或 不区分大小写 😅
emptydir(dir[, callback])
```

参数：

- `dir <String>`： 待验证目录
- `callback <Function>` 回调函数
  - `err <Error>`

## 示例

```js {3-4,10,16,25}
const fs = require('fs-extra')

// 💡假设目录内有很多文件和子文件夹
// 1️⃣ 包含回调
fs.ensureDir('/tmp/some/dir', (err) => {
  if (err) return console.error(err)
  console.log('成功')
})

// 2️⃣ 使用Promises
fs.ensureDir('/tmp/some/dir')
  .then(() => {
    console.log('成功')
  })
  .catch(err => {
    console.error(err)
  })

// 3️⃣ async/await
async function example() {
  try {
    await fs.ensureDir('/tmp/some/dir')
    console.log('成功')
  } catch(err) {
    console.error(err)
  }
}
example()
```



2022年08月15日17:28:01
