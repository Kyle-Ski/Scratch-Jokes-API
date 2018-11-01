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
    // return (!type || !setup || !punchline) ? 
    //         res.json({error:{status: 400, message: "Please make sure you have all fields filled out"}}) : 
    return knex('joke')
        .insert(body)
        .returning('*')
        .then(joke => res.status(201).json({joke: joke[0]}))
}

const putJoke = (req, res, next) => {
    let id = req.params.id
    let {type, setup, punchline} = req.body
    let edditedJoke = {id, type, setup, punchline}
    if (!type || !setup || !punchline){
        return res.json({error: {status: 400, message: "Please make sure you have all fields filled out"}}) 
    } else if(!Number(id) || id > jokes.length){
        return res.json({error: {status: 400, message: 'Please enter a valid id number'}}) 
    } else {
        jokes[id - 1] = edditedJoke
        return res.status(200).json({'updated joke': edditedJoke})
    }
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