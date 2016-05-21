'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json({ limit: 100000000}));
app.use(express.static(path.join(__dirname, '../client')));

const port = process.env.PORT || 3000;

console.log(`listening on ${port}`);
app.listen(port);
