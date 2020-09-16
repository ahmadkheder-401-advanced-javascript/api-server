'use strict';

const express = require('express');
const router = express.Router();
const modelFinder = require('../middleware/model-finder');


router.param('model', modelFinder.getModel);

router.post('/:model', handelPost);
router.get('/:model', handelGetALL);
router.get('/:model/:id', handelGetOne);
router.put('/:model/:id', handelUpdate);
router.patch('/:model/:id', handelUpdate);
router.delete('/:model/:id', handelDelete);
async function handelPost(req, res) {
  let model = req.body;
  try {
    let modelRet = await req.model.create(model);
    res.status(200).json(modelRet);
  } catch (err) {
    console.log(err);
  }
}
async function handelGetALL(req, res) {
  try {
    let modelRet = await req.model.get();
    let response = {
      count: modelRet.length,
      results: modelRet,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
}
async function handelGetOne(req, res) {
  let id = req.params.id;
  try {
    let product = await req.model.get(id);
    res.status(200).json(product[0]);
  } catch (err) {
    console.log(err);
  }
}
async function handelUpdate(req, res) {
  let id = req.params.id;
  let updateModel = req.body;
  try {
    await req.model.update(id, updateModel);
    let modelUpdated = await req.model.get(id);
    res.status(200).json(modelUpdated[0]);
  } catch (err) {
    console.log(err);
  }
}
async function handelDelete(req, res) {
  let id = req.params.id;
  try {
    let modelDel = await req.model.delete(id);
    res.status(200).json(modelDel);
  } catch (err) {
    console.log(err);
  }
}
module.exports = router;