'use strict';


const express = require('express');
const category = require('../lib/models/categories/categories.collection');
//Create a router module for each of your data types?????
//Create an instance of express.Router() and export it
const router = express.Router();

let categoryArray = [];
router.get('/api/v1/categories', getCategories); 
router.get('/api/v1/categories/:id', getCategories); 
router.post('/api/v1/categories', postCategory); 
router.put('/api/v1/categories/:id',updateCategoryByID); 
router.patch('/api/v1/categories/:id',updateCategoryByID); 
router.delete('/api/v1/categories/:id', deleteCategoryByID); 

/*As a developer, I want to CREATE a new record in a database, 
using the POST method on a custom API*/
function postCategory(req, res){
    category.create(req.body)
    .then(data =>{
        res.status(201)
        .json(data)})
    .catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}
// As a developer, I want the API to return the record I create in JSON format
 /*As a developer, I want to GET list of all records in a database, 
 using the GET method on a custom API*/
 //?????As a developer, I want to GET an existing in a database, using the GET method with an ID parameter on a custom API
 //????As a developer, I want the API to return an object containing the record from the database
 //???????As a developer, I want the API to return an object containing count, and a results[] array
 
function getCategories(req, res){
    let id = req.params.id;
    category.get(id)
    .then(data =>{ 
        res.status(200)
        .json(data);})
    .catch(next);
}

//As a developer, I want to UPDATE an existing record in a database,
// using the PUT and PATCH methods with an ID parameter on a custom API
function updateCategoryByID (req, res){
    category.update(req.params.id,req.body)
    .then(data =>{res.status(201)
        .json(data)})
        .catch(err=> {
            // or do .catch(next) like the getFood function
            console.log(err);
            next(err);
        });
}

function deleteCategoryByID(req, res){
    category.delete(req.params.id)
    .then(data=>
        res.status(200).json({ message: '  Deleted' }))
   
}
//---------------------------------------------------------------------------------------------//

module.exports = router;