FROM node:14-alpine
WORKDIR /api
COPY ./package*.json ./
RUN npm install
COPY . .

EXPOSE 2301