const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
cors = require('cors'),
config = require('./DB'),
businessRoute = require('./routes/business.route');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {userNameUriParser: true}).then(
    () => {console.log('Database connected!');},
    err => {console.log('Failed to connect to database ' + err);}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);
let port = process.env.PORT || 4000;
const server = app.listen(port, function(){
    console.log('Listening on port: ' + port);
});