const express = require('express');
const path = require('path');
const cors = require('cors');
const weatherController = require('./controllers/weatherController');
const port = 5000;
const app = express();

// Initiate middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Controllers
weatherController(app);

app.listen(port);
console.log(`Server listening on port ${port}..`);
