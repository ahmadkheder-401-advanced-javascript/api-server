'use strict';
function notFoundHandler(req, res, next) {
  res.status(404).send('404 Not Found');
}
module.exports = notFoundHandler