FROM node:18

WORKDIR /app
COPY package.json .
RUN npm i -g serve
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "start" ]

