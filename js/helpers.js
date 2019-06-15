const target = require('./constants').target
// is radio item checked
function isChecked(item, option) {
  console.log(`item:${item}, last option:${option}`)
  return item == option ? 'checked' : ''
}

function getTargetName(id) {
  return target[id]
}

module.exports = {
  isChecked,
  getTargetName
}
