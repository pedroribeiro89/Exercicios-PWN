var express = require('express');
var router = express.Router();
const Comments = require('../store/Comment');
const Products = require('../store/Products');

router.post('/', function(req, res, next) {
    Comments.create(req.body)
    .then(
        () => {      
            Products.getById(req.body.productfk)
            .then(function(products) {
                Comments.find({productfk: products[0].id})
                .then(comments => res.render('product', { product: products[0], comments: comments }));
            });
        }
    );
});

  module.exports = router;