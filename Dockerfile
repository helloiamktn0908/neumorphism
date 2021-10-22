FROM node:14.18.1
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN yarn install
COPY . /usr/src/app/