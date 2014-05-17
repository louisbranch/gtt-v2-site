var request = require("../helpers/request");

module.exports = {
  get: get,
  post: post
};

function *get() {
  yield this.render("login");
}

function *post() {
  var params = this.request.body;
  var url = "/login?email=" + params.email + "&password=" + params.password;
  var response = yield request("post", url, this);
  var json = JSON.parse(response);
  this.session.email = params.email;
  this.session.token = json.token;
  this.redirect("/");
}
