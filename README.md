# nuxt
nuxt 食用指南

## 手动初始化
```bash
# 生成 package.json
npm init -y
# 安装 nuxt
npm i nuxt --save

# 配置常用命令
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "generate": "nuxt generate",
  "start": "nuxt start"
}

# 配置运行端口
"config": {
  "nuxt": {
    "host": "127.0.0.1",
    "port": "8080"
  }
}
```

## 开发模式
```bash
npm run dev
```

## 构建 & 部署
```bash
# 构建
npm run build

# 生产环境需要 .nuxt/dist package.json nuxt.config.js 及服务器中间件相关文件（example 中使用集成的 express 服务器）
# https://stackoverflow.com/questions/67111986/nuxt-server-middleware-not-working-on-production
# https://github.com/nuxt/nuxt.js/issues/9158
mkdir -p release/.nuxt
cp -r example/.nuxt/dist release/.nuxt
cp example/package.json release
cp example/nuxt.config.js release
cd release
npm i --production # 生产环境安装依赖（需要包含服务器中间件相关依赖）
npm run start # 启动
```
