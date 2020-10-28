const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/insurance', require('./routes/insurance'));


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server start...`)
    console.log(`Server Listening on ${port}`)
});

// heroku sleep 방지
const http = require('http');
setInterval(function() {
  http.get(config.herokuURI);
  http.get(config.herokuAppURI);
}, 600000);