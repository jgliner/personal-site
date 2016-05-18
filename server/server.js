'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: 100000000}));
app.use(express.static(path.join(__dirname, '../client')));

const port = process.env.PORT || 3000;

console.log(`listening on ${port}`);
// start listening to requests on port 3000
app.listen(port);
