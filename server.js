const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3030;
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const routes = require('./routes/routes');
routes(app,router);

app.listen(PORT);
