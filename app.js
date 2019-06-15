const express = require('express')
const exphdbs = require('express-handlebars')
const bodyParser = require('body-parser')
const dummyGenerator = require('./js/dummy_generator')
const models = require('./js/constants')
const helpers = require('./js/helpers')
const app = express()
const port = 3000

// set template engine
app.engine(
  'handlebars',
  exphdbs({
    defaultLayout: 'main',
    helpers: {
      isChecked: helpers.isChecked,
      targetName: helpers.getTargetName
    }
  })
)
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { icons: models.icons, target: models.target })
})

app.post('/', (req, res) => {
  console.log('option:', req.body)
  const option = req.body.option
  const dummyTalk = dummyGenerator(option)
  res.render('index', {
    dummyTalk,
    icons: models.icons,
    selection: option
  })
})

app.listen(port, () => {
  console.log(`connecting http://localhost:${port}`)
})
