const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
const db = mongoose.connection;

db.on('error', console.error.bind(console, "error connecting to the databse"));

db.once('open', function () {
    console.log("connected to the databse");
});

