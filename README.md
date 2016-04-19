# fcc-timestamp-microservice
Microservice that accepts either a unix timestamp or date, and responds with a JSON string that contains the date in both formats. 
---
## Usage
* Unix timestamp:
 ```localhost:3000/1450137600```
* Human-readable date (In url encoded ```MMMM D, YYYY``` format):
 ```localhost:3000/December%2015,%202015
---
## Output
* Valid date output:
 ```{"unix":"1450137600","natural":"December 14, 2015"}```
* Invalid date output:
 ```{"unix":null,"natural":null}```
---
## Installing and running
1. Clone the repo
2. ```npm run start``` or ```node timestamp```
3. Project will be available at ```localhost:3000``` by default
