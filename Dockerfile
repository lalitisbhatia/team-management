FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .
RUN npm install
COPY public/ .
EXPOSE 8000
CMD [ "npm", "start"]

#docker build . -t team-management
#docker run -it -p 8000:8000 team-management