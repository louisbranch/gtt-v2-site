var koa = require("koa");
var serve = require("koa-static");
var mount = require("koa-mount");
var router = require("koa-trie-router");
var session = require("koa-session");
var body = require("koa-body");
var hbs = require("koa-hbs");
var app = module.exports = koa();

var dashboard = require("./server/controllers/dashboard");
var login = require("./server/controllers/login");
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

app.get("/", auth, dashboard);

app.get("/login", login.get);
app.post("/login", body(), login.post);

app.listen(3000);
