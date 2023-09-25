# Build Stage
FROM node:14-alpine AS build

WORKDIR /react-app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM node:14-alpine

WORKDIR /react-app


COPY --from=build /react-app .

EXPOSE 3000

CMD ["npm", "start"]
