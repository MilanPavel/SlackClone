// if (process.env.NODE_ENV === "production") {
//   console.log("NODE_ENV === production");
console.log(process.env.API_KEY);
module.exports = require("./firebase-prod");
// }
// else {
//   console.log("NODE_ENV === else!!!!");
//   module.exports = require("./firebase");
// }
