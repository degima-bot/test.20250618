# Next.js Docker Setup

This repository contains a minimal Next.js application and a `Dockerfile` for building and running it.


## Build the image

```bash
docker build -t my-next-app .
```

## Run the container

```bash
docker run -p 3000:3000 my-next-app
```

The application will be available at `http://localhost:3000`.
