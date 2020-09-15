'use strict';
const express = require('express');
const product = require('../lib/models/products/products.collection');
const router = express.Router();
router.get('/api/v1/products', getProducts); 
router.get('/api/v1/products/:id', getProducts); 
router.post('/api/v1/products', postProduct); 
router.put('/api/v1/products/:id',updateProductByID); 
router.patch('/api/v1/products/:id',updateProductByID); 
router.delete('/api/v1/products/:id', deleteProductByID); 
function postProduct(req, res){
    product.create(req.body)
    .then(data =>{
        res.status(201)
        .json(data)})
    .catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}
function getProducts(req, res){
    let id = req.params.id;
    product.get(id)
    .then(data =>{ 
        res.status(200)
        .json(data);})
    .catch(next);
}
function updateProductByID (req, res){
    product.update(req.params.id,req.body)
    .then(data =>{res.status(201)
        .json(data)})
        .catch(err=> {
            // or do .catch(next) like the getFood function
            console.log(err);
            next(err);
        });
}

function deleteProductByID(req, res){
    product.delete(req.params.id)
    .then(data=>
        res.status(200).json({ message: '  Deleted' }))
   
}
//---------------------------------------------------------------------------------------------//

module.exports = router;