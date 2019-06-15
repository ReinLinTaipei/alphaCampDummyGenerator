const models = require('./constants')

function dummyGenerator(option) {
  if (!option) return ''
  const task = dummyTalk(models.task[option])
  const phrase = dummyTalk(models.phrase)
  return `${task}${phrase}`
}

function dummyTalk(collection) {
  let id = Math.floor(Math.random() * collection.length)
  return collection[id]
}

module.exports = dummyGenerator
