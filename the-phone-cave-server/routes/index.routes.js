const router = require("express").Router();
const Phone = require('../models/Phone.model')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/phones', (req, res, next) => {
  Phone.find()
    .then(Phones => res.json(Phones))
    .catch(err => res.json(err))
});

router.get('/phones/:id', (req, res, next) => {
  const { phoneId } = req.params;
  Phone.findById(phoneId)
    .then(phone => res.json(phone))
    .catch(err => res.json(err))
});

module.exports = router;
