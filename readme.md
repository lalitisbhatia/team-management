# Basic application using Node and Express with TypeScript

This is a basic REST api app for NodeJS and Express


## Current Features

- Uses TypeScript with classes and interfaces
- Uses a generic App class that handles 
    - instantiating the app with express
    - initializing middlewares
    - initializing db connections
    - initializing controllers
- The entrypoint server.ts just passes in the list of controllers and starts the app making it really easy to add in new controllers
- Each controller extends a base controller that handle the common task of instantiating a router and the path for the api
- Tests using jest and supertest
- the "docker:build" script creates a docker image, runs the image and adds it to a local container network
- Has a connection to mongo db 
- Connection strings and ports are part of env variables


## Features to be added
- Hook up to ci/cd using github actions
- Add deployment using Kubernetes
- Add more tests


