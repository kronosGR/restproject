const express = require('express');
const jsend = require('jsend');
const router = express.Router();

router.use(jsend.middleware);

router.get('/:number1/:number2', function (req, res, next) {
  const number1 = parseInt(req.params.number1);
  const number2 = parseInt(req.params.number2);

  if (isNaN(number1))
    return res.jsend.fail({ number1: 'number1 is not in correct format' });
  if (isNaN(number2))
    return res.jsend.fail({ number2: 'number1 is not in correct format' });

  if (number2 == 0) {
    return res.jsend.fail({ number2: 'number2 cannot be 0' });
  }

  const result = number1 / number2;
  if (Number.isInteger(result)) {
    res.jsend.success({ success: result });
  } else {
    res.jsend.fail({ result: Math.round(result), message: 'Result has been rounded' });
  }
});

module.exports = router;
