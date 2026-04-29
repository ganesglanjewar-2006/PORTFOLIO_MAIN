# Portfolio Main Project

This repository contains the source code for my personal portfolio. It is divided into a **Frontend** (Next.js) and a **Backend** (Express.js/Node.js).

## Project Structure
- `/frontend`: Next.js React application styled with custom CSS and Framer Motion.
- `/backend`: Express.js server providing API functionalities.

## Local Development

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

### Backend
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example` and set your MongoDB URI.
4. Run development server: `npm run dev`

## Deployment
- **Frontend**: Can be easily deployed to [Vercel](https://vercel.com) by pointing the root directory to `frontend`.
- **Backend**: Can be deployed to platforms like [Render](https://render.com), [Heroku](https://heroku.com), or Railway. Set the start command to `node server.js` and specify your environment variables.
