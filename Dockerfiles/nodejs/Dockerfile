FROM node:8.11.3-alpine

EXPOSE 3000

ARG PROJECRT_NAME
ENV PROJECT_NAME $PROJECRT_NAME

WORKDIR /public/projects/${PROJECRT_NAME}
COPY . /public
RUN npm install

CMD [ "npm", "start" ]
