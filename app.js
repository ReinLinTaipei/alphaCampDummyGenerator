const express = require('express')
const exphdbs = require('express-handlebars')
const bodyParser = require('body-parser')
const dummyGenerator = require('./js/dummy_generator')
const targets = require('./js/constants').targets
const helpers = require('./js/helpers')
const app = express()
const port = 3000

// set template engine and helpers
app.engine(
  'handlebars',
  exphdbs({
    defaultLayout: 'main',
    helpers: {
      cardStyle: helpers.getStyle
    }
  })
)
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { targets })
})

app.post('/', (req, res) => {
  const option = req.body.options
  const dummy = dummyGenerator(option)
  res.render('index', {
    dummy,
    targets,
    option
  })
})

app.listen(port, () => {
  console.log(`connecting http://localhost:${port}`)
})
