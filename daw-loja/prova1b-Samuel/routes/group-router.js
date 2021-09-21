const express = require('express');
const groupController = require('../controllers/group-controller');

const routes = express.Router();

routes.route('/')
    .get(groupController.index)
    .post(groupController.create);
    
routes.route('/:id')
    .get(groupController.show)
    .put( groupController.update)
    .delete(groupController.delete);
module.exports = routes;