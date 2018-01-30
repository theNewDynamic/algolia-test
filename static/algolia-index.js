var algoliasearch = require("algoliasearch")
var fs = require("fs")

var indexId = "testhugoagolia_8"
var indexFile = fs.readFileSync("./public/index.json")
var index = JSON.parse(indexFile)

if (index) {
  var APP_ID = "Y5U3SE5SW2"
  var ADMIN_KEY = "c023a8822dda231cbc7a3921e16abba9"
  var index = algoliasearch(APP_ID, ADMIN_KEY).initIndex(indexId)

  index.addObjects(index, function(err, content) {
    if (err) throw err
    else console.log("Sending index to Algolia")
  })
}
