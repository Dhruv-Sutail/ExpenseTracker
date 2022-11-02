const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const con = require("./db/connection.js");

app.use(require("./routes/route"));

con
  .then((db) => {
    if (!db) return process.exit(1);

    app.listen(port, () => {
      console.log("Server running on", port);
    });

    app.on("Error", (err) => console.log("Failed to Connect with HTTP Server"));
  })
  .catch((error) => {
    console.log("Connection Failed", error);
  });
