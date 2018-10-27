let jokes = require('../models/jokeModels')

const getAll = (req, res, next) => {
    res.json({jokes: jokes})
}

const getOne = (req, res, next) => {
    let id = req.params.id
    let theJoke = jokes.filter(joke => joke.id == id)[0]
    return (!Number(id) || id > jokes.length) ? res.json({error: {status: 400, message: 'Please enter a valid id number'}}) : res.status(200).json({joke: theJoke})
}

const postJoke = (req, res, next) => {
    let {id, type, setup, punchline} = req.body
    const newJoke = {id: jokes.length +1, type, setup, punchline}
    return (!type || !setup || !punchline) ? 
            res.json({error:{status: 400, message: "Please make sure you have all fields filled out"}}) : 
            res.status(201).json({joke: newJoke}), jokes.push(newJoke)
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

module.exports = {
    getAll,
    getOne,
    postJoke,
    putJoke,
    deleteJoke
}