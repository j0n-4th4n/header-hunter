FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

EXPOSE 3000


# Docker run 
CMD ["yarn", "run", "start"]
