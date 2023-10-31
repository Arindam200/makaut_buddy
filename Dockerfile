FROM node:18-alpine

RUN mkdir /makaut-docker

WORKDIR /makaut-docker

COPY package.json ./

COPY public/ public/

COPY src/ src/

RUN yarn install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

