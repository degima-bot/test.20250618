# Next.js Docker Setup

This repository contains a `Dockerfile` for running a Next.js application.

## Build the image

```bash
docker build -t my-next-app .
```

## Run the container

```bash
docker run -p 3000:3000 my-next-app
```

The application will be available at `http://localhost:3000`.
