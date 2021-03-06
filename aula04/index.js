const express = require('express');
const produtoRouter = require('./routes/produto-router');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(produtoRouter);

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(3000, () => {
    console.log('Running on port ' + PORT);
});