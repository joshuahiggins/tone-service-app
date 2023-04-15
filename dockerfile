FROM oven/bun
WORKDIR /app
COPY . .
RUN echo 'framework = "next"\r[install.scopes]\rsone-dao = {url = "https://npm.pkg.github.com/" token="$NPM_TOKEN"}' > bunfig.toml
RUN bun install
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080