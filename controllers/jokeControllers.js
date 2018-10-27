const jokes = require('../models/jokeModels')
const uuid = require('uuid/v4')

const getAll = (req, res, next) => {
    res.json({jokes: jokes})
}

const getOne = (req, res, next) => {

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