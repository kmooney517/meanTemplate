var express    = require('express');
var app        = express();
var mongojs    = require('mongojs');
var db         = mongojs('mongodb://chairleg:maggie@ds055535.mongolab.com:55535/mean_template', ['items']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/items', function(req, res) {

  db.items.find(function(err, docs) {

    res.json(docs);
  });

});

app.post('/items', function(req, res) {
  db.items.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/items/:id', function(req, res) {
  var id = req.params.id;

  db.contactList.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.get('/items/:id', function(req, res) {
  var id = req.params.id;

  db.items.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.put('/items/:id', function(req, res) {
  var id = req.params.id;

  db.items.findAndModify({
    query: {
      _id: mongojs.ObjectId(id)
    },
    update: {
      $set: {
        Name: req.body.Name,
        Email: req.body.Email,
        Number: req.body.Number  
      }
    },
    new: true
  }, function(err, doc) {
      res.json(doc);
    
  });
});




app.listen(process.env.PORT || 8000);
console.log('server running on port: 8000');
