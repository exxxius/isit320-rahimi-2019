#!/usr/bin/env bash

cp ~/.ssh/isit320-Fall-2019 qux/.
docker image build -t exxxius/micro-qux .
docker container run --name micro-qux -d -p 30027:30027 exxxius/micro-qux
rm qux/isit320-Fall-2019
docker exec -it micro-qux /bin/bash