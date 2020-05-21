var express = require('express');
var router = express.Router();
var Product = require('../models/product');
// var csurf = require('csurf');
// var csrfProtection = csurf();

// router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err,docs){
    var productchunk = [];
    var chunksize = 3;
    for (var i =0; i<docs.length; i +=chunksize){
      productchunk.push(docs.slice(i,i+chunksize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productchunk });
    console.log(productchunk);
  }).lean();

});

router.get('/user/signup', function(req,res,next){
  // res.render('user/signup', {csrfToken:req.csrfToken});
    res.render('user/signup');
});

module.exports = router;
