const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) =>{
  const result = await mongodb.getDb().db().collection('users').find();
  result.toArray().then((err, lists) => {
    if (err){
      res.status(400).json({message: err});
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must use a valid id to find a user.');
  }
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('users').find();
  result.toArray().then((err, lists) =>{
    if (err){
      res.status(400).json({ message: err });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const deleteSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid id to delete a user.');
  }
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('users').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  }
  else {
    res.status(500).json(response.error || 'An error occurred while deleting the user.');
  }
};

module.exports = { getAll, getSingle, deleteSingle }