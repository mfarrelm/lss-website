var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

//------------------------------- Page Utama-----------------------------
router.get('/profile', function (req, res) {
    res.render('profile');
});

router.get('/clients', function(req, res){
    res.render('clients');
});

router.get('/contact', function(req, res){
    res.render('contact');
})

router.get('/events', function(req, res){
    res.render('events');
})

//------------------------------- Page Services-----------------------------
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

router.get('/services/mastering-7-quality-tools', function(req, res){
    res.render('services/mastering-7-quality-tools');
})

router.get('/services/value-stream-mapping', function(req, res){
    res.render('services/value-stream-mapping');
})


//------------------------------- Page Lean six sigma training-----------------------------
router.get('/services/lean-six-sigma-training/lean-six-sigma-yellow-belt', function(req, res){
    res.render('services/lean-six-sigma-training/lean-six-sigma-yellow-belt');
})


router.get('/services/lean-six-sigma-training/lean-six-sigma-green-belt', function(req, res){
    res.render('services/lean-six-sigma-training/lean-six-sigma-green-belt');
})

router.get('/services/lean-six-sigma-training/lean-six-sigma-white-belt', function(req, res){
    res.render('services/lean-six-sigma-training/lean-six-sigma-white-belt');
})


module.exports = router;