
# Calculator for Telecommunications Services

This is a React application that helps you calculate the total cost of various telecommunications services based on your selections.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= 16
- [Docker](https://www.docker.com/products/docker-desktop) (Optional)

## Setup

First, clone the repository to your local machine:

```bash
git clone https://github.com/gosiarutkowska/CalculatorFotTelecommunicationsServices.git
cd CalculatorFotTelecommunicationsServices
```

## Installation

Install the required packages:

```bash
npm install
```

## Running the Application

### Using npm

To run the application:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Using Docker

Build the Docker image:

```bash
docker-compose build
```

Run the Docker container:

```bash
docker-compose up
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Troubleshooting

### Address Already in Use Error

If you encounter an error like "address already in use" while trying to run the Docker container, make sure that port 3000 is not being used by another application.

On Unix-based systems, you can use the following command to list processes using port 3000:

```bash
sudo netstat -tuln | grep 3000
# or
sudo ss -tuln | grep 3000
```

On Windows:

```bash
netstat -ano | findstr :3000
```

To kill the process using port 3000, use:

```bash
sudo kill -9 [PID]
```

Where `[PID]` is the Process ID of the process you want to terminate.

### Killing All Docker Containers

If you are having trouble locating which container is using a specific port or you want to stop all containers, you can use the following commands:

- **On Unix-based systems:** To stop and remove all Docker containers, run:
  ```bash
  docker stop $(docker ps -aq)
  docker rm $(docker ps -aq)
  ```

- **On Windows:** To stop and remove all Docker containers, open PowerShell as an administrator and run:
  ```powershell
  docker stop $(docker ps -aq)
  docker rm $(docker ps -aq)
  ```

Note: These commands will stop and remove all containers, not just the ones related to this project. Use them carefully.

## Adding and Testing Different Packages and Services

To test different packages and communication services, feel free to visit `src/mockData/data.json`.

1. To add a new individual service, create a new object in the `services` array. If the product is not available without another product (e.g., a 4K decoder is not available without selecting a TV service), the application will automatically mark the checkbox as unavailable and place a suitable tooltip. Only after selecting the necessary service will it allow the selection of the additional service.

2. To introduce a new bundle of services, use the `bundles` array and add a new object within it. Bundles are arrays designed for various services within one package.

## Author

- [Gosia Rutkowska](https://github.com/gosiarutkowska)
