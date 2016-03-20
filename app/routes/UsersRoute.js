var express = require('express');
var router = express.Router();

var User = require('../models/User');


/**
 * POST /users
 */
router.post('/', function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if(err) {
      res.send(err);
    }

    res.json({ message: 'User created!' });
  });
});

/**
 * GET /users
 */
router.get('/', function(req, res) {
  User.find(function(err, users) {
    if(err) {
      res.send(err);
    }

    res.json(users);
  });
});

/**
 * GET /users/:user_id
 */
router.get('/:user_id', function(req, res) {
  User.findById(req.params.user_id, function(err, users) {
    if(err) {
      res.send(err);
    }

    res.json(users);
  });
});

/**
 * PUT /users/:user_id
 */
router.put('/:user_id', function(req, res) {
  User.findById(req.params.user_id, function(err, users) {
    if(err) {
      res.send(err);
    }

    // Update Name
    users.name = req.body.name;

    // Save
    users.save(function(err) {
      if(err) {
        res.send(err);
      }

      res.json({ message: 'User updated!' });
    })
  });
});

/**
 * DELETE /users/:user_id
 */
router.delete('/:user_id', function(req, res) {
  User.remove({
    _id: req.params.user_id
  }, function(err, user) {
    if(err) {
      res.send(err);
    }

    res.json({ message: 'User deleted!' });
  });
});

module.exports = router;