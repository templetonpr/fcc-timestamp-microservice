# fcc-timestamp-microservice

Microservice that accepts either a unix timestamp or date, and responds with a JSON string that contains the date in both formats.

Live version here: https://templetonpr-fcc-timestamp-ms.herokuapp.com/

---

## Usage

* Unix timestamp:
 `https://templetonpr-fcc-timestamp-ms.herokuapp.com/1450137600`

* Human-readable date (In url encoded `MMMM D, YYYY` format):
 `https://templetonpr-fcc-timestamp-ms.herokuapp.com/December%2015,%202015`

---

## Output

* Valid date output:
 `{"unix":"1450137600","natural":"December 14, 2015"}`

* Invalid date output:
 `{"unix":null,"natural":null}`

---
