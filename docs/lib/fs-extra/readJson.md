---
title: readJson async
---

## 接口定义



::: tip 作用

读取JSON文件，然后将其解析为对象

:::



📔：
```js
readJson(file[, options][, callback])

// 别名
readJSON(file[, options][, callback])
```

参数：

- `file <String>`
- `options <Object>` 
- `callback <Function>`
  - `err <Error>`
  - `obj <Object>`



## 示例

```js {3-4,7,10,15,18}
const fs = require('fs-extra')

// 1️⃣ 使用回调
fs.readJson('./package.json', (err, packageObj) => {
  if (err) console.log(err)
  
  console.log(packageObj.version) // 0.1.3
})

// 2️⃣ 使用Promise
fs.readJson('./package.json')
  .then(packageObj => console.log(packageObj.version))
  .catch(err => console.error(err))

// 3️⃣ 使用async/await
aysnc function example() {
  try {
    const packageObj = await fs.readJson('./package.json')
    console.log(packageObj.version) // 0.1.3
  } catch (err) {
    console.error(err)
  }
}
example()
```

`readJson()` 可以接收一个 `throws` 配置项，设置为 `false` 时，JSON文件无效也不抛出错误：

```js {3-5,7,9,14-15,19}
const fs = require('fs-extra')

const file = '/tmp/some-invalid.json'
const data = '{not valid JSON'
fs.writeFile(file, data) // 写入不合法的JSON数据

fs.readJson(file, { throws: false }, (err, obj) => {
  if (err) console.error(err)
  console.log(obj) // null 😎
})

// 2️⃣ 使用Promise
fs.readJson(file, { throws: false })
  .then(obj => console.log(obj)) // null
  .catch(err => console.error(err)) // 不会被调用 😎

// 3️⃣ 使用async/await
aysnc function example(f) {
  const obj = await fs.readJson(f, { throws: false })
  console.log(obj) // null
}
example(file)
```





- [fs.readJson - docs](https://github.com/jprichardson/node-fs-extra/blob/0220eac966/docs/readJson.md)

2022年08月15日20:29:36
