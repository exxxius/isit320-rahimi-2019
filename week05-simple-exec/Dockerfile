FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY qux/package.json .
RUN npm install
COPY qux .
RUN mkdir /root/.ssh
RUN chmod 700 /root/.ssh
RUN ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN ssh-agent bash -c 'ssh-add isit320-Fall-2019; git clone git@github.com:exxxius/isit320-rahimi-2019.git'
# RUN alias ll='ls -laF'
# COPY GitIgnoreTester patterns.txt isit320-calvert-2019/
EXPOSE 30027
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]