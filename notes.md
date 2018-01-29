12:06:43 PM: Build ready to start
12:07:00 PM: Fetching cached dependencies
12:07:00 PM: Starting to download cache of 36.8MB
12:07:00 PM: Finished downloading cache in 424.861005ms
12:07:00 PM: Starting to extract cache
12:07:02 PM: Finished extracting cache in 1.882982623s
12:07:02 PM: Finished fetching cache in 2.415041423s
12:07:02 PM: Starting to prepare the repo for build
12:07:05 PM: Preparing Git Reference refs/heads/master
12:07:06 PM: Found netlify.toml. Overriding site configuration
12:07:06 PM: Different build command detected, going to use the one specified in the toml file: 'npm run index' versus 'hugo' in the site
12:07:06 PM: Running build command: npm run index
12:07:06 PM: Installing dependencies
12:07:10 PM: v6.12.3 is already installed.
12:07:11 PM: Now using node v6.12.3 (npm v3.10.10)
12:07:11 PM: Using version v6.12.3 of node
12:07:11 PM: Using /opt/buildhome/.rvm/gems/ruby-2.1.2
12:07:12 PM: Installing NPM modules using NPM version 3.10.10
12:07:13 PM: NPM modules installed
12:07:14 PM: Installing Hugo 0.34
12:07:14 PM: Installing missing commands
12:07:14 PM: Executing user command: npm run index
12:07:14 PM: > algolia-test@1.0.0 index /opt/build/repo
12:07:14 PM: > hugo && hugo-algolia
12:07:15 PM: Building sites …
12:07:15 PM:

12:07:15 PM:                    | EN
12:07:15 PM: +------------------+----+
12:07:15 PM:   Pages            | 21
12:07:15 PM:   Paginator pages  |  1
12:07:15 PM:   Non-page files   |  0
12:07:15 PM:   Static files     |  7
12:07:15 PM:   Processed images |  0
12:07:15 PM:   Aliases          |  2
12:07:15 PM:   Sitemaps         |  1
12:07:15 PM:   Cleaned          |  0
12:07:15 PM: Total in 70 ms
12:07:15 PM: /opt/build/repo/node_modules/hugo-algolia/lib/utils.js:11
12:07:15 PM: async function copySynonyms(fromIndex, toIndex) {
12:07:15 PM:       ^^^^^^^^
12:07:15 PM: SyntaxError: Unexpected token function
12:07:15 PM:     at createScript (vm.js:56:10)
12:07:15 PM:     at Object.runInThisContext (vm.js:97:10)
12:07:15 PM:     at Module._compile (module.js:542:28)
12:07:15 PM:     at Object.Module._extensions..js (module.js:579:10)
12:07:15 PM:     at Module.load (module.js:487:32)
12:07:15 PM:     at tryModuleLoad (module.js:446:12)
12:07:15 PM:     at Function.Module._load (module.js:438:3)
12:07:15 PM:     at Module.require (module.js:497:17)
12:07:15 PM:     at require (internal/module.js:20:19)
12:07:15 PM:     at Object.<anonymous> (/opt/build/repo/node_modules/hugo-algolia/lib/index.js:11:52)
12:07:15 PM: npm ERR! Linux 4.4.86+
12:07:15 PM: npm ERR! argv "/opt/buildhome/.nvm/versions/node/v6.12.3/bin/node" "/opt/buildhome/.nvm/versions/node/v6.12.3/bin/npm" "run" "index"
12:07:15 PM: npm ERR! node v6.12.3
12:07:15 PM: npm ERR! npm  v3.10.10
12:07:15 PM: npm ERR! code ELIFECYCLE
12:07:15 PM: npm ERR! algolia-test@1.0.0 index: `hugo && hugo-algolia`
12:07:15 PM: npm ERR! Exit status 1
12:07:15 PM: npm ERR!
12:07:15 PM: npm ERR! Failed at the algolia-test@1.0.0 index script 'hugo && hugo-algolia'.
12:07:15 PM: npm ERR! Make sure you have the latest version of node.js and npm installed.
12:07:15 PM: npm ERR! If you do, this is most likely a problem with the algolia-test package,
12:07:15 PM: npm ERR! not with npm itself.
12:07:15 PM: npm ERR! Tell the author that this fails on your system:
12:07:15 PM: npm ERR!     hugo && hugo-algolia
12:07:15 PM: npm ERR! You can get information on how to open an issue for this project with:
12:07:15 PM: npm ERR!     npm bugs algolia-test
12:07:15 PM: npm ERR! Or if that isn't available, you can get their info via:
12:07:15 PM: npm ERR!     npm owner ls algolia-test
12:07:15 PM: npm ERR! There is likely additional logging output above.
12:07:15 PM: npm ERR! Please include the following file with any support request:
12:07:15 PM: npm ERR!     /opt/build/repo/npm-debug.log
12:07:15 PM: Caching artifacts
12:07:15 PM: Cached NPM modules
12:07:15 PM: Build complete: exit code: 1
12:07:16 PM: Error running command: Build script returned non-zero exit code: 1
12:07:16 PM: Failing build: Failed to build site
12:07:16 PM: failed during stage 'building site': Build script returned non-zero exit code: 1
12:07:16 PM: Finished processing build request in 16.761984566s
