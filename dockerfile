FROM oven/bun
WORKDIR /app
COPY . .
RUN apt update
RUN apt install git -y
RUN apt install node -y
RUN echo "//npm.pkg.github.com/:_authToken=$NPM_TOKEN" > ~/.npmrc
RUN npm i
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080