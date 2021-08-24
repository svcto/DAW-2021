const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(3000, () => {
    console.log('Running on port ' + PORT);
});