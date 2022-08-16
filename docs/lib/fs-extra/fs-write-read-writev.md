---
title: write|read|writev
---

## 关于 `fs.read()` & `fs.write()`

原生 [fs.read()](https://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback)，[fs.write()](https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback) & [fs.writev()](https://nodejs.org/api/fs.html#fs_fs_writev_fd_buffers_position_callback) 这3个方法不同于其它的 `fs` 模块中的方法：`它们的回调函数有3个参数，而不是常规的2个`。

如果你使用回调版本，它们表现常规。`但是，它们的promise版本使用有点不一样😅` 。`fs-extra` 对这些方法进行了Promise化，类似 [util.promisify()](https://nodejs.org/api/util.html#util_util_promisify_original)。



下面是它们promise版本的使用示例：

## fs.read()

```js
// 使用 Promise
fs.read(fd, buffer, offset, length, position)
  .then(results => {
    console.log(results)
    // { bytesRead: 20, buffer: <Buffer 0f 34 5d ...> }
  })

// 使用 async/await
async function example() {
  const { bytesRead, buffer } = await fs.read(
    	fd, 
    	Buffer.alloc(length), 
    	offset, 
    	length, 
    	position
  )
}
```



## fs.write()

```js
// 使用Promise
fs.write(fd, buffer, offset, length, position)
  .then(results => {
    console.log(results)
    // // { bytesWritten: 20, buffer: <Buffer 0f 34 5d ...> }
  })

// 使用 async/await:
async function example () {
  const { bytesWritten, buffer } = await fs.write(
    fd, Buffer.alloc(length), offset, length, position
  )
}
```



## fs.writev()

```js
// 使用 async/await
async function example() {
  const { bytesWritten, buffers } = await fs.writev(fd, buffers, position)
}
```



2022年08月16日10:45:21

