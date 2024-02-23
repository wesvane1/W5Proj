const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));
router.get('/checkLoginStatus', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.use('/recipes', require('./recipes'));

module.exports = router;