const fs = require('fs')
const path = require('path')
const endOfLine = require('os').EOL
var render = require('json-templater/string')

const OUTPUT_PATH = path.join(process.cwd(), './src/index.html')
let emoji
let arr = []
let TEMPLATE_ITEM = `
  <h3>{{value}}</h3>
`

emoji = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), './src/full.json'), {
    encoding: 'utf8',
  })
)
for (const key in emoji) {
  arr.push(render(TEMPLATE_ITEM, { value: `${emoji[key]}` }))
}
var template = arr.join(' ')
fs.writeFileSync(OUTPUT_PATH, template)
console.log('over!!!')
