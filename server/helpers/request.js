var request = require("co-request");
var SERVER = require("../../config").server;

module.exports = function* (method, url, ctx) {
  var result;
  try {
    result = yield request[method](SERVER + url);
  } catch (e) {
    ctx.throw("gtt server is offline, try again later");
  }
  if (result.statusCode !== 200) {
    ctx.throw(result.body, result.statusCode);
  }
  return result.body;
};
