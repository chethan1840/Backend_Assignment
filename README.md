# Backend_Assignment

## Project structure

- `src/server.js` starts the HTTP server.
- `src/app.js` configures Express and mounts the route modules.
- `src/routes/` maps endpoints to controller functions.
- `src/controllers/` contains request handling.
- `src/models/` contains Mongoose models.

Run the API with `npm start`. The server uses port `3000` by default; set `PORT` to override it.