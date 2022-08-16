---
title: outputJson async
---

## 接口定义



::: tip 作用

将对象写入到JSON文件中。
 - 和 [writeJson](./writeJson) 功能几乎一样，除了当目录不存在时，outputJson会创建该目录
:::



📔：
```js
outputJson(file, object[, options][, callback])

// 别名
outputJSON(file, object[, options][, callback])
```

参数：

- `file <String>`
- `object <Object>`
- `options <Object>`
  - `spaces <Number> | <String>` 用于缩进的空格数量；或用于缩进的字符串（比如，传入 `\t` 表示tab缩进）。[the space argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument)
  - `EOL <String>` 设置EOL（行终止符）字符。默认是 `\n`
  - `replacer` - [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter)
  - 也接受 [fs.writeFile()](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) 配置项

- `callback <Function>`
  - `err <Error>`



## 示例

```js {3-4,7,10,17,22}
const fs = require('fs-extra')

const file = '/tmp/this/path/does/not/exist/file.json'

// 1️⃣ 使用回调
fs.outputJson(file, { name: 'JP' }, err => {
  console.error(err) // null 😎

  fs.readJson(file, (err, data) => {
    if (err) console.error(err)
    console.log(data.name) // 'JP'
  })
})

// 2️⃣ 使用Promise
fs.outputJson(file, { name: 'JP' })
  .then(() => fs.readJson(file))
  .then(data => console.log(data.name)) // 'JP'
  .catch(err => console.error(err))

// 3️⃣ 使用async/await
aysnc function example() {
  try {
    await fs.outputJson(file, { name: 'JP' })
    const data = await fs.readJson(file)
    console.log(data.name) // 'JP'
  } catch (err) {
    console.error(err)
  }
}
example()
```



另外可查看 [writeJson](./writeJson)

- [outputJson](https://github.com/jprichardson/node-fs-extra/blob/0220eac966/docs/outputJson.md)

2022年08月16日09:43:37
