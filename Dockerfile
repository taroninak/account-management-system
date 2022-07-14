FROM node:16-alpine
RUN apk add --no-cache python3 g++ make tini

ENTRYPOINT ["/sbin/tini", "--"]

ADD . /app
WORKDIR /app

ENV NODE_ENV production
RUN npm ci --include=dev --also=dev

RUN npm run build

USER node
CMD ["npm", "run", "start:prod"]
