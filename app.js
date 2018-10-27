const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3232
const routes = require('./routes/jokeRoutes')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.json({
    "Jokes": `https://agile-falls-28540.herokuapp.com/`
}))

app.use('/jokes', routes)

app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
    res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

    function errorHandler(err, req, res, next) {
    console.error('NOPE, LOL', err)
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

    app.listen(port, () => console.log(process.env.NODE_ENV !== 'production' ? `I got you on http://localhost:${port}`: 'https://agile-falls-28540.herokuapp.com/'))
//adding heroku