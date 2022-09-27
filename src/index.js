const fs = require('fs')
const path = require('path')
const endOfLine = require('os').EOL
var render = require('json-templater/string')

const OUTPUT_PATH = path.join(process.cwd(), './src/index.html')
let emoji
let arr = []
let count = 0
let tr = 0
let TEMPLATE_ITEM = `
  <td>{{value}}</td>
`

emoji = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), './src/full.json'), {
    encoding: 'utf8',
  })
)
for (const key in emoji) {
  if (count % 4 === 0) {
    arr.push('</tr><tr>')
  }
  arr.push(render(TEMPLATE_ITEM, { value: `${emoji[key]}` }))
  count++
}
arr[0] = '<tr>'
arr.push('</tr>')
var template = arr.join(' ')
fs.writeFileSync(OUTPUT_PATH, template)
console.log('over!!!')
