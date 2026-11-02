const express = require('express');
const authRoutes = require('./routes/authRoutes');
const healthRoutes = require('./routes/healthRoutes');
const jobApplicationRoutes = require('./routes/jobApplicationRoutes');

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(healthRoutes);
app.use(jobApplicationRoutes);

module.exports = app;
