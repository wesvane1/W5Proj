const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');



const recipesController = require('../controllers/recipes');
const validation = require('../middleware/validate')

router.get('/getAll/', recipesController.getAll);

router.get('/getSingle/:id', recipesController.getSingle);

router.post('/createRecipe/', requiresAuth(), validation.saveRecipe, recipesController.createRecipe);

router.put('/updateRecipe/:id', requiresAuth(), validation.saveRecipe, recipesController.updateRecipe);

router.delete('/:id', requiresAuth(), recipesController.deleteRecipe);

module.exports = router;