FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY qux/package.json .
RUN npm install
COPY qux .
EXPOSE 30027
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]
