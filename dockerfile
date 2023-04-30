FROM node:18-bullseye
WORKDIR /app
COPY . .
RUN npm install -g bun
RUN bun i
RUN bun bun
RUN bun run build
CMD ["bun", "start"]
EXPOSE 8080