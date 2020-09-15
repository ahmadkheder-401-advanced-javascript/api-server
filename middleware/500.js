'use strict';
function errorHandler(err, req, res, next) {
  console.log("asdasdsad ::::::: errorHandler")
  res.status(500);
  res.json({ error: err });
}
module.exports = errorHandler;