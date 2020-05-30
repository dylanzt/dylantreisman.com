FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:lts-alpine AS release
WORKDIR /app
COPY --from=build app/package*.json ./
RUN npm ci --only=production
COPY --from=build app/dist ./dist
COPY --from=build app/server.js ./
EXPOSE 5000
USER node
CMD ["node", "server.js"]
