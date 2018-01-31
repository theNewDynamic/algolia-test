var algoliasearch = require("algoliasearch")


var applicationID = process.env.ALGOLIA_APPLICATION_ID;
var apiKey = process.env.ALGOLIA_API_KEY;
var indexId = process.env.ALGOLIA_INDEX_ID;



var client = algoliasearch(applicationID, apiKey);
var index = client.initIndex(indexId);
var indexObj = require('./../public/algolia.json');

index.addObjects(indexObj, function(err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log('Algolia addObjects Success');
  }
});
