var koa = require("koa");
var serve = require("koa-static");
var mount = require("koa-mount");
var router = require("koa-trie-router");
var session = require("koa-session");
var body = require("koa-body");
var hbs = require("koa-hbs");
var app = module.exports = koa();

var config = require("./config");
var auth = require("./server/policies/authenticate");
var dashboard = require("./server/controllers/dashboard");
var login = require("./server/controllers/login");
var logout = require("./server/controllers/logout");
var signup = require("./server/controllers/signup");
var projects = require("./server/controllers/projects");

// Middlewares ----------------------------- //

app.keys = [config.secret];
app.use(hbs.middleware({
  viewPath: __dirname + "/views",
  defaultLayout: "layout"
}));
app.use(session());
app.use(router(app));
app.use(serve("build"));
app.use(mount("/client", serve("client")));

// Routing --------------------------------- //

app.get("/", auth, dashboard);

app.get("/login", login.get);
app.post("/login", body(), login.post);

app.get("/logout", logout);

app.get("/signup", signup.get);
app.post("/signup", body(), signup.post);

app.get("/projects/:id", auth, projects.get);

app.listen(3000);
