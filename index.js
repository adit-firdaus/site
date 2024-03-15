// static hosting using express
// morgan and dotenv

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    }
);