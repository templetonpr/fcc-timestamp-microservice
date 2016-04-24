"use strict";

let http = require('http');
let moment = require('moment'); // parse date strings
let app = require('express')();

app.get("/", (req, res) => {
  // return instructions page
  res.send("<h1>Timestamp Microservice</h1><p>Please see <a href='https://github.com/templetonpr/\
    fcc-timestamp-microservice'>here</a> for details.</p>");
});

app.get("/ts/:date", (req, res) => {
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
