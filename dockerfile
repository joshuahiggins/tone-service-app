FROM oven/bun
WORKDIR /app
COPY . .
RUN echo 
RUN echo '[install]' >> /app/bunfig.toml
RUN echo 'registry = "https://$NPM_TOKEN@npm.pkg.github.com/"' >> /app/bunfig.toml
RUN bun i
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080