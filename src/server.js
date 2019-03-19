const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB Config

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}...`));
