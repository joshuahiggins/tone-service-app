FROM oven/bun
WORKDIR /app
COPY . .
RUN apt update
RUN apt install git -y
RUN printf 'framework = next\n[install.scopes]\nsone-dao = { token = "$NPM_TOKEN", url = "https://npm.pkg.github.com" }' >> bunfig.toml
RUN bun install
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080