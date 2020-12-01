"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || process.env.LOCAL_PORT;
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const routes = require('./routes/routes');
routes(app,router);
console.log(PORT);
app.listen(PORT);
