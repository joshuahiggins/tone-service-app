FROM node:18-bullseye
WORKDIR /app
COPY . .
ARG TOKEN
RUN echo "[install.scopes]" >> bunfig.toml
RUN echo "@sone-dao = 'https://sone-dao@npm.pkg.github.com/:_authToken=${TOKEN}'" >> bunfig.toml
RUN npm install -g bun
RUN bun i
RUN bun bun
RUN bun run build
CMD ["bun", "start"]
EXPOSE 8080