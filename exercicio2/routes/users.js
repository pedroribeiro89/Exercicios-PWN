var express = require('express');
var router = express.Router();

let users = { items: [] }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users.items);
});

router.get('/detail/:id', function(req, res, next) {
  if (req.params.id < 0 || req.params.id >= users.items.length) {
    res.send('usuario com id '+req.params.id+' nao existe');
  } else {
    res.send(users.items[req.params.id]);
  }
});

router.post('/', function(req, res, next) {
  users.items.push(req.body)
  res.send('Ok!');
});

router.delete('/', function(req, res, next) {
  const itensNum = users.items.length;
  for (let i = 0; i < users.items.length; ++i) {
    if (users.items[i].email === req.body.email) {
      users.items.splice(i, 1);
      i = users.items.length;
    }
  }

  if (itensNum === users.items.length) {
    res.send('Usuario nao existe!');
  } else {
    res.send('Usuario deletado!');
  }


});

module.exports = router;
