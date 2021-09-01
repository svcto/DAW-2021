const express = require('express');
const groupRouter = require('./routes/group-router')

const app = express();
const PORT = 3333;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome!!!');
});

app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});

app.use('/groups', groupRouter);