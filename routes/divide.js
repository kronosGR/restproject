const express = require('express');
const router = express.Router();

router.get('/:numner1/:number2', function (req, res, next) {
  res.status(200).json(parseInt(req.params.numner1) / parseInt(req.params.number2));
});

module.exports = router;
