"use strict";

let http = require('http');
let moment = require('moment'); // parse date strings

let hostname = 'localhost';
let port = 3000;

let server = http.createServer(function(req, res) {
  if (req.url === "/") {
    // return instructions page
    res.end("<h1>Timestamp Microservice</h1><p>Please see <a href='https://github.com/templetonpr/\
      fcc-timestamp-microservice'>here</a> for details.</p>");

  } else {
    let dateParam = decodeURI(req.url.split("").splice(1).join(""));
    let date = moment(dateParam, ["MMMM D, YYYY", "X"]);

    if (!date.isValid()) { // moment can't parse the date
      res.end('{"unix":null,"natural":null}');

    } else { // date is valid
      let resDate = JSON.stringify({
        "unix": date.format("X"),
        "natural": date.format("MMMM D, YYYY")
      });

      res.end(resDate);
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
