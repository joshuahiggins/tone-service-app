FROM oven/bun
WORKDIR /app
COPY . .
ARG TOKEN
RUN echo "[install]" >> bunfig.toml
RUN echo "registry = 'https://$NPM_TOKEN@npm.pkg.github.com/:_authToken=${TOKEN}'" >> bunfig.toml
RUN bun i --force
RUN bun bun
RUN bun run build
CMD ["bun", "start"]
EXPOSE 8080