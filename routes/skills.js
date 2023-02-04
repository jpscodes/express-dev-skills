var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Get /skills/new
router.get('/new', skillsCtrl.new)
router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id', skillsCtrl.show);

module.exports = router;
