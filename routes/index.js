var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('*', function (req, res, next) {
    res.send('Server_V1.00');
});

module.exports = router;
