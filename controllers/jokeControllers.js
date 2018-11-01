// let jokes = require('../models/jokeModels')

const knex = require('../db/connection')
const getAll = (req, res, next) => {
    return knex('joke')
        .orderBy('id', 'asc')
        .then(jokes => res.json({jokes: jokes}))
        .catch(errorFcn)
    
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
    knex('joke')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(edditedJoke => res.status(200).json({'updated joke': edditedJoke}))
}

const deleteJoke = (req, res, next) => {
    const id = req.params.id
    const deletedJoke = jokes.filter(joke => joke.id == id)
    if (!Number(id) || id > jokes.length){
        return res.json({error: {status: 400, message: 'Please enter a valid id number'}})
    } else {
        const index = jokes.indexOf(deletedJoke)
        jokes.splice(index, 1)
    }
    return res.status(200).json({"deleted joke": deletedJoke})
}

function errorFcn (res,error) {
    console.log('dat error function', error)
    return res.json({error: error, status: 'num', message: 'wha.. wha happen?'})
}

module.exports = {
    getAll,
    getOne,
    postJoke,
    putJoke,
    deleteJoke
}