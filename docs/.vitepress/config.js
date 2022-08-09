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
      { text: 'fs-extra', link: '../lib/fsextra' },
      { text: 'fast-glob', link: '../lib/fastglob' },
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
          text: 'Node Path的用法',
          link: '/blog/translate/file-system-paths'
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
          text: 'the module system',
          link: '/book/patterns/the-module-system',
        },
        {
          text: 'callback and events',
          link: '/book/patterns/callback-and-events',
        },
      ]
    }
  ],
}

const sidebar = {
  ...sidebar_doc,
  ...sidebar_blog,
  ...sidebar_books,
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
    logo: '/react.svg',
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
