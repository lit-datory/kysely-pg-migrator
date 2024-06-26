FROM node:20-alpine
WORKDIR /app
EXPOSE 3000

RUN npm install -g npm@latest
RUN apk add --no-cache postgresql-client

CMD ["npm", "start"]
