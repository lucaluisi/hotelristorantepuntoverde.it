FROM node:latest

WORKDIR /app

COPY package.json .

RUN corepack enable pnpm
RUN pnpm i

COPY . .

RUN pnpm build

CMD ["pnpm", "start"]