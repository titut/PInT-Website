var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res, next){
  res.render('event');
})

router.get('/partner-with-us', function(req, res, next){
  res.render('partner-with-us');
})

router.post('/partner-with-us', function(req, res, next){
  console.log(req.body);
})

router.get('/about', function(req, res, next){
  res.render('about');
})

router.get('/teams', function(req, res, next){
  res.render('service');
})

router.get('/teams/:team_name', function(req,res,next){
  res.render("teams/" + req.params.team_name);
})

router.get('/members', function(req, res, next){
  res.render("team");
})

module.exports = router;