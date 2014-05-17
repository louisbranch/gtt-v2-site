var request = require("co-request");
var SERVER = "http://localhost:8080/v1";

module.exports = function *(next) {
  var email = this.session.email || "me@luizbranco.com";
  var token = this.session.token || "5c4dcc622e5a2f3bf6556c35c3ce672b";
  var url = "/projects?email=" + email + "&token=" + token;
  if (email && token) {
    this.projects = yield get(url, this);
    yield next;
  } else {
    yield this.render('index');
  }
};

function *get(url, ctx) {
  var result;
  try {
    result = yield request.get(SERVER + url);
  } catch (e) {
    ctx.throw("gtt server is offline, try again later");
  }
  if (result.statusCode !== 200) {
    ctx.throw(result.body, result.statusCode);
  }
  return result.body;
}
