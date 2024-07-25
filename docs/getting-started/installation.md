---
sidebar_position: 1
---

# Installation

This page will guide you through the installation the application using Docker.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
    - [Using Docker](#using-docker)
    - [Using Docker Compose](#using-docker-compose)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (for Docker Compose installation)
- A modern web browser (e.g., Chrome, Firefox, Edge)

## Installation

### Using Docker

1. **Pull the Docker Image**

   Open your terminal and pull the MantisTable UI Docker image from the Docker Hub:

   ```sh
   docker pull mantistable/mantistable-ui:latest
   ```

2. **Run the Docker Container**

   Start the Docker container using the following command:

   ```sh
   docker run -d -p 8080:80 --name mantistable-ui mantistable/mantistable-ui:latest
   ```

   This command will run the MantisTable UI container in detached mode and map port 80 of the container to port 8080 on your host machine.

3. **Access the Application**

   Open your web browser and navigate to `http://localhost:8080` to access the MantisTable UI.

### Using Docker Compose

1. **Create a `docker-compose.yml` File**

   Create a `docker-compose.yml` file in your project directory with the following content:

   ```yaml
   version: '3'
   services:
     mantistable-ui:
       image: mantistable/mantistable-ui:latest
       ports:
         - "8080:80"
   ```

2. **Start the Docker Compose Services**

   In the terminal, navigate to your project directory and run:

   ```sh
   docker-compose up -d
   ```

   This command will start the MantisTable UI service in detached mode.

3. **Access the Application**

   Open your web browser and navigate to `http://localhost:8080` to access the MantisTable UI.