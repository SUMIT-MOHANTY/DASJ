FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY src ./src
COPY vite.config.ts tsconfig.json ./
EXPOSE 3000
CMD ["npm", "run", "dev"]
