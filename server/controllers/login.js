module.exports = {
  get: get,
  post: post
};

function *get() {
  yield this.render("login");
}

function *post() {
  this.body = this.request.body;
}
