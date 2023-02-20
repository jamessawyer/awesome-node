import{_ as s,c as a,o as n,b as l}from"./app.1032310a.js";const C=JSON.parse('{"title":"FS in Node","description":"","frontmatter":{"title":"FS in Node"},"headers":[{"level":2,"title":"1️⃣ ⭐ fs APIs的概念，模式和规范","slug":"_1️⃣-⭐-fs-apis的概念-模式和规范","link":"#_1️⃣-⭐-fs-apis的概念-模式和规范","children":[{"level":3,"title":"1.1 函数不同的风格","slug":"_1-1-函数不同的风格","link":"#_1-1-函数不同的风格","children":[]},{"level":3,"title":"1.2 ⭐ 访问文件的方式","slug":"_1-2-⭐-访问文件的方式","link":"#_1-2-⭐-访问文件的方式","children":[]},{"level":3,"title":"1.3 ⭐ 函数名前缀","slug":"_1-3-⭐-函数名前缀","link":"#_1-3-⭐-函数名前缀","children":[]},{"level":3,"title":"1.4 重要的类","slug":"_1-4-重要的类","link":"#_1-4-重要的类","children":[]}]},{"level":2,"title":"2️⃣ 读和写文件","slug":"_2️⃣-读和写文件","link":"#_2️⃣-读和写文件","children":[{"level":3,"title":"2.1 同步读文件为单一字符串（可选：拆分为行）","slug":"_2-1-同步读文件为单一字符串-可选-拆分为行","link":"#_2-1-同步读文件为单一字符串-可选-拆分为行","children":[]},{"level":3,"title":"2.2 ⭐ 通过流读取文件，一行接一行","slug":"_2-2-⭐-通过流读取文件-一行接一行","link":"#_2-2-⭐-通过流读取文件-一行接一行","children":[]},{"level":3,"title":"2.3 单一字符串同步写入文件","slug":"_2-3-单一字符串同步写入文件","link":"#_2-3-单一字符串同步写入文件","children":[]},{"level":3,"title":"2.4 追加字符串到文件中（同步的）","slug":"_2-4-追加字符串到文件中-同步的","link":"#_2-4-追加字符串到文件中-同步的","children":[]},{"level":3,"title":"2.5 使用流写入多个字符串到文件中","slug":"_2-5-使用流写入多个字符串到文件中","link":"#_2-5-使用流写入多个字符串到文件中","children":[]},{"level":3,"title":"2.6 通过流追加多个字符串到文件中（异步的）","slug":"_2-6-通过流追加多个字符串到文件中-异步的","link":"#_2-6-通过流追加多个字符串到文件中-异步的","children":[]}]},{"level":2,"title":"3️⃣ 跨平台处理行分隔符","slug":"_3️⃣-跨平台处理行分隔符","link":"#_3️⃣-跨平台处理行分隔符","children":[{"level":3,"title":"3.1 读取行分隔符","slug":"_3-1-读取行分隔符","link":"#_3-1-读取行分隔符","children":[]},{"level":3,"title":"3.2 写行分割符","slug":"_3-2-写行分割符","link":"#_3-2-写行分割符","children":[]}]},{"level":2,"title":"4️⃣ ⭐ 遍历和创建目录","slug":"_4️⃣-⭐-遍历和创建目录","link":"#_4️⃣-⭐-遍历和创建目录","children":[{"level":3,"title":"4.1 遍历一个目录","slug":"_4-1-遍历一个目录","link":"#_4-1-遍历一个目录","children":[]},{"level":3,"title":"4.2 创建目录（mkdir, mkdir -p）","slug":"_4-2-创建目录-mkdir-mkdir-p","link":"#_4-2-创建目录-mkdir-mkdir-p","children":[]},{"level":3,"title":"4.3 确保父目录存在","slug":"_4-3-确保父目录存在","link":"#_4-3-确保父目录存在","children":[]},{"level":3,"title":"4.4 创建临时目录","slug":"_4-4-创建临时目录","link":"#_4-4-创建临时目录","children":[]}]},{"level":2,"title":"5️⃣ 拷贝，重命名，移动文件或者目录","slug":"_5️⃣-拷贝-重命名-移动文件或者目录","link":"#_5️⃣-拷贝-重命名-移动文件或者目录","children":[{"level":3,"title":"5.1 拷贝文件或目录","slug":"_5-1-拷贝文件或目录","link":"#_5-1-拷贝文件或目录","children":[]},{"level":3,"title":"5.2 重命名或移动文件或文件夹","slug":"_5-2-重命名或移动文件或文件夹","link":"#_5-2-重命名或移动文件或文件夹","children":[]}]},{"level":2,"title":"6️⃣ 移除文件或目录","slug":"_6️⃣-移除文件或目录","link":"#_6️⃣-移除文件或目录","children":[{"level":3,"title":"6.1 移除文件和任意目录（shell: rm, rm -r）","slug":"_6-1-移除文件和任意目录-shell-rm-rm-r","link":"#_6-1-移除文件和任意目录-shell-rm-rm-r","children":[]},{"level":3,"title":"6.2 移除空目录（shell: rmdir）","slug":"_6-2-移除空目录-shell-rmdir","link":"#_6-2-移除空目录-shell-rmdir","children":[]},{"level":3,"title":"6.3 清空目录","slug":"_6-3-清空目录","link":"#_6-3-清空目录","children":[]},{"level":3,"title":"6.4 trash库","slug":"_6-4-trash库","link":"#_6-4-trash库","children":[]}]},{"level":2,"title":"7️⃣ 读和改变文件系统条目","slug":"_7️⃣-读和改变文件系统条目","link":"#_7️⃣-读和改变文件系统条目","children":[{"level":3,"title":"7.1 ⭐ 检测文件或目录是否存在","slug":"_7-1-⭐-检测文件或目录是否存在","link":"#_7-1-⭐-检测文件或目录是否存在","children":[]},{"level":3,"title":"7.2 检测文件stats：是否是路径？创建时间？等","slug":"_7-2-检测文件stats-是否是路径-创建时间-等","link":"#_7-2-检测文件stats-是否是路径-创建时间-等","children":[]},{"level":3,"title":"7.3 改变文件特性：权限，拥有者，组，时间戳","slug":"_7-3-改变文件特性-权限-拥有者-组-时间戳","link":"#_7-3-改变文件特性-权限-拥有者-组-时间戳","children":[]}]},{"level":2,"title":"8️⃣ 操作链接（Links）","slug":"_8️⃣-操作链接-links","link":"#_8️⃣-操作链接-links","children":[]},{"level":2,"title":"9️⃣ 进一步阅读","slug":"_9️⃣-进一步阅读","link":"#_9️⃣-进一步阅读","children":[]}],"relativePath":"blog/translate/fs-in-node.md","lastUpdated":1676867557000}'),p={name:"blog/translate/fs-in-node.md"},o=l("",213),e=[o];function t(r,c,y,D,i,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};