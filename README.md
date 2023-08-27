
# Calculator for Telecommunications Services

This is a React application designed to help you calculate the total cost of various telecommunications services based on your selections.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= 16
- [Docker](https://www.docker.com/products/docker-desktop) (Optional)

## Setup

First, clone the repository to your local machine:

```bash
git clone https://github.com/gosiarutkowska/CalculatorForTelecommunicationsServices.git
cd CalculatorForTelecommunicationsServices
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

If you encounter an error like "address already in use" while trying to run the Docker container, make sure that port 3000 is not being used by another application.

```bash
# On Unix-based systems
lsof -i :3000

# On Windows
netstat -ano | findstr :3000
```

### Testing Different Packages and Telecommunications Services

To test different packages and telecommunications services, please visit `src/mockData/data.json`.

1. **Adding a New Single Service:** To add a new individual service, create a new object in the `services` array. If a product is not available independently of another product (e.g., a 4K decoder is not available without selecting television), the application will automatically mark the checkbox as unavailable and provide an appropriate tooltip. Only after selecting the required service will it allow the selection of additional services.

2. **Introducing a New Service Package:** To introduce a new package of services, use the `bundles` array and add a new object within it. The bundles array is designed to accommodate a variety of services within a single package.

## Author

- [Gosia Rutkowska](https://github.com/gosiarutkowska)
