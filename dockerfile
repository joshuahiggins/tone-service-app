FROM oven/bun
WORKDIR /app
COPY . .
RUN apt update
RUN apt install git -y
RUN echo -e "machine github.com\n  login $NPM_TOKEN" > ~/.netrc 
RUN bun install
RUN bun bun
RUN bun next build
CMD ["bun", "start"]
EXPOSE 8080