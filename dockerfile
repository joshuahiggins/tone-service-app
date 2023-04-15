FROM oven/bun
COPY . .
RUN echo 'framework = "next"\r[install.scopes]\rsone-dao = "https://npm.pkg.github.com/:_authToken=$NPM_TOKEN"' > ~/.bunfig.toml
RUN bun install
RUN bun bun
CMD ["bun", "start"]
EXPOSE 8080