var koa = require("koa");
var serve = require("koa-static");
var mount = require("koa-mount");
var router = require("koa-trie-router");
var session = require("koa-session");
var hbs = require("koa-hbs");
var app = module.exports = koa();

var auth = require("./server/policies/authenticate");

// Middlewares ----------------------------- //

app.keys = ["secret"];
app.use(hbs.middleware({
  viewPath: __dirname + "/views"
}));
app.use(session());
app.use(router(app));
app.use(serve("build"));
app.use(mount("/client", serve("client")));

// Routing --------------------------------- //

app.get("/", auth, function *() {
  yield this.render('dashboard', {
    projects: this.projects
  });
});

app.listen(3000);
