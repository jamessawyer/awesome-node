---
title: remove async
---

## 接口定义



::: tip 作用

移除文件或文件夹。

- 文件夹可以有内容
- 如果路径不存在，则什么也不做

:::



📔：
```js
remove(path[, callback])
```

参数：

- `path <String>`
- `callback <Function>`
  - `err <Error>`



## 示例

```js {3-4,7,10,17,22}
const fs = require('fs-extra')

// 移除文件
// 1️⃣ 使用回调
fs.remove('/tmp/myfile', (err) => {
  if (err) console.log(err)
  console.log('文件删除成功')
})

// 移除文件夹
fs.remove('/home/jprichardson', (err) => {
  if (err) console.log(err)
  console.log('HOME目录删除成功')
})


// 2️⃣ 使用Promise
fs.remove('/tmp/myfile')
  .then(() => console.log('文件删除成功'))
  .catch(err => console.error(err))

// 3️⃣ 使用async/await
aysnc function example() {
  try {
    await fs.remove('/tmp/myfile')
    console.log('文件删除成功')
  } catch (err) {
    console.error(err)
  }
}
example()
```





- [remove - docs](https://github.com/jprichardson/node-fs-extra/blob/0220eac966/docs/remove.md)

2022年08月16日09:33:21
