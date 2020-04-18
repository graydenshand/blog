FROM postgres:12.2

MAINTAINER Grayden Shand graydenshand@gmail.com

COPY build_schema.sql build_schema.sql

ENV POSTGRES_PASSWORD=example

VOLUME /var/lib/postgresql/data