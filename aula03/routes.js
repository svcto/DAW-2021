const express = require('express');
const routes = express.Router();

const produtos = [
    {
        id: 1,
        nome: 'suco de laranja',
        litros: 0.5,
        preco: 3
    },
    {
        id: 2,
        nome: 'suco de uva',
        litros: 0.72,
        preco: 5
    },
    {
        id: 3,
        nome: 'suco de abacaxi',
        litros: 1,
        preco: 7
    }
];

routes.get('/produtos', (req, res) => {
    res.send(produtos);
});

routes.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    
    res.send(produtos);
});

module.exports = routes;