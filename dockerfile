FROM oven/bun
WORKDIR /app
COPY . .
RUN apt update
RUN apt install git -y
RUN printf '[install.scopes]\n@sone-dao = "https://npm.pkg.github.com/:_authToken=$NPM_TOKEN"' >> ~/.bunfig.toml
RUN bun install
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080