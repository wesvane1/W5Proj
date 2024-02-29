const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');



const recipesController = require('../controllers/recipes');
const validation = require('../middleware/validate')

router.get('/', recipesController.getAll);

router.get('/getSingle:id', recipesController.getSingle);

router.post('/', requiresAuth(), validation.saveRecipe, recipesController.createRecipe);

router.put('/:id', requiresAuth(), validation.saveRecipe, recipesController.updateRecipe);

router.delete('/:id', requiresAuth(), recipesController.deleteRecipe);

module.exports = router;