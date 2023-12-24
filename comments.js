// create web server
var express = require('express');
var router = express.Router();

// get comments from database
router.get('/getComments', function(req, res, next) {
    var db = req.db;
    var collection = db.get('comments');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

// add comment to database
router.post('/addComment', function(req, res) {
    var db = req.db;
    var collection = db.get('comments');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;