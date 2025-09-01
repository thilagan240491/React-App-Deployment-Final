#!/bin/bash
#


docker login -u $DOCKER_USERNAME -p $DOCKER_PASS

docker stop react

docker rm react

docker build -t thilagan .

docker run -d -it --name react -p 80:80 thilagan

docker tag thilagan thilak24/react-app

docker push thilak24/react-app
