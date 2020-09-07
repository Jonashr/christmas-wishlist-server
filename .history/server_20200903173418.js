const express = require('express')
const morgan = require('morgan')
const wishlistRouter = require('./controllers/wishlist')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/wishlist', wishlistRouter)

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
