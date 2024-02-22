const express = require('express');
const router = express.Router();

const recipesController = require('../controllers/recipes');
const validation = require('../middleware/validate')

router.get('/', () => {
  res.render('../views')
});

router.get('/getAll', recipesController.getAll);

router.get('/:id', recipesController.getSingle);

router.post('/', validation.saveRecipe, recipesController.createRecipe);

router.put('/:id', validation.saveRecipe, recipesController.updateRecipe);

router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;