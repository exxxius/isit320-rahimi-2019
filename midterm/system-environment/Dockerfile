FROM node:latest
RUN mkdir -p /usr/src/system-environment
WORKDIR /usr/src/system-environment
COPY package.json /usr/src/system-environment/
RUN npm install
COPY . /usr/src/system-environment
RUN mkdir /root/.ssh
RUN chmod 700 /root/.ssh
RUN ssh-keyscan github.com >> ~/.ssh/known_hosts
#RUN ssh-agent bash -c 'ssh-add isit320-Fall-2019; git clone git@github.com:exxxius/isit320-rahimi-2019.git'
RUN ssh-agent bash -c 'ssh-add midterm-key; git clone git@github.com:charliecalvert/git-ignore-tests.git'
EXPOSE 30028
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]


