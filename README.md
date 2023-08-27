# Calculator for Telecommunications Services

This is a React application that helps you calculate the total cost of various telecommunications services based on your selections.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= 14.4.0
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

If you get an error like "address already in use" while trying to run the Docker container, make sure that port 3000 is not being used by another application.

```bash
# On Unix-based systems
lsof -i :3000

# On Windows
netstat -ano | findstr :3000
```

## Author

- [Gosia Rutkowska](https://github.com/gosiarutkowska)
