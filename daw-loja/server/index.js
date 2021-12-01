const express = require('express');
const cors = require('cors')
const groupRouter = require('./routes/group-router')
const productRouter = require('./routes/product-router')

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome!!!');
});

app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});

app.use('/groups', groupRouter);
app.use('/products', productRouter);
