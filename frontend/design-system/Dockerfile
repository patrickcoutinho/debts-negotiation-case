FROM node:16-alpine as base

WORKDIR /app

RUN apk add --no-cache bash && \
    apk add --no-cache yarn --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community"

COPY . .

EXPOSE 8081

FROM base as prod

RUN yarn && yarn build

CMD ["yarn", "start"]