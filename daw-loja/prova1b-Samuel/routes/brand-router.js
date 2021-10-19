const express = require('express');
const brandController = require('../controllers/brand-controller');

const routes = express.Router();

routes.route('/')
    .get(brandController.index) 
    .post(brandController.create);
    
routes.route('/:id')
    .get(brandController.show)
    .put( brandController.update)
    .delete(brandController.delete);
module.exports = routes;