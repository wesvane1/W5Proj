const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const userController = require('../controllers/users')
const validation = require('../middleware/validate')

router.get('/', requiresAuth(), userController.getAll);
router.get('/:id', requiresAuth(), userController.getSingle);
router.delete('/:id', requiresAuth(), userController.deleteSingle)

module.exports = router;