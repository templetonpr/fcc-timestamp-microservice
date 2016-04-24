"use strict";

let path    = require('path');
let moment  = require('moment'); // parse date strings
let express = require('express');
let favicon = require('serve-favicon');

let app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

app.get("/", (req, res) => {
  // return instructions page
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/:date", (req, res) => {
  let date = moment(req.params.date, ["MMMM D, YYYY", "X"]);
  if (!date.isValid()) { // moment can't parse the date
    res.json({"unix":null,"natural":null});
  } else {
    let resDate = {
      "unix": date.format("X"),
      "natural": date.format("MMMM D, YYYY")
    };
    res.json(resDate);
  }
});

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
