FROM node:20-slim AS builder

WORKDIR /app

COPY ./package.json ./
RUN npm i

COPY . .
RUN npm run build

FROM nginx:stable-alpine

EXPOSE 5173

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
