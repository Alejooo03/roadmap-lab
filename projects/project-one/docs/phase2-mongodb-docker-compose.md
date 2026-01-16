# Phase 2 – MongoDB with Docker Compose

## Objective

The goal of this phase was to run a database as an independent service and integrate it into the system architecture using Docker Compose.

At this stage, the backend and the database run as separate containers, managed together as a single system.

---

## Why Separate the Database

Separating the database from the backend allows:

- Independent scaling
- Better organization of services
- Easier maintenance and updates
- Data persistence independent of the application lifecycle

This approach reflects how real-world backend systems are designed.

---

## Introduction to Docker Compose

Docker Compose allows defining multiple services in a single configuration file.

Instead of running containers manually one by one, the entire system can be started with a single command.

This improves consistency and reduces configuration errors.

---

## Docker Compose Configuration

The `docker-compose.yml` file defines two services:

- Backend (custom image built from Dockerfile)
- MongoDB (official image)

A shared Docker network is created automatically, allowing containers to communicate using service names.

A named volume is used to persist MongoDB data.

---

## Services Overview

### Backend Service

- Built from the local backend directory
- Exposes port 3000
- Depends on the MongoDB service

### MongoDB Service

- Uses the official MongoDB image
- Runs on the default port 27017
- Uses a persistent volume to store data

---

## Volumes and Persistence

A Docker volume is used to ensure that database data is not lost when containers stop or restart.

This is critical for any production-like system.

---

## Commands Used

```bash
docker-compose up --build


#This command:

Builds the backend image

Starts all defined services

Creates networks and volumes automatically

docker ps


Used to verify that all containers are running.

Observations and Learnings

Docker Compose simplifies multi-service setups

Containers communicate without exposing internal ports

Services can be managed as a single system

The database lifecycle is independent of the backend

This setup mirrors real backend architectures

Current Limitations

At this phase:

The backend is not yet connected to MongoDB

No data is being stored or retrieved

This will be addressed in the next phase.

Conclusion

This phase established a solid foundation for a scalable backend system.

The application now consists of multiple services running in isolation but working together, managed through Docker Compose.
