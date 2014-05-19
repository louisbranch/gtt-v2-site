var request = require("../helpers/request");

module.exports = {
  get: get
};

function *get() {
  var email = this.session.email;
  var token = this.session.token;
  var id = this.params.id;
  var url = "/projects/" + id + "?email=" + email + "&token=" + token;
  this.body = yield request("get", url, this);
}

