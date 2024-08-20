const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./src/routes');
const sequelize = require('./src/config/database');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
