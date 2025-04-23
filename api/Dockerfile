FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Copy the .env file from the api directory
COPY .env ./.env

EXPOSE 5000

CMD ["npm", "run", "dev"]