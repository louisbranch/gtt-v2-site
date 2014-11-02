var env = process.env;

module.exports = {
  server: env.SERVER_URL || "http://curry.io/v1",
  secret: env.SESSION_SECRET || "secret"
};
