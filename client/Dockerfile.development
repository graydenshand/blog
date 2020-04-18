FROM node:13
MAINTAINER Grayden Shand graydenshand@gmail.com

## Copy and mount app
RUN mkdir /home/client
WORKDIR /home/client
VOLUME /home/client/
COPY . /home/client/

ENTRYPOINT ["npm"]
CMD ["start"]