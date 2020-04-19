const { handleGetCountries } = require('./handlers');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 5000;

app.get('/countries', (req, res) => handleGetCountries(res));

app.listen(port, () => console.log(`Listening on port ${port}`));
