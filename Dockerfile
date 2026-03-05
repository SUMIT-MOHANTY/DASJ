# Multi‑stage Dockerfile for the full stack (frontend + backend)
FROM node:18-alpine AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

FROM node:18-alpine AS runtime
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --production
COPY backend/ .
COPY --from=build /app/frontend/dist ./frontend/dist
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "src/index.js"]
