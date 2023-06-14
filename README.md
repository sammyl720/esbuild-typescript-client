# esbuild-typescript-client

This project is a client-side application built with esbuild and TypeScript. It aims to provide an efficient and optimized development environment for building modern JavaScript applications.

## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone this repository.
3. Navigate to the project directory.
4. Run the following command to install the project dependencies:

```bash
npm install
```

## Development with Docker
To facilitate development with Docker, you can use the provided Dockerfile and docker-compose.yml file.

### Dockerfile
The Dockerfile in the project is optimized for production builds. However, you can modify it to suit your development needs. To build a Docker image for development, you can use the following command:
```bash
docker build -t esbuild-client-dev -f Dockerfile.dev .
```

This command builds a Docker image named esbuild-client-dev using the Dockerfile.dev file.

To run a container based on the development image, use the following command:
```bash
docker run -d --name esbuild-client-container -p 3000:3000 -v $(pwd):/app -v $(pwd)/www:/app/www esbuild-client-dev
```

This command creates and starts a container named esbuild-client-container based on the esbuild-client-dev image. It maps port 3000 from the container to port 3000 on the host machine, allowing you to access the application at http://localhost:3000. It also mounts the current directory ($(pwd)) as a volume in the container for live code reloading and mounts the ./www directory on the host machine to the /app/www directory in the container.

### docker-compose-dev.yaml
Alternatively, you can use docker-compose to simplify the container management process. The provided docker-compose-dev.yml file includes the necessary configuration. To start the development environment using docker-compose, run the following command:
```bash
docker-compose up -f docker-compose-dev.yaml -d
```

This command starts the container defined in the docker-compose-dev.yml file in detached mode (-d). It sets up the necessary configurations, including port mapping and volume mounting.

## Usage
To start the development server without Docker, use the following command:
```bash
npm start
```

This command compiles the TypeScript code using esbuild and starts the development server. The application will be accessible at http://localhost:3000

## Scripts
- `npm run build`: Builds the application using esbuild for - production.
- `npm start`: Starts the development server with live code reloading.
- `npm run analyze`: Analyzes the bundle size and provides insights into optimization opportunities.

## Directory Structure
- `src/`: Contains the source code for the client-side application
- `www/`: Contains the generated static files after building the application

## License
This project is licensed under the MIT license. See the LICENSE file for more details.

