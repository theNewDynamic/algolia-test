var algoliasearch = require("algoliasearch")
var write_key = process.env.ALGOLIA_WRITE_KEY;

var client = algoliasearch('Y5U3SE5SW2', write_key);

var index = client.initIndex('testindic');
var contactsJSON = require('./../public/index.json');

index.addObjects(contactsJSON, function(err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log('Algolia addObjects Success');
  }
});
