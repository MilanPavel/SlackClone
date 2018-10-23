if (process.env.NODE_ENV === "production") {
  module.exports = require("./firebase-prod");
} else {
  module.exports = require("./firebase");
}
