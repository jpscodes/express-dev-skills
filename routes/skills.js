var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Get /skills/new
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show);
router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);


module.exports = router;
