FROM oven/bun
WORKDIR /app
COPY . .
RUN echo '[install]' >> ~/.bunfig.toml
RUN echo 'registry = "//npm.pkg.github.com/:_authToken=$NPM_TOKEN"' >> ~/.bunfig.toml
RUN bun i
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080