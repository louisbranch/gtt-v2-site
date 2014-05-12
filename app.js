var koa = require("koa");
var serve = require("koa-static");
var mount = require("koa-mount");
var router = require("koa-trie-router");
var app = module.exports = koa();

// Middlewares ----------------------------- //

app.use(router(app));
app.use(serve("build"));
app.use(mount("/client", serve("client")));

// Routing --------------------------------- //
// TODO

app.listen(8080);
