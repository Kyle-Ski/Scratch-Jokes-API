// let jokes = require('../models/jokeModels')

const knex = require('../db/connection')
const getAll = (req, res, next) => {
    return knex('joke')
        .orderBy('id', 'asc')
        .then(jokes => res.json({jokes: jokes}))
        .catch(err => console.log(err))
    
}

const getOne = (req, res, next) => {
    let id = req.params.id
    if(!Number(id)) { 
        res.json({error: {status: 400, message: 'Please enter a valid id number'}}) 
    } else {
        return knex('joke')
            .where('id',id)
            .then(theJoke => res.status(200).json({joke: theJoke[0]}))
    }
}

const postJoke = (req, res, next) => {
    const body = req.body    
    return knex('joke')
        .insert(body)
        .returning('*')
        .then(joke => res.json({joke: joke[0]}))
}

const putJoke = (req, res, next) => {
    let id = req.params.id
    let body = req.body
    return knex('joke')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(edditedJoke => res.json({'updated joke': edditedJoke}))
        .catch()
}

const deleteJoke = (req, res, next) => {
    const id = req.params.id
    return knex('joke')
        .where('id', id)
        .delete()
        .returning('*')
        .then(deletedJoke => res.json({"deleted joke": deletedJoke[0]}))
        .catch(err => console.log(err))
}
module.exports = {
    getAll,
    getOne,
    postJoke,
    putJoke,
    deleteJoke
}