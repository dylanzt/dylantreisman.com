FROM node:carbon AS build
WORKDIR /app
COPY . ./
RUN npm ci
RUN npm run build

FROM node:alpine AS release
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
RUN npm install -g serve
WORKDIR /app
COPY --from=build app/package*.json ./
COPY --from=build app/dist ./dist
EXPOSE 5000
USER node
CMD ["serve", "-s", "dist"]
