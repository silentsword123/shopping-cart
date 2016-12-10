/**
 * Created by deng_ on 12/9/2016.
 */
var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Order = require('../models/order');
var Cart = require('../models/cart');
let Prod=require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);
router.get('/:id',(req,res)=>{
    Prod.findOne({_id:req.params.id}).then((prodFound)=>{
        if(!prodFound) res.send("NO PRODUCT FOUND");
        else res.render('product/single',{product:prodFound});
    });
});
router.get('/label/:id',(req,res)=>{
    Prod.find({label:req.params.id}).then((prodList)=>{
       //res.json(prodList);
         res.render('product/prodByLabel',{products:prodList});
    })
})


module.exports = router;

