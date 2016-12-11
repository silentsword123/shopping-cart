/**
 * Created by deng_ on 12/9/2016.
 */
const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const Order = require('../models/order');
const Cart = require('../models/cart');
var Prod=require('../models/product');
const xss=require("xss");

var csrfProtection = csrf();
//router.use(csrfProtection);
router.post('/add/product',(req,res)=>{
    let title=xss(req.body.title);
    let image=xss(req.body.image);
    let label=xss(req.body.label);
    let description=xss(req.body.description);
    let price=xss(req.body.price);
    let newProduct=new Prod({
        imagePath: image,
        title: title,
        label:label,
        description: description,
        price: parseFloat(price)});
    let url="/product/"+newProduct._id;
    newProduct.save(function(err, result) {
        //req.flash('success', 'Successfully post product!');
        //res.redirect(url);
        res.send({redirect:url});
    });

    //
})
router.get('/post',(req,res)=>{
    res.render('product/uploadProduct');
});
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
});
module.exports = router;

