module.exports = function *(next) {
  if (!this.session.email || !this.session.token) {
    yield this.render('index');
  } else {
    yield next;
  }
};
