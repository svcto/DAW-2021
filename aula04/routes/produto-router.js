const express = require('express');
const produtoController = require('../controllers/produto-controller');

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

routes.get('/produtos', produtoController.index);

routes.get('/produtos/:id', produtoController.show);

routes.post('/produtos', produtoController.create);

module.exports = routes;