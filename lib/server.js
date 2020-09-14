'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const timestamp = require('./middleware/timestamp.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');
app.use(express.json());
app.use(timestamp);

app.post('/categories', (req, res, next) => {
  let { name, display_name, description } = req.body;
  let record = { name, display_name, description };
  record.id = categoryDB.length + 1;
  categoryDB.push(record);
  res.json(record);
});
app.get('/categories', (req, res, next) => {
  let count = categoryDB.length;
  let results = categoryDB;
  res.json({ count, results });
});
app.get('/categories/:id', (req, res, next) => {
 
});

app.put('/categories/:id', (req, res, next) => {

});
app.delete('/categories/:id', (req, res, next) => {
  // deletes one category by id
  let id = req.params.id;
  categoryDB = categoryDB.filter((record) => record.id !== parseInt(id));
  res.json({});
});
app.get('/bad', (req, res) => {
  throw new Error('No bueno');
});
app.use('*', notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  },
};