const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const routes = require('./routes/routes');
routes(app,router);

app.listen(3030);
