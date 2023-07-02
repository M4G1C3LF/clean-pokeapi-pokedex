#!/bin/bash
docker image rm -f dockerized-react-pokeapi
docker build -t dockerized-react-pokeapi .
docker-compose up
