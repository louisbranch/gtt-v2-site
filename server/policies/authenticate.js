var request = require("co-request");
var SERVER = "http://localhost:8080/v1";

module.exports = function *(next) {
  var email = this.session.email || "me@luizbranco.com";
  var token = this.session.token || "5c4dcc622e5a2f3bf6556c35c3ce672b";
  if (email && token) {
    this.projects = yield get("/projects?email=" + email + "&token=" + token, this);
    yield next;
  } else {
    yield this.render('index');
  }
};

function *get(url, ctx) {
  var result = yield request.get(SERVER + url);
  if (result.statusCode !== 200) throw result.body;
  return result.body;
}
