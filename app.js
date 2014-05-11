var koa = require("koa");
var serve = require("koa-static");
var router = require("koa-trie-router");
var app = module.exports = koa();

// Middlewares ----------------------------- //

app.use(router(app));
app.use(serve("public"));

// Routing --------------------------------- //
// TODO

app.listen(8080);
