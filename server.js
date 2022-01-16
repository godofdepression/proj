const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__proj + "/dist"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__proj, "dist", "index.html"));
});

app.listen(process.env.PORT || 8080);
