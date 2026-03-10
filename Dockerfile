# 第一階段：編譯階段 (Build Stage)
FROM node:20-alpine AS build-stage

# 設定工作目錄
WORKDIR /app

# 先複製 package.json 相關檔案，利用 Docker 快取機制加速
COPY package*.json ./
RUN npm install

# 複製其餘程式碼並進行打包
COPY . .
RUN npm run build

# 第二階段：生產階段 (Production Stage)
FROM nginx:stable-alpine AS production-stage

# 1. 移除 Nginx 預設的靜態檔案
# 2. 從編譯階段把 dist 目錄下的東西複製到 Nginx 的網頁目錄
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 曝露 80 埠
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]