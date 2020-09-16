'use strict';

const categories = require('../lib/models/categories/categories.collection');
const products = require('../lib/models/products/products.collection');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getModel(req, res, next) {
  let model = req.params.model;
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}

module.exports.getModel = getModel;