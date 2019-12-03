const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Visit, Agent, User} } = require('sky-call-data')

module.exports = function (idUser) {
    validate.string(idAgent)
    validate.string.notVoid('idAgent', idAgent)

    //validación de Mongo
    if (!ObjectId.isValid(idAgent)) throw new ContentError(`${idAgent} is not a valid id`)

    return (async () => {
        let user = await User.findById(idUser)
        if (!user) throw new NotFoundError(`user with id ${idUser} does not exist`)

        const visits = await Visit.find({agent: idAgent})

        if(visits.length === 0) throw new NotFoundError(`No visits for agentt ${idAgent}`)
        
        const success = visits.length

        const agent = await User.findOneAndUpdate({_id: idAgent}, {$set: {successVisits : success}})
        
        agent.save() 

        return visits

    })()
}
