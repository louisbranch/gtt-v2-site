module.exports = function *() {
  yield this.render('dashboard', {
    projects: this.projects
  });
}
