#!/usr/bin/env bash

docker image build -t charliecalvert/micro-qux .
docker container run --name micro-qux -d -p 30027:30027 charliecalvert/micro-qux
docker exec -it micro-qux /bin/bash
