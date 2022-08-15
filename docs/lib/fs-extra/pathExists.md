---
title: pathExists async
---

## 接口定义



::: tip 作用

测试是否给定路径存在，通过检测文件系统。

- 类似 [fs.exists](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback)，但是有个正常回调函数参数 `(err, exists)`
- 内部实现使用 `fs.access`

:::



📔：
```js
pathExists(file[, callback])
```

参数：

- `file <String>`
- `callback <Function>`
  - `err <Error>`
  - `exists <boolean>`



## 示例

```js {3,5-6,12,16,19}
const fs = require('fs-extra')

const file = '/tmp/this/path/does/not/exist/file.txt'

// 1️⃣ 使用回调
fs.pathExists(file, (err, exists) => {
  console.log(err) // null
  
  console.log(exists) // false
})

// 2️⃣ 使用Promise
fs.pathExists(file)
  .then(exists => console.log(exists)) // false

// 3️⃣ 使用async/await
aysnc function example(f) {
  await fs.pathExists(f)
  console.log(exists) // false
}
example(file)
```



- [pathExists - docs](https://github.com/jprichardson/node-fs-extra/blob/0220eac966/docs/pathExists.md)

2022年08月15日20:08:40
