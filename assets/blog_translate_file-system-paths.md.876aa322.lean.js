import{_ as s,c as a,o as n,b as l}from"./app.92517a2a.js";const i=JSON.parse(`{"title":"Node Path\u7684\u7528\u6CD5","description":"","frontmatter":{"title":"Node Path\u7684\u7528\u6CD5"},"headers":[{"level":2,"title":"1\uFE0F\u20E3 Path\u76F8\u5173\u7684\u529F\u80FD","slug":"_1\uFE0F\u20E3-path\u76F8\u5173\u7684\u529F\u80FD","link":"#_1\uFE0F\u20E3-path\u76F8\u5173\u7684\u529F\u80FD","children":[{"level":3,"title":"1.1 \u8BBF\u95EE node:path API\u76843\u79CD\u65B9\u5F0F","slug":"_1-1-\u8BBF\u95EE-node-path-api\u76843\u79CD\u65B9\u5F0F","link":"#_1-1-\u8BBF\u95EE-node-path-api\u76843\u79CD\u65B9\u5F0F","children":[]}]},{"level":2,"title":"2\uFE0F\u20E3 Path\u7684\u57FA\u672C\u6982\u5FF5","slug":"_2\uFE0F\u20E3-path\u7684\u57FA\u672C\u6982\u5FF5","link":"#_2\uFE0F\u20E3-path\u7684\u57FA\u672C\u6982\u5FF5","children":[{"level":3,"title":"2.1 Path segments, path separators, path delimiters","slug":"_2-1-path-segments-path-separators-path-delimiters","link":"#_2-1-path-segments-path-separators-path-delimiters","children":[]},{"level":3,"title":"2.2 \u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55(CWD)","slug":"_2-2-\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55-cwd","link":"#_2-2-\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55-cwd","children":[]},{"level":3,"title":"2.3 \u5168\u9650\u5B9A vs \u90E8\u5206\u9650\u5B9A\u8DEF\u5F84\uFF0C\u89E3\u6790\u8DEF\u5F84","slug":"_2-3-\u5168\u9650\u5B9A-vs-\u90E8\u5206\u9650\u5B9A\u8DEF\u5F84\uFF0C\u89E3\u6790\u8DEF\u5F84","link":"#_2-3-\u5168\u9650\u5B9A-vs-\u90E8\u5206\u9650\u5B9A\u8DEF\u5F84\uFF0C\u89E3\u6790\u8DEF\u5F84","children":[]}]},{"level":2,"title":"3\uFE0F\u20E3 \u901A\u8FC7 'node:os' \u83B7\u53D6\u91CD\u8981\u76EE\u5F55\u8DEF\u5F84","slug":"_3\uFE0F\u20E3-\u901A\u8FC7-node-os-\u83B7\u53D6\u91CD\u8981\u76EE\u5F55\u8DEF\u5F84","link":"#_3\uFE0F\u20E3-\u901A\u8FC7-node-os-\u83B7\u53D6\u91CD\u8981\u76EE\u5F55\u8DEF\u5F84","children":[]},{"level":2,"title":"4\uFE0F\u20E3 \u2B50 \u62FC\u63A5\u8DEF\u5F84","slug":"_4\uFE0F\u20E3-\u2B50-\u62FC\u63A5\u8DEF\u5F84","link":"#_4\uFE0F\u20E3-\u2B50-\u62FC\u63A5\u8DEF\u5F84","children":[{"level":3,"title":"4.1 path.resolve()\uFF1A\u62FC\u63A5\u5E76\u521B\u5EFA\u5168\u9650\u5B9A\u8DEF\u5F84","slug":"_4-1-path-resolve-\uFF1A\u62FC\u63A5\u5E76\u521B\u5EFA\u5168\u9650\u5B9A\u8DEF\u5F84","link":"#_4-1-path-resolve-\uFF1A\u62FC\u63A5\u5E76\u521B\u5EFA\u5168\u9650\u5B9A\u8DEF\u5F84","children":[]},{"level":3,"title":"4.2 path.join()\uFF1A\u62FC\u63A5\u8DEF\u5F84\uFF0C\u540C\u65F6\u4FDD\u7559\u76F8\u5BF9\u8DEF\u5F84","slug":"_4-2-path-join-\uFF1A\u62FC\u63A5\u8DEF\u5F84\uFF0C\u540C\u65F6\u4FDD\u7559\u76F8\u5BF9\u8DEF\u5F84","link":"#_4-2-path-join-\uFF1A\u62FC\u63A5\u8DEF\u5F84\uFF0C\u540C\u65F6\u4FDD\u7559\u76F8\u5BF9\u8DEF\u5F84","children":[]}]},{"level":2,"title":"5\uFE0F\u20E3 \u786E\u4FDD\u8DEF\u5F84\u662F\u6807\u51C6\u5316\u7684\u3001\u5B8C\u5168\u9650\u5B9A\u7684\u6216\u76F8\u5BF9\u7684","slug":"_5\uFE0F\u20E3-\u786E\u4FDD\u8DEF\u5F84\u662F\u6807\u51C6\u5316\u7684\u3001\u5B8C\u5168\u9650\u5B9A\u7684\u6216\u76F8\u5BF9\u7684","link":"#_5\uFE0F\u20E3-\u786E\u4FDD\u8DEF\u5F84\u662F\u6807\u51C6\u5316\u7684\u3001\u5B8C\u5168\u9650\u5B9A\u7684\u6216\u76F8\u5BF9\u7684","children":[{"level":3,"title":"5.1 path.normalize()\uFF1A\u786E\u4FDD\u8DEF\u5F84\u6807\u51C6\u5316","slug":"_5-1-path-normalize-\uFF1A\u786E\u4FDD\u8DEF\u5F84\u6807\u51C6\u5316","link":"#_5-1-path-normalize-\uFF1A\u786E\u4FDD\u8DEF\u5F84\u6807\u51C6\u5316","children":[]},{"level":3,"title":"5.2 path.resolve()\uFF08\u4E00\u4E2A\u53C2\u6570\uFF09\uFF1A\u786E\u4FDD\u8DEF\u5F84\u6807\u51C6\u5316\u548C\u5B8C\u5168\u9650\u5B9A","slug":"_5-2-path-resolve-\uFF08\u4E00\u4E2A\u53C2\u6570\uFF09\uFF1A\u786E\u4FDD\u8DEF\u5F84\u6807\u51C6\u5316\u548C\u5B8C\u5168\u9650\u5B9A","link":"#_5-2-path-resolve-\uFF08\u4E00\u4E2A\u53C2\u6570\uFF09\uFF1A\u786E\u4FDD\u8DEF\u5F84\u6807\u51C6\u5316\u548C\u5B8C\u5168\u9650\u5B9A","children":[]},{"level":3,"title":"5.3 \u2B50 path.relative()\uFF1A\u521B\u5EFA\u76F8\u5BF9\u8DEF\u5F84","slug":"_5-3-\u2B50-path-relative-\uFF1A\u521B\u5EFA\u76F8\u5BF9\u8DEF\u5F84","link":"#_5-3-\u2B50-path-relative-\uFF1A\u521B\u5EFA\u76F8\u5BF9\u8DEF\u5F84","children":[]}]},{"level":2,"title":"6\uFE0F\u20E3 \u2B50 \u89E3\u6790\u8DEF\u5F84\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u5404\u4E2A\u90E8\u5206\uFF08\u6587\u4EF6\u540D\u6269\u5C55\u7B49\uFF09","slug":"_6\uFE0F\u20E3-\u2B50-\u89E3\u6790\u8DEF\u5F84\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u5404\u4E2A\u90E8\u5206\uFF08\u6587\u4EF6\u540D\u6269\u5C55\u7B49\uFF09","link":"#_6\uFE0F\u20E3-\u2B50-\u89E3\u6790\u8DEF\u5F84\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u5404\u4E2A\u90E8\u5206\uFF08\u6587\u4EF6\u540D\u6269\u5C55\u7B49\uFF09","children":[{"level":3,"title":"6.1 path.parse(): \u521B\u5EFA\u5305\u542Bpath\u5404\u90E8\u5206\u7684\u5BF9\u8C61","slug":"_6-1-path-parse-\u521B\u5EFA\u5305\u542Bpath\u5404\u90E8\u5206\u7684\u5BF9\u8C61","link":"#_6-1-path-parse-\u521B\u5EFA\u5305\u542Bpath\u5404\u90E8\u5206\u7684\u5BF9\u8C61","children":[]},{"level":3,"title":"6.2 path.basename(): \u63D0\u53D6\u8DEF\u5F84\u7684base\u90E8\u5206","slug":"_6-2-path-basename-\u63D0\u53D6\u8DEF\u5F84\u7684base\u90E8\u5206","link":"#_6-2-path-basename-\u63D0\u53D6\u8DEF\u5F84\u7684base\u90E8\u5206","children":[]},{"level":3,"title":"6.3 path.dirname()\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u7236\u76EE\u5F55","slug":"_6-3-path-dirname-\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u7236\u76EE\u5F55","link":"#_6-3-path-dirname-\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u7236\u76EE\u5F55","children":[]},{"level":3,"title":"6.4 path.extname()\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u6269\u5C55","slug":"_6-4-path-extname-\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u6269\u5C55","link":"#_6-4-path-extname-\uFF1A\u63D0\u53D6\u8DEF\u5F84\u7684\u6269\u5C55","children":[]}]},{"level":2,"title":"7\uFE0F\u20E3 path.isAbsolute() \uFF1A\u662F\u5426\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF1F","slug":"_7\uFE0F\u20E3-path-isabsolute-\uFF1A\u662F\u5426\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF1F","link":"#_7\uFE0F\u20E3-path-isabsolute-\uFF1A\u662F\u5426\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF1F","children":[]},{"level":2,"title":"8\uFE0F\u20E3 path.format()\uFF1A\u4F7F\u7528path parts\u521B\u5EFA\u8DEF\u5F84","slug":"_8\uFE0F\u20E3-path-format-\uFF1A\u4F7F\u7528path-parts\u521B\u5EFA\u8DEF\u5F84","link":"#_8\uFE0F\u20E3-path-format-\uFF1A\u4F7F\u7528path-parts\u521B\u5EFA\u8DEF\u5F84","children":[{"level":3,"title":"8.1 \u4F8B\u5B50\uFF1A\u6539\u53D8\u6587\u4EF6\u6269\u5C55","slug":"_8-1-\u4F8B\u5B50\uFF1A\u6539\u53D8\u6587\u4EF6\u6269\u5C55","link":"#_8-1-\u4F8B\u5B50\uFF1A\u6539\u53D8\u6587\u4EF6\u6269\u5C55","children":[]}]},{"level":2,"title":"9\uFE0F\u20E3 \u5728\u4E0D\u540C\u5E73\u53F0\u4F7F\u7528\u76F8\u540C\u8DEF\u5F84","slug":"_9\uFE0F\u20E3-\u5728\u4E0D\u540C\u5E73\u53F0\u4F7F\u7528\u76F8\u540C\u8DEF\u5F84","link":"#_9\uFE0F\u20E3-\u5728\u4E0D\u540C\u5E73\u53F0\u4F7F\u7528\u76F8\u540C\u8DEF\u5F84","children":[{"level":3,"title":"9.1 \u76F8\u5BF9\u5E73\u53F0\u72EC\u7ACB\u7684\u8DEF\u5F84","slug":"_9-1-\u76F8\u5BF9\u5E73\u53F0\u72EC\u7ACB\u7684\u8DEF\u5F84","link":"#_9-1-\u76F8\u5BF9\u5E73\u53F0\u72EC\u7ACB\u7684\u8DEF\u5F84","children":[]}]},{"level":2,"title":"\u{1F51F} \u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u5339\u914D\u8DEF\u5F84\uFF0C\u901A\u8FC7globs","slug":"\u{1F51F}-\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u5339\u914D\u8DEF\u5F84\uFF0C\u901A\u8FC7globs","link":"#\u{1F51F}-\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u5339\u914D\u8DEF\u5F84\uFF0C\u901A\u8FC7globs","children":[{"level":3,"title":"10.1 minimatch API","slug":"_10-1-minimatch-api","link":"#_10-1-minimatch-api","children":[]},{"level":3,"title":"10.2 glob\u8868\u8FBE\u5F0F\u8BED\u6CD5","slug":"_10-2-glob\u8868\u8FBE\u5F0F\u8BED\u6CD5","link":"#_10-2-glob\u8868\u8FBE\u5F0F\u8BED\u6CD5","children":[]}]},{"level":2,"title":"1\uFE0F\u20E31\uFE0F\u20E3 \u4F7F\u7528 file:URLs \u5F15\u7528\u6587\u4EF6","slug":"_1\uFE0F\u20E31\uFE0F\u20E3-\u4F7F\u7528-file-urls-\u5F15\u7528\u6587\u4EF6","link":"#_1\uFE0F\u20E31\uFE0F\u20E3-\u4F7F\u7528-file-urls-\u5F15\u7528\u6587\u4EF6","children":[{"level":3,"title":"11.1 URL\u7C7B","slug":"_11-1-url\u7C7B","link":"#_11-1-url\u7C7B","children":[]},{"level":3,"title":"11.2 \u2B50 URLs\u548C\u6587\u4EF6\u8DEF\u5F84\u95F4\u8F6C\u6362","slug":"_11-2-\u2B50-urls\u548C\u6587\u4EF6\u8DEF\u5F84\u95F4\u8F6C\u6362","link":"#_11-2-\u2B50-urls\u548C\u6587\u4EF6\u8DEF\u5F84\u95F4\u8F6C\u6362","children":[]},{"level":3,"title":"11.3 \u2B50 URLs\u4F7F\u7528\u573A\u666F\uFF1A\u76F8\u5BF9\u4E8E\u5F53\u524D\u6A21\u5757\u8BBF\u95EE\u6587\u4EF6","slug":"_11-3-\u2B50-urls\u4F7F\u7528\u573A\u666F\uFF1A\u76F8\u5BF9\u4E8E\u5F53\u524D\u6A21\u5757\u8BBF\u95EE\u6587\u4EF6","link":"#_11-3-\u2B50-urls\u4F7F\u7528\u573A\u666F\uFF1A\u76F8\u5BF9\u4E8E\u5F53\u524D\u6A21\u5757\u8BBF\u95EE\u6587\u4EF6","children":[]},{"level":3,"title":"11.4 URLs\u4F7F\u7528\u573A\u666F\uFF1A\u68C0\u6D4B\u5F53\u524D\u6A21\u5757\u662F\u5426\u4EE5\u811A\u672C\u5F62\u5F0F\u8FD0\u884C","slug":"_11-4-urls\u4F7F\u7528\u573A\u666F\uFF1A\u68C0\u6D4B\u5F53\u524D\u6A21\u5757\u662F\u5426\u4EE5\u811A\u672C\u5F62\u5F0F\u8FD0\u884C","link":"#_11-4-urls\u4F7F\u7528\u573A\u666F\uFF1A\u68C0\u6D4B\u5F53\u524D\u6A21\u5757\u662F\u5426\u4EE5\u811A\u672C\u5F62\u5F0F\u8FD0\u884C","children":[]},{"level":3,"title":"11.5 Paths vs file:URLs","slug":"_11-5-paths-vs-file-urls","link":"#_11-5-paths-vs-file-urls","children":[]}]}],"relativePath":"blog/translate/file-system-paths.md","lastUpdated":1664078313000}`),p={name:"blog/translate/file-system-paths.md"},o=l("",313),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
