const fs = require('fs')

const path = __dirname + '/servers.json'


const content = fs.readFileSync(path, 'utf-8')

// console.log(content)

// fs.readFile(path, 'utf-8', (err, fileContent) => {
//   const config = JSON.parse(content)
//   console.log(`${config.db.host}:${config.db.port}`)
// })

const config = require('./servers.json')
console.log(config)
