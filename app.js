const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/products', function (req, res) {
    res.send('Product list comes here ... ')
  })


console.log("Express Server is running ... ");
app.listen(3000)