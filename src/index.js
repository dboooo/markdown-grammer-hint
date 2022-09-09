const { readFileSync } = require('fs')
const path = require('path')

const RE = /^\\"$:/g

const str = JSON.stringify(
  readFileSync(path.resolve(__dirname, 'full.json'), {
    encoding: 'utf-8',
  })
)

console.log(str.matchAll(RE))
