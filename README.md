# Map Auth App

A modern web application featuring authentication and an interactive world map built with React, Vite, and Leaflet.

## Features

- **Authentication System**: Simple local authentication with username/password login
- **Interactive World Map**: Click anywhere on the world to select locations
- **Location Display**: View coordinates (latitude/longitude) of selected points
- **Session Persistence**: Stay logged in using localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth interactions

## Tech Stack

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **Leaflet** - Interactive map library
- **React-Leaflet** - React components for Leaflet
- **OpenStreetMap** - Free map tiles

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NIRPELEG-2021/map-auth-app.git
cd map-auth-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Usage

1. Enter any username and password (minimum 4 characters)
2. Click "Sign In" to access the map
3. Click anywhere on the world map to select a location
4. View coordinates in the header and marker popup
5. Click "Logout" to return to the login page

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- **CI Workflow**: Runs on every push and pull request
  - Tests on Node.js 18.x and 20.x
  - Runs linter
  - Builds the application
  - Uploads build artifacts

- **Deploy Workflow**: Automatically deploys to GitHub Pages on push to main
  - Builds production bundle
  - Deploys to GitHub Pages

### Live Demo

The application is automatically deployed to GitHub Pages: [View Live Demo](https://nirpeleg-2021.github.io/map-auth-app/)

## Project Structure

```
map-auth-app/
├── .github/
│   └── workflows/
│       ├── ci.yml          # CI workflow
│       └── deploy.yml      # Deployment workflow
├── public/
├── src/
│   ├── components/
│   │   ├── Login.jsx       # Authentication component
│   │   ├── Login.css
│   │   ├── WorldMap.jsx    # Map component
│   │   └── WorldMap.css
│   ├── App.jsx             # Main app component
│   ├── App.css
│   ├── main.jsx            # App entry point
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT
