FROM node:18.9.0


WORKDIR /src

COPY . .

RUN npm ci


EXPOSE 3000


CMD ["npm", "start"]