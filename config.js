var env = process.env;

module.exports = {
  server: env.SERVER_URL || "http://localhost:8080/v1"
};