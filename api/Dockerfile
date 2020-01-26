FROM ubuntu:18.04

RUN apt-get update -y && \
    apt-get install -y python3-venv python3-pip python3-dev

WORKDIR /home/api

COPY . .

RUN python3 -m venv venv
RUN venv/bin/pip install -r requirements.txt

RUN chmod +x boot.sh

ENV FLASK_APP main.py

EXPOSE 5000
ENTRYPOINT ["./boot.sh"]



