let jokes = require('../models/jokeModels')

const getAll = (req, res, next) => {
    res.json({jokes: jokes})
}

const getOne = (req, res, next) => {
    let id = req.params.id
    let theJoke = jokes.filter(joke => joke.id == id)[0]
    return (!Number(id) || id > jokes.length) ? res.json({error: {status: 400, message: 'Please enter a valid id number'}}) : res.json({joke: theJoke})
}

const postJoke = (req, res, next) => {

}

const putJoke = (req, res, next) => {

}

const deleteJoke = (req, res, next) => {

}

module.exports = {
    getAll,
    getOne,
    postJoke,
    putJoke,
    deleteJoke
}