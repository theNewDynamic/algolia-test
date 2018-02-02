var atomicalgolia = require("atomic-algolia")
var indexName = "example_index"
var indexPath = "./index.json"
var cb = function(error, result) {
    if (err) throw error

    console.log(result)
}

atomicalgolia(indexName, indexPath, cb)
