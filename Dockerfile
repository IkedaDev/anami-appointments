FROM node:20.16.0 as node-version

FROM  node-version as deps
WORKDIR /app
COPY package*.json ./
RUN npm install 

FROM  node-version as prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production

FROM  node-version as builder 
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build:prod

FROM nginx:1.27-bookworm-perl as prod
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/anami-appointments/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
