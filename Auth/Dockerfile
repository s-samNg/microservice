FROM node:18 

WORKDIR /auth

COPY package*.json ./ 

RUN npm install 

COPY .  .



CMD ["npm", "run", "dev"]