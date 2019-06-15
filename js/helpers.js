const target = require('./constants').target
// is radio item checked
function isChecked(item, option) {
  return item == option ? 'checked' : ''
}

function getTargetName(id) {
  return target[id]
}

module.exports = {
  isChecked,
  getTargetName
}
