---
title: typescript & express
---

可以通过下面设置，在express应用中使用TypeScript。

安装依赖：

```bash
pnpm i express
pnpm i -D @types/node @types/express typescript
```

初始化tsconfig.json文件：

```bash
npx tsc --init
```

设置一下 `outDir`:

::: code-group

``` json [tsconfig.json]
{
  "compilerOptions": {
    // 设置tsc生成的js文件的目录
    "outDir": "./dist"
  }
}
```

:::

安装一些额外依赖：

```bash
pnpm i -D rimraf concurrently nodemon
```



配置 `package.json` 中的一些 `scripts`:

```json
{
  "script": {
    // 先移除dist目录 然后再编译
    "build": "rimraf dist && npx tsc",
    // start之前先执行prestart
    "prestart": "pnpm run build",
    "start": "node dist/index.js",
    // serve之前先执行preserve
    "preserve": "pnpm run build",
    // npx tsc -w
    "serve": "concurrently \"npx tsc -w\" \"nodemon dist/index.js\""
  }
}
```

开发：

```bash
pnpm run serve
```

生产：

```
pnpm run start
```

上面方法来自 [How To Use TypeScript With Express & Node - @youtube](https://www.youtube.com/watch?v=qy8PxD3alWw)。但是其实还有2种方式，在开发模式下更加的方便：



## 使用 `tsx` 🎉

```bash
pnpm i -D tsx
```

```json
{
  "script": {
    // 先移除dist目录 然后再编译
    "build": "rimraf dist && npx tsc",
    // start之前先执行prestart
    "prestart": "pnpm run build",
    "start": "node dist/index.js",
    "preserve": "pnpm run build", // [!code --]
    "serve": "concurrently \"npx tsc -w\" \"nodemon dist/index.js\"" // [!code --]
    "serve": "tsx watch ./index.js" // [!code ++]
  }
}
```

- [关于tsx](https://jamessawyer.github.io/awesome-typescript/lib/tsx/)

::: tip

最推崇这种写法🚀🚀

- 性能最好
- 还有一些别的好处，参考上面的tsx文档

:::



## 使用nodemon + ts-node

```json
{
  "script": {
    // 先移除dist目录 然后再编译
    "build": "rimraf dist && npx tsc",
    // start之前先执行prestart
    "prestart": "pnpm run build",
    "start": "node dist/index.js",
    "preserve": "pnpm run build", // [!code --]
    "serve": "concurrently \"npx tsc -w\" \"nodemon dist/index.js\"" // [!code --]
    "serve": "nodemon -x ts-node ./index.js" // [!code ++]
  }
}
```



## 完整项目

项目结构

```bash
.
├── package.json
├── pnpm-lock.yaml
├── routes
│   └── user.ts
├── main.ts
└── tsconfig.json
```

`package.json`

```json {11-13}
{
  "name": "express-and-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "rimraf dist && npx tsc",
    "prestart": "pnpm run build",
    "start": "node dist/main.js",
    "preserve": "pnpm run build",
    "serve": "concurrently \"npx tsc -w\" \"nodemon dist/main.js\" ",
    "serve:tsx": "tsx watch main.ts",
    "serve:nodemon": "nodemon -x ts-node main.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^18.14.2",
    "concurrently": "^7.6.0",
    "nodemon": "^2.0.20",
    "tsx": "^3.12.3",
    "typescript": "^4.9.5"
  }
}
```

::: code-group

``` typescript [main.ts]
import express, { Request, Response } from 'express'
import userRouter from './routes/user'

const app = express()
const PORT = 3434

app.use('/user', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hi 22222')
})

app.listen(PORT, () => {
  console.log('app start listen to ', PORT)
})
```



``` typescript [routes/user.ts]
import { Router, Request, Response } from 'express'

const userRouter = Router()

userRouter.get('/', (req: Request, res: Response) => {
  res.end('User router')
})
userRouter.post('/', (req: Request, res: Response) => {
  res.end('User post')
})

export default userRouter
```

:::

3种方式都包含了，推荐使用 `pnpm run serve:tsx` 进行开发。



2023年03月01日14:49:37

