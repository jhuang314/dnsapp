FROM node:23-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json .

RUN npm install --verbose

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm run build

FROM nginx:1.26.2-alpine3.20

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /var/www/html/

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]
