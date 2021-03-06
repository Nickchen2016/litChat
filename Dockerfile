FROM node:latest as node

WORKDIR /usr/src/mylitchat

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
