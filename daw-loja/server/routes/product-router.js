const express = require('express');
const productController = require('../controllers/product-controller');

const routes = express.Router();

routes.route('/')
    .get(productController.index)
    .post(productController.create);
    
routes.route('/:id')
    .get(productController.show)
    .put( productController.update)
    .delete(productController.delete);
module.exports = routes;
