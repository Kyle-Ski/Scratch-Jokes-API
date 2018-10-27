const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3232
const routes = require('./routes/jokeRoutes')

app.use(bodyParser.json())