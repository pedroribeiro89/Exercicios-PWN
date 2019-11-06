
var express = require('express');
var router = express.Router();
const Products = require('../store/Products');
const Comments = require('../store/Comment');

router.get('/:id', function(req, res, next) {
    Products.getById(req.params.id)
    .then(function(products) {
        Comments.find({productfk: products[0].id})
        .then(
        	comments => res.render('product', { product: products[0], comments: comments })
        );
    });
  });

  module.exports = router;