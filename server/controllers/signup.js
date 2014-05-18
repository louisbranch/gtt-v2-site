var request = require("../helpers/request");

module.exports = {
  get: get,
  post: post
};

function *get() {
  yield this.render("signup");
}

function *post() {
  var params = this.request.body;
  var url = "/signup?email=" + params.email + "&password=" + params.password;
  var response = yield request("post", url, this);
  this.session.email = params.email;
  this.session.token = response;
  this.redirect("/");
}

