# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.20.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --force
RUN npm install -g @angular/cli@20.3.7 --force

COPY . .


RUN ng build --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/ecommerce-app/browser /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
