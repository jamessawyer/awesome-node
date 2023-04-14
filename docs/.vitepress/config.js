import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

const nav = [
  { text: '📄Node文档', activeMatch: `^/v18doc/`, link: '/v18doc/File-System' },
  { text: '📦工程化', link: '/manager/basic' },
  { text: '💫核心概念', link: '/core/stream/index' },
  { text: '🤔blog', link: '/blog/first' },
  { 
    text: '📚书籍', 
    items: [
      { text: 'Node Design Patterns', link: '/book/patterns/the-node-platform' },
      { text: '深入理解Vite', link: '/book/vite/2' },
      { text: 'Webpack5核心原理', link: '/book/webpack/1' },
      { text: 'Babel插件秘籍', link: '/book/babel/2' },
    ]
  },
  {
    text: '🧑‍🚀框架',
    items: [
      { text: 'NestJS', link: '/framework/nestjs/index' },
      { text: 'Express', link: '/framework/express/index' },
    ]
  },
  {
    text: '🔥常用库',
    items: [
      { text: 'fs-extra', link: '/lib/fs-extra/index' },
      // { text: 'globby', link: '/lib/globby' },
    ]
  },
]

const sidebar_doc = {
  '/v18doc/': [ // Node v18.x 中文文档
    {
      text: 'Node v18.x 中文文档',
      items: [
        { text: 'File System', link: '/v18doc/File-System' },
        { text: 'Path',  link: '/v18doc/Path' },
      ]
    }
  ],
}
const sidebar_blog = {
  '/blog/': [
    {
      text: '资源',
      items: [
        { text: 'Advanced', link: '/blog/resource/advanced' },
      ]
    },
    { 
      text: '🚀 好文翻译',
      collapsible: true,
      items: [
        { text: 'Path & URL的用法', link: '/blog/translate/file-system-paths' },
        { text: 'FS in Node', link: '/blog/translate/fs-in-node' },
        { text: 'Web Streams on Node', link: '/blog/translate/web-streams-on-node' },
      ]
    },
    { 
      text: 'MISC',
      collapsible: true,
      items: [
        { text: 'ESM & CJS模块', link: '/blog/misc/module' },
        { text: 'Express + typescript设置', link: '/blog/misc/ts-and-express' },
      ]
    }
  ],
}
const sidebar_books = {
  '/book/patterns': [ // 设计模式
    { 
      text: 'Node设计模式',
      items: [
        { text: 'the node platform', link: '/book/patterns/the-node-platform' },
        { text: 'callback and events', link: '/book/patterns/callback-and-events' },
      ]
    },
    {
      text: 'Ⅱ.模块系统',
      collapsible: true,
      items: [
        { text: '介绍', link: '/book/patterns/module-system/index' },
        { text: '模块系统的必要性', link: '/book/patterns/module-system/the-need-for-modules' },
        { text: 'JS和Node中的模块系统', link: '/book/patterns/module-system/module-system-in-js-and-node' },
        { text: '模块系统和其模式', link: '/book/patterns/module-system/the-module-system-and-its-patterns' },
        { text: '⚡CommonJS模块', link: '/book/patterns/module-system/commonjs-modules' },
        { text: '🙆‍♀️CommonJS模块常用模式定义', link: '/book/patterns/module-system/module-define-patterns' },
        { text: '🚀ESM', link: '/book/patterns/module-system/esm' },
        { text: '🚀ESM和CJS差异和互操性', link: '/book/patterns/module-system/esm-cjs-interoperability' },
        { text: '总结', link: '/book/patterns/module-system/summary' },
      ]
    },
  ],
  '/book/vite': [
    {
      text: '🔧深入理解Vite',
      items: [
        { text: '1.Vite开篇', link: '/book/vite/1' },
        { text: '2.模块标准', link: '/book/vite/2' },
        { text: '3.快速上手Vite', link: '/book/vite/3' },
        { text: '4.样式方案', link: '/book/vite/4' },
        { text: '7.预构建', link: '/book/vite/7' },
        { text: '8.双引擎架构', link: '/book/vite/8' },
        { text: '9.性能推手: Esbuild', link: '/book/vite/9' },
        { text: '10.Rollup基本用法', link: '/book/vite/10' },
        { text: '11.深入理解Rollup插件机制', link: '/book/vite/11' },
        { text: '12.Vite插件开发', link: '/book/vite/12' },
        { text: '14.代码分割', link: '/book/vite/14' },
        { text: '15.Polyfill和语法降级', link: '/book/vite/15' },
        { text: '16.Vite搭建SSR工程', link: '/book/vite/16' },
        { text: '17.联邦模块以及原理', link: '/book/vite/17' },
        { text: '18.Pure ESM时代', link: '/book/vite/18' },
        { text: '19.系统对Vite项目性能优化', link: '/book/vite/19' },
      ]
    }
  ],
  '/book/webpack': [
    {
      text: 'Webpack5核心原理与实践',
      items: [
        { text: '1.重新认识Webpack', link: '/book/webpack/1' },
        { text: '2.如何理解Webpack配置底层结构逻辑？', link: '/book/webpack/2' },
        { text: '3.配置Babel+TS+ESLint？', link: '/book/webpack/3' },
        { text: '10.深入理解图像加载原理和最佳实践', link: '/book/webpack/10' },
        { text: '11.深入理解webpack核心配置📚', link: '/book/webpack/11' },
        { text: '13.如何使用webpack缓存提升性能⚡', link: '/book/webpack/13' },
        { text: '15.应用性能极致优化技巧⚡', link: '/book/webpack/15' },
        { text: '16.使用SplitChunk提升性能⚡', link: '/book/webpack/16' },
      ]
    }
  ],
  '/book/babel': [
    {
      text: 'Babel插件秘籍',
      items: [
        { text: '1.Babel的介绍', link: '/book/babel/1' },
        { text: '2.Babel的编译流程', link: '/book/babel/2' },
        { text: '3.Babel的AST', link: '/book/babel/3' },
        { text: '4.Babel的API', link: '/book/babel/4' },
        { text: '5.实战：插入函数调用参数', link: '/book/babel/5' },
        { text: '6.JS Parser的历史', link: '/book/babel/6' },
      ]
    }
  ]
}
const sidebar_lib = {
  '/lib/fs-extra': [
    {
      text: 'fs-extra',
      items: [
        { text: 'README', link: '/lib/fs-extra/index' },
        { text: 'copy', link: '/lib/fs-extra/copy' },
        { text: 'emptyDir', link: '/lib/fs-extra/emptyDir' },
        { text: 'ensureFile', link: '/lib/fs-extra/ensureFile' },
        { text: 'ensureDir', link: '/lib/fs-extra/ensureDir' },
        { text: 'ensureLink', link: '/lib/fs-extra/ensureLink' },
        { text: 'ensureSymlink', link: '/lib/fs-extra/ensureSymlink' },
        { text: 'move', link: '/lib/fs-extra/move' },
        { text: 'outputFile', link: '/lib/fs-extra/outputFile' },
        { text: 'pathExists', link: '/lib/fs-extra/pathExists' },
        { text: 'readJson', link: '/lib/fs-extra/readJson' },
        { text: 'remove', link: '/lib/fs-extra/remove' },
        { text: 'outputJson', link: '/lib/fs-extra/outputJson' },
        { text: 'writeJson', link: '/lib/fs-extra/writeJson' },
        { text: 'fs-write-read-writev', link: '/lib/fs-extra/fs-write-read-writev' },
      ]
    }
  ],
}

