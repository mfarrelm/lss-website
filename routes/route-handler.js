var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/profile', function (req, res) {
    res.render('profile');
});

router.get('/clients', function(req, res){
    res.render('clients');
});

router.get('/contact', function(req, res){
    res.render('contact');
})

router.get('/schedule', function(req, res){
    res.render('schedule');
})

router.get('/services/lean-six-sigma-training', function(req, res){
    res.render('services/lean-six-sigma-training');
})

router.get('/services/lean-six-sigma-deployment-workshop', function(req, res){
    res.render('services/lean-six-sigma-deployment-workshop');
})


router.get('/services/lean-project-kaizen', function(req, res){
    res.render('services/lean-project-kaizen');
})


router.get('/services/six-sigma-project', function(req, res){
    res.render('services/six-sigma-project');
})


router.get('/services/business-process-improvement', function(req, res){
    res.render('services/business-process-improvement');
})


router.get('/services/pembuatan-sop', function(req, res){
    res.render('services/pembuatan-sop');
})


router.get('/services/iso-9001-2015-training', function(req, res){
    res.render('services/iso-9001-2015-training');
})


router.get('/services/iso-9001-2015-development-and-implementation', function(req, res){
    res.render('services/iso-9001-2015-development-and-implementation');
})


router.get('/services/operation-management-training', function(req, res){
    res.render('services/operation-management-training');
})



module.exports = router;