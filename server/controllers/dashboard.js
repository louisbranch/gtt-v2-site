var request = require("../helpers/request");

module.exports = function *() {
  var email = this.session.email;
  var token = this.session.token;
  var url = "/projects?email=" + email + "&token=" + token;
  var projects = yield request("get", url, this);

  yield this.render('dashboard', {
    projects: projects
  });
}