const sidebar_core = {
  '/core/': [
    {
      text: 'EventEmitter',
      collapsible: true,
      items: [
        { text: '资源', link: '/core/events/index' },
      ]
    },
    {
      text: 'Streams',
      collapsible: true,
      items: [
        { text: '资源', link: '/core/stream/index' },
        { text: '⚡Stream图解', link: '/core/stream/stream-visualization' },
        { text: '⚡Stream实战', link: '/core/stream/stream-in-practice' },
      ]
    },
  ]
}

const sidebar_manager = {
  '/manager/': [
    {
      text: '基础知识',
      items: [
        { text: 'package.json', link: '/manager/basic' },
        { text: 'Vite学习', link: '/manager/vite' },
        { text: 'Webpack学习', link: '/manager/webpack' },
        { text: 'babel生态', link: '/manager/babel' },
      ]
    },
    {
      text: 'Recipe',
      items: [
        { text: 'Node资源', link: '/manager/recipe' },
      ],
    },
  ],
}

const sidebar_frameworks = {
  '/framework/nestjs': [
    {
      text: '学习NestJS',
      items: [
        { text: '资源', link: '/framework/nestjs/index' },
      ]
    }
  ],
  '/framework/express': [
    {
      text: 'Learn ExpressJS',
      items: [
        { text: '资源', link: '/framework/express/index' },
      ]
    }
  ]
}

const sidebar = {
  ...sidebar_doc,
  ...sidebar_manager,
  ...sidebar_core,
  ...sidebar_blog,
  ...sidebar_books,
  ...sidebar_lib,
  ...sidebar_frameworks,
}

export default withPwa(defineConfig({
  title: 'Awesome Node',
  description: 'Node + Vite + Webpack + Babel',
  lastUpdated: true,
  base: '/awesome-node/', // 非常重要这个属性！！！
  
  head:[
    ['link', { rel: 'icon', href: '/awesome-node/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/awesome-node/pwa-192x192.png', sizes: '192x192' }],
    ['meta', {
      name: 'keywords',
      content: 'Node, Vite, Webpack, Babel',
    }],
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    outlineTitle: '目录',
    outline: [2, 3],
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
  },
  pwa: {
    // https://github.com/vite-pwa/vitepress/blob/main/examples/pwa-simple/.vitepress/config.ts
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'logo.svg'],
    manifest: {
      name: 'Awesome Node',
      short_name: 'NodePWA',
      // --vp-c-bg: #1e1e20;
      theme_color: 'var(--vp-c-bg)',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
    },
  }
}))
