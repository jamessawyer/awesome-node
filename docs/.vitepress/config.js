const nav = [
  // { text: '📄Node文档', activeMatch: '^/v18doc/', link: '/v18doc/File-System' },
  { text: '📄Node文档', activeMatch: `^/v18doc/`, link: '/v18doc/File-System' },
  { text: 'blog', link: '/blog/first' },
  { 
    text: '📚书籍', 
    items: [
      { text: 'Node Design Patterns', link: '../book/patterns/the-node-platform' },
    ]
  },
  {
    text: '🔥常用库',
    items: [
      { text: 'fs-extra', link: '../lib/fs-extra/index' },
      { text: 'globby', link: '../lib/globby' },
    ]
  },
]

const sidebar_doc = {
  '/v18doc/': [ // Node v18.x 中文文档
    {
      text: 'Node v18.x 中文文档',
      items: [
        {
          text: 'File System',
          link: '/v18doc/File-System',
        },
        {
          text: 'Path',
          link: '/v18doc/Path',
        },
      ]
    }
  ],
}
const sidebar_blog = {
  '/blog/': [
    {
      text: 'blog',
      items: [
        {
          text: '第一篇blog',
          link: '/blog/first',
        }
      ]
    },
    { 
      text: '🚀 好文翻译',
      collapsible: true,
      items: [
        {
          text: 'Path & URL的用法',
          link: '/blog/translate/file-system-paths'
        },
        {
          text: 'FS in Node',
          link: '/blog/translate/fs-in-node'
        },
        {
          text: 'Web Streams on Node',
          link: '/blog/translate/web-streams-on-node'
        },
      ]
    }
  ],
}
const sidebar_books = {
  '/book/patterns': [ // 设计模式
    { 
      text: 'Node设计模式',
      items: [
        {
          text: 'the node platform',
          link: '/book/patterns/the-node-platform',
        },
        
        {
          text: 'callback and events',
          link: '/book/patterns/callback-and-events',
        },
      ]
    },
    {
      text: 'Ⅱ.模块系统',
      collapsible: true,
      items: [
        { text: '介绍', link: '/book/patterns/module-system/index' },
        { text: '模块系统的必要性', link: '/book/patterns/module-system/the-need-for-modules' },
        { text: 'JS和Node中的模块系统', link: '/book/patterns/module-system/module-system-in-js-and-node' },
      ]
    },
  ],
}
const sidebar_lib = {
  '/lib/fs-extra': [
    {
      text: 'fs-extra',
      items: [
        {
          text: 'README',
          link: '/lib/fs-extra/index'
        },
        {
          text: 'copy',
          link: '/lib/fs-extra/copy'
        },
        {
          text: 'emptyDir',
          link: '/lib/fs-extra/emptyDir'
        },
        {
          text: 'ensureFile',
          link: '/lib/fs-extra/ensureFile'
        },
        {
          text: 'ensureDir',
          link: '/lib/fs-extra/ensureDir'
        },
        {
          text: 'ensureLink',
          link: '/lib/fs-extra/ensureLink'
        },
        {
          text: 'ensureSymlink',
          link: '/lib/fs-extra/ensureSymlink'
        },
        {
          text: 'move',
          link: '/lib/fs-extra/move'
        },
        {
          text: 'outputFile',
          link: '/lib/fs-extra/outputFile'
        },
        {
          text: 'pathExists',
          link: '/lib/fs-extra/pathExists'
        },
        {
          text: 'readJson',
          link: '/lib/fs-extra/readJson'
        },
        {
          text: 'remove',
          link: '/lib/fs-extra/remove'
        },
        {
          text: 'outputJson',
          link: '/lib/fs-extra/outputJson'
        },
        {
          text: 'writeJson',
          link: '/lib/fs-extra/writeJson'
        },
        {
          text: 'fs-write-read-writev',
          link: '/lib/fs-extra/fs-write-read-writev'
        },
      ]
    }
  ],
}

const sidebar = {
  ...sidebar_doc,
  ...sidebar_blog,
  ...sidebar_books,
  ...sidebar_lib,
}

export default {
  title: 'Awesome Node',
  description: 'Node相关的一些文档，书籍和资料',
  lastUpdated: true,
  base: '/awesome-node/', // 非常重要这个属性！！！
  
  head:[
    ['link', { rel: 'icon', href: '/awesome-node/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      text: '在GitHub编辑此页',
      pattern: 'https://github.com/jamessawyer/awesome-node/edit/main/docs/:path'
    },
    nav,
    sidebar
  },
  markdown: {
    // lineNumbers: true, // 是否显示行号
    // options for markdown-it-toc-done-right
    toc: { level: [1, 2, 3] },
  }
}
