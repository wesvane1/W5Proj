// This file holds all the logic of the site, all the functions lie here.

const firstFunc = (req, res, next) => {
  res.json('Awesome Person');
};

const secondFunc = (req, res, next) => {
  res.json('Just a regular person');
};

module.exports = { firstFunc, secondFunc }