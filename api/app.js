const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const weatherController = require('./controllers/weatherController');
const port = 5000;
const app = express();
const mongoose = require('mongoose');
const config = require('./DB.js');
const userRoute = require('./user.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// Initiate middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/user', userRoute);
// Controllers
weatherController(app);

app.listen(port);
console.log(`Server listening on port ${port}..`);
