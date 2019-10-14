FROM node:latest
RUN mkdir -p /usr/src/system-environment
WORKDIR /usr/src/system-environment
COPY package.json /usr/src/system-environment/
RUN npm install
COPY . /usr/src/system-environment
EXPOSE 30028
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]