# Full-Stack React + Express App

A full-stack web application with React frontend and Express backend, using mock data instead of a database.

## Project Structure

```
├── client/          # React frontend (Vite)
├── server/          # Express backend
├── package.json     # Root package with orchestration scripts
├── Dockerfile       # Production deployment
├── .env.example     # Environment variables template
└── README.md        # This file
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   cd client && npm install && cd ..
   cd server && npm install && cd ..
   ```

2. Copy environment file:
   ```bash
   cp .env.example .env
   ```

3. Run in development mode:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Run both client and server with hot reload
- `npm run build` - Build React client for production
- `npm start` - Run Express server in production mode
- `npm run client:dev` - Run only client in development
- `npm run server:dev` - Run only server in development

## Deployment

### Using Docker Compose (Recommended)
```bash
docker-compose up -d
```

### Using Docker directly
```bash
docker build -t fullstack-app .
docker run -p 3000:3000 fullstack-app
```

### Manual Deployment
1. Build the React app:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Features

- React 18 with Vite
- Express.js backend
- Mock data (no database required)
- Hot reload for development
- ESLint + Prettier code formatting
- Docker containerization
