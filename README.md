# Basic Node.js Todo list application
This is a basic todo list application implemented with node js. If you have any question or suggestion, mail me (docali125@gmail.com).

It integrated the following libraries and middlewares:
- Body-parser: Node.js body parsing middleware.
- Cookie-session: Simple cookie-based session middleware.
- EJS: Embedded JavaScript templates.
- Express: Fast, unopinionated, minimalist web framework.

### Requirements
- Docker

### Getting Started
Go to the directory and run the following command to build the Docker image:

```bash
docker build -t <username>/todo-list .
```

Run the docker image:

```bash
docker run -p 49160:8080 -d <username>/todo-list
```
### Usage
Now you can call the application using the following url:

> Copy http://localhost:49160/ into a browser

### Status
- Developing

### Contribution
- Ali T. (docali125@gmail.com)

### License
MIT license. Copyright (c) 2020, Ali T.
