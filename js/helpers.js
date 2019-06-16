const names = require('./constants').names
const styles = require('./constants').styles
const handlebars = require('handlebars')

handlebars.registerHelper('isEqual', (target, compare, options) => {
  if (!target || !compare) return false
  return target === compare ? options.fn(this) : ''
})

handlebars.registerHelper('name', (key, options) => {
  return key ? options.fn(names[key]) : ''
})

function getStyle(key) {
  return styles[key]
}

module.exports = {
  getStyle
}
