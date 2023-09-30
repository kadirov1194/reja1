const http = require("http");
const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://wayfay:X2AFCDU4bnwfrdwC@cluster0.lubzyce.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection success");

      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
