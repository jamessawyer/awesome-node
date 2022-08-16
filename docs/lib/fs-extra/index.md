本文档是关于 [fs-extra@v10.1.0](https://github.com/jprichardson/node-fs-extra) 版本。

比如：下面别名

- `emptyDir` -> `emptydir` 忽略大小写的别名
- `ensureFile` -> `createFile` 语义上的别名
- `ensureDir` -> `mkdirs | mkdirp` 将之前常用的名字替换为fs-extra规范的名字
- `ensureLink` -> `createLink`
- `ensureSymlink` -> `createSymlink`
- `readJson` -> `readJSON`
- `writeJson` -> `writeJSON`



相似功能：

- `outputFile` & `writeFile`: `output` 版本更加的安全，会在文件不存在的情况下，创建该文件
- `outputJson` & `writeJson`: `output` 版本更加的安全，会在文件不存在的情况下，创建该文件



同步版本和异步版本：

- 同步版本一般就是在异步版本名字后添加 `Sync` 后缀。
- 因为同步版本比较简单，本文档并没有列举出同步版本的文档，具体可以参考GitHub文档

下面对异步和同步的对应关系进行列举：



| 异步版本                         | 同步版本          | 作用                                                         |
| -------------------------------- | ----------------- | ------------------------------------------------------------ |
| [copy](./copy)                   | copySync          | 拷贝文件或目录                                               |
| [emptyDir](./emptyDir)           | emptyDirSync      | 清空目录                                                     |
| [ensureFile](./ensureFile)       | ensureFileSync    | 确保文件存在，不存在创建文件，存在则不做任何事               |
| [ensureDir](./ensureDir)         | ensureDirSync     | 确保文件夹存在，不存在则创建，别名 `mkdirs | mkdirp`         |
| [ensureLink](./ensureLink)       | ensureLinkSync    | 确保链接存在                                                 |
| [ensureSymlink](./ensureSymlink) | ensureSymlinkSync | 确保符号链接存在                                             |
| [move](./move)                   | moveSync          | 移动文件或文件夹                                             |
| [outputFile](./outputFile)       | outputFileSync    | 写入文件，类似 `writeFile`，它在文件不存在时创建文件         |
| [pathExists](./pathExists)       | pathExistsSync    | 测试给定路径是否存在                                         |
| [readJson](./readJson)           | readJsonSync      | 读取JSON文件，解析为对象                                     |
| [remove](./remove)               | removeSync        | 移除文件或文件夹，路径不存在不做任何事                       |
| [outputJson](./outputJson)       | outputJsonSync    | 将对象写入到JSON文件中，类似 `writeJson`，json文件不存在时创建 |
| [writeJson](./writeJson)         | writeJsonSync     | 将对象写入到JSON文件中，注意和上面 `outputJson` 区别         |



2022年08月16日10:47:41
