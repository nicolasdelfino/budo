var fetch = require('./fetch.js')

var promise = fetch('file.txt')

promise.then((names) => {
   console.log(names)
})

promise.catch((error) => {
   console.log('oh oh', error)
}) 