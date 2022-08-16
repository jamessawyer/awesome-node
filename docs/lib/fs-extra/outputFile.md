---
title: outputFile async
---

## 接口定义



::: tip 作用

和 `writeFile` 几乎差不多，除了如果父目录不存在时，它会创建😎。

- `file` 必须是一个文件路径（不允许buffer或文件描述符）

:::



📔：
```js
outputFile(file, data[, options][, callback])
```

参数：

- `file <String>`
- `data <String> | <Buffer> | <Uint8Array>` 
- `options <Object> | <String>` 和 [fs.writeFile()](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)  配置项相同
  
- `callback <Function>`
  - `err <Error>`



## 示例

```js {3,9,15,25,29}
const fs = require('fs-extra')

const file = '/tmp/this/path/does/not/exist/file.txt'

// 1️⃣ 使用回调
fs.outputFile(file, 'hello!', err => {
  console.log(err) // null
  
  fs.readFile(file, 'utf8', (err, data) { // 再读取写入的文件内容
    if (err) console.error(err)
    console.log(data) // 'hello!'
  })
})

// 2️⃣ 使用Promise
fs.outputFile(file, 'hello!')
  .then(() => fs.readFile(file, 'utf8'))
  .then((data) => {
    console.log(data) // 'hello!'
  })
  .catch(err => {
    console.error(err)
  })

// 3️⃣ 使用async/await
aysnc function example(f) {
  try {
    await fs.outputFile(f, 'hello!')
    const data = await fs.readFile(f, 'utf8')
    console.log(data) // 'hello!'
  } catah(err) {
    console.error(err)
  }
}
example(file)
```



- [outputFile - docs](https://github.com/jprichardson/node-fs-extra/blob/0220eac966/docs/outputFile.md)

2022年08月15日19:56:02
