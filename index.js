const express = require('express');
const app = express();
const port = 8000;
    

app.set('view engine', 'ejs');
app.set('views', './views');


const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/', require('./routes'));



app.listen(port, function (err) {
    if (err) {
        console.log("error in running the server", err);
    }
    console.log(`server is up and running on port ${port}`);
});
