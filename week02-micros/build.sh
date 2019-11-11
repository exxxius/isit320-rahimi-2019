#!/usr/bin/env bash

docker image build -t exxxius/micro-qux .
docker container run --name micro-qux -d -p 30027:30027 exxxius/micro-qux
docker exec -it micro-qux /bin/bash
