###################
# BASE IMAGE
###################
FROM node:16.17.1-alpine3.15 AS base

RUN npm i -g pnpm


###################
# BUILD FOR PRODUCTION
###################
FROM base AS builder

WORKDIR /usr/src/app

COPY --chown=node:node package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

COPY --chown=node:node . .

RUN pnpm build


###################
# PRODUCTION
###################
FROM base AS release

ENV NODE_ENV production

COPY --chown=node:node --from=builder /usr/src/app/public ./public
COPY --chown=node:node --from=builder /usr/src/app/.next ./.next
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/package.json ./package.json
COPY --chown=node:node --from=builder /usr/src/app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["pnpm", "run", "start"]