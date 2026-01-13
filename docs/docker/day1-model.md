#Docker – First Lab (Nginx)

## Context
This first Docker lab focuses on running a basic Nginx web server.
The goal was not to deploy a production service, but to understand
how Docker behaves when running containers, how commands differ,
and how to inspect what is happening.

The exercise was done step by step, observing Docker’s behavior
rather than memorizing commands.

---

## System Preparation

Before running Docker commands, the package list was updated:



#"sudo apt update"

This is a good practice to ensure the system has an up-to-date view
of available packages.
No software is installed at this stage.

Verifying Docker Installation
To confirm Docker was available, the following command was used:


#"docker --version"

If Docker is installed correctly, this command returns the installed
version.
If Docker were not installed, this step would indicate that setup
is required before continuing.

Running Nginx for the First Time
The first execution of Nginx was done using:


#"docker run nginx"
What happens here:

1-Docker looks for the nginx image locally

2-If it is not found, Docker downloads it automatically

3-A container is created from the image

4-The container runs in the foreground

Because the container runs in the foreground, the terminal becomes
attached to the container process.
Stopping it requires interrupting the process (Ctrl + C).

At this stage, the container runs internally on port 80, but no port
is explicitly exposed to the host.

Foreground vs Background Execution
The container was then executed again using detached mode:


#"docker run -d nginx"

The -d flag (detached mode) makes Docker run the container in the
background.

Key difference:

Without -d: the terminal is occupied by the container

With -d: the container runs independently and the terminal is free

In detached mode, Docker returns a container ID immediately.

Inspecting Running Containers
To see running containers, the following command was used:

#"docker ps"

Example output:


CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
bf5adc8a638b   nginx     "/docker-entrypoint.…"   13 seconds ago   Up 11 seconds   80/tcp    strange_shannon
This output provides:

CONTAINER ID: unique identifier for the container

IMAGE: image used to create the container

STATUS: whether the container is running

PORTS: ports exposed inside the container

NAMES: auto-generated container name

The container ID is required to manage the container (stop or remove it).

Stopping and Removing Containers
To stop a running container, its ID is used:


#"docker stop <CONTAINER_ID>"

Once stopped, containers can be removed:


#"docker rm <CONTAINER_ID>"

This reinforces the idea that containers are disposable and meant
to be created and destroyed easily.

Running Nginx with Explicit Port Mapping
To access the web server from the host system, a port mapping was defined:


#"docker run -d -p 8080:80 nginx"

This command means:

Port 80 inside the container

Is mapped to port 8080 on the host

The container runs in detached mode

After running this command, Docker again returns a container ID.

Inspecting Containers with Port Mapping
Running docker ps after defining ports shows additional information:


#"docker ps"

Example output:


CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                     NAMES
4205b06282f0   nginx     "/docker-entrypoint.…"   5 seconds ago   Up 5 seconds   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   naughty_elion
Here, the PORTS column clearly shows the mapping between the host
and the container.

This confirms that the service inside the container is accessible
through the chosen host port.

Key Takeaways
Docker automatically pulls images if they are not available locally

Containers depend on a main running process

Foreground and background execution affect how the terminal behaves

Containers are identified and managed using container IDs

Port mapping is required to expose services to the host

Containers are lightweight and meant to be easily removed

This lab established a basic mental model for how Docker containers
are created, run, inspected, and destroyed.

