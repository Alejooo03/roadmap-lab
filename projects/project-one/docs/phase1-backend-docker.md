# Phase 1 – Backend Containerization with Docker

## Overview

In this phase, a minimal backend service was created and containerized using Docker.
The purpose of this step was to understand how a backend application can run in an
isolated and reproducible environment, independent of the host system.

The focus was not on application features, but on understanding how different
technologies interact to form a working system.

---

## Technologies Used

- Node.js (JavaScript runtime)
- Docker (containerization)
- Linux CLI
- Git (version control)

Each technology was used with a specific responsibility and without overlapping roles.

---

## Project Structure

The backend service was organized as follows:

backend/
├── server.js
├── package.json
└── Dockerfile


Each file has a clear purpose in the system.

---

## Backend Server (`server.js`)

The backend server was implemented using Node.js core modules.
It listens on port 3000 and exposes a health check endpoint.

Behavior:
- If the route `/health` is requested, the server responds with HTTP status 200
  and a JSON message indicating that the service is running.
- Any other route returns a 404 Not Found response.

This confirms that the server is reachable and functioning correctly.

---

## Application Definition (`package.json`)

The `package.json` file defines how the application is executed.

Its main role in this phase is to:
- Describe the project
- Define the startup command through npm scripts

The following script is used:

#npm starts


Which internally executes:

#node server.js


This abstraction allows Docker to start the application without knowing
implementation details.

---

## Container Definition (`Dockerfile`)

The Dockerfile defines how the backend environment is built.

Key steps:
- A lightweight Node.js base image is used
- Application files are copied into the image
- Dependencies are installed
- A startup command is defined

The Dockerfile produces a reusable image that can be executed as a container.
The container lifecycle depends entirely on the main Node.js process.

---

## Commands Used

System preparation:

```bash
sudo apt update


#Image build:

docker build -t backend-lab .


Running the container (foreground):

docker run -p 3000:3000 backend-lab


Running the container (background):

docker run -d -p 3000:3000 backend-lab


Inspecting running containers:

docker ps


Stopping a container:

docker stop <container_id>


#Results

A custom Docker image was successfully created

Multiple technologies were combined in a controlled way

The backend service returned a valid HTTP 200 response

The application ran independently of the host system

The container could be started, stopped, and recreated without data loss concerns

#Key Learnings

Docker executes processes, not applications

Images define environments, containers execute them

Application logic, execution configuration, and infrastructure must be separated

Containerized services are disposable and reproducible

This phase establishes the foundation for adding external services such as databases
and for orchestrating multiple containers in later phases.





































npm start
