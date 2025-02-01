FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

RUN yarn add serve -g

COPY . .

RUN yarn run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]