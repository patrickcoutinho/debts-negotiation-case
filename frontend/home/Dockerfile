FROM node:16-alpine as base

WORKDIR /app

RUN apk add --no-cache bash && \
    apk add --no-cache yarn --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community"

RUN yarn global add concurrently

COPY . .

EXPOSE 8082

FROM base as prod

RUN yarn && yarn build

CMD ["yarn", "start"]