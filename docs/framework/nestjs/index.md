---
title: NestJS学习资源
---

推荐一些学习NestJS的资源

- [nestjs官网](https://docs.nestjs.com/)



## 文档

1. [Building a REST API with NestJS and Prisma - @prisma](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)
   - 如何设置postgresql + docker
   - 如何配置Swagger
   - 如何操作Prisma + CURD操作
   - 使用示意图解释 NestJS `pipes` 的作用，并介绍如何使用 `ValidationPipe` + `ParseIntPipe` 对请求参数进行验证和转换 😎
   - 介绍了如何使用NestJS `filters` 进行异常处理 + 自定义Filters
2. [tomray blog](https://www.tomray.dev/)
   - 关于redis + nestjs
   - logger + nestjs
   - Prisma + nestjs
   - 如何对nestjs项目docker化

## 视频

1. [NestJS + React + Monorepo - Marius Espejo@youtube](https://www.youtube.com/watch?v=nY0R7pslbCI)
   - 如何使用 [turborepo](https://turborepo.org/docs/getting-started) + `npm | pnpm` 搭建monorepo
   - 前端和后端构建后，如何使用 [@nestjs/serve-static](https://docs.nestjs.com/recipes/serve-static) 指向前端构建产物
   - 前端vite工程如何使用 [server#proxy](https://cn.vitejs.dev/config/server-options.html#server-proxy) 代理到后端接口
   - NestJS如何使用 [app.setGlobalPrefix('api')](https://docs.nestjs.com/faq/global-prefix#global-prefix) 给所有接口添加前缀
   - 另外可以关注 [mariusespejo](https://www.youtube.com/@mariusespejo)，有很多关于NestJS的视频🌟
2. [mguay - @youtube](https://www.youtube.com/@mguay)
   - Nestjs比较进阶的一些内容
   - 缓存，定时任务，微服务
   - NestJS + Prometheus + Grafana监控
   - NestJS + Kafkajs + k8s



createdAt: 2023年03月07日10:11:16

