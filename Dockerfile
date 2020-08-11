FROM node:alpine
COPY . /usr/src
WORKDIR /usr/src
RUN npm ci
CMD ["npm", "run", "start"]
EXPOSE 3000