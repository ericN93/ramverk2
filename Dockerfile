FROM node:9.0.0

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

EXPOSE 3000

FROM node:8.9.0

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

EXPOSE 3000

FROM node:6.11.5

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install
