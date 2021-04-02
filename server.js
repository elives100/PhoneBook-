const express = require("express");
const serverStatic = require("serve-static");
path = require("path");

const app = express();

app.use("/", serveStatic(path.join(__dirname, "dist")));

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening to port ${port}`);
