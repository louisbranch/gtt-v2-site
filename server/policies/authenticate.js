var request = require("../helpers/request");

module.exports = function *(next) {
  var email, token, url;
  email = this.session.email;
  token = this.session.token;
  if (email && token) {
    url = "/projects?email=" + email + "&token=" + token;
    this.projects = yield request("get", url, this);
    yield next;
  } else {
    yield this.render('index');
  }
};
