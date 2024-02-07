const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.firstFunc)

routes.get('/reg', myController.secondFunc)

module.exports = routes