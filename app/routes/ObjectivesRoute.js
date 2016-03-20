var express = require('express');
var router = express.Router();

var Objective = require('../models/Objective');


/**
 * POST /objectives
 */
router.post('/', function(req, res) {
  var objective = new Objective(req.body);

  objective.save(function(err) {
    if(err) {
      res.send(err);
    }

    res.json({ message: 'Objective created!' });
  });
});

/**
 * GET /objectives
 */
router.get('/', function(req, res) {
  Objective.find(function(err, objectives) {
    if(err) {
      res.send(err);
    }

    res.json(objectives);
  });
});

/**
 * GET /objectives/:objective_id
 */
router.get('/:objective_id', function(req, res) {
  Objective.findById(req.params.objective_id, function(err, objectives) {
    if(err) {
      res.send(err);
    }

    res.json(objectives);
  });
});

/**
 * PUT /objectives/:objective_id
 */
router.put('/:objective_id', function(req, res) {
  Objective.findById(req.params.objective_id, function(err, objectives) {
    if(err) {
      res.send(err);
    }

    // Update Name
    objectives.name = req.body.name;

    // Save
    objectives.save(function(err) {
      if(err) {
        res.send(err);
      }

      res.json({ message: 'Objective updated!' });
    })
  });
});

/**
 * DELETE /objectives/:objective_id
 */
router.delete('/:objective_id', function(req, res) {
  Objective.remove({
    _id: req.params.objective_id
  }, function(err, objective) {
    if(err) {
      res.send(err);
    }

    res.json({ message: 'Objective deleted!' });
  });
});

module.exports = router;