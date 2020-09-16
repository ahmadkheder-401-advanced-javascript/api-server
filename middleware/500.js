'use strict';
function errorHandler(err, req, res, next) {
  res.status(500).send("errorHandler  500");
}
module.exports = errorHandler;