const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User } } = require('sky-call-data')

module.exports = function (id, idUser, name, surname, username, password) {

    validate.string(id)
    validate.string.notVoid('id', id)
    //validación de Mongo
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)
    
    validate.string(idUser)
    validate.string.notVoid('idClient', idUser)
    //validación de Mongo
    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)

    if(name) {

        validate.string(name)
        validate.string.notVoid('name', name)
    }

    if(surname) {

        validate.string(surname)
        validate.string.notVoid('surname', surname)
    }

    if(username) {

        validate.string(username)
        validate.string.notVoid('username', username)
    }
    if(password) {

        validate.string(password)
        validate.string.notVoid('password', password)
    }


    return (async () => {

        const user = await User.findById(id)

        if (!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const agent = await User.findById(idUser)

        if (!agent) throw new NotFoundError(`agent with id ${idUser} not found`)


        if(name) agent.name = name
        if(surname) agent.surname = surname
        if(username) agent.username = username
        if(password) agent.password = password
        
        await agent.save()
        

    })()
}
