var algoliasearch = require("algoliasearch")
var fs = require("fs")
var write_key = process.env.ALGOLIA_WRITE_KEY;

var indexId = "testhugoagolia_8"
var indexFile = fs.readFileSync("./public/index.json")
var index = JSON.parse(indexFile)

if (index) {
  var APP_ID = "Y5U3SE5SW2"
  var ADMIN_KEY = write_key
  var index = algoliasearch(APP_ID, ADMIN_KEY).initIndex(indexId)

  index.addObjects(index, function(err, content) {
    if (err) throw err
    else console.log("Sending index to Algolia")
  })
}
