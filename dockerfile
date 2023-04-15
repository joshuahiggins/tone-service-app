FROM oven/bun
WORKDIR /app
COPY . .
RUN apt update
RUN apt install git -y
RUN echo 'framework = "next"\r[install.scopes]\rsone-dao = "https://npm.pkg.github.com/"' > bunfig.toml
RUN git config --global url.”https://$NPM_TOKEN:@github.com/".insteadOf “https://github.com/"
RUN bun install
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080