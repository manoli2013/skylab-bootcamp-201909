const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { Client, User} } = require('sky-call-data')

module.exports = function (idAdmin, idClient) {
    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    //validación de Mongo
    if (!ObjectId.isValid(idClient)) throw new ContentError(`${idClient} is not a valid id`)
    validate.string(idAdmin)
    validate.string.notVoid('idClient', idAdmin)
    //validación de Mongo
    if (!ObjectId.isValid(idAdmin)) throw new ContentError(`${idAdmin} is not a valid id`)

    return (async () => {
       
        const user = await User.findById(idAdmin)
        if(!user) throw new NotFoundError(`user with id ${idAdmin} does not exist`)
       
        const client = await Client.findById(idClient)
        if(!client) throw new NotFoundError(`client with id ${idClient} not found`)
       
        await Client.deleteOne({_id: ObjectId(idClient)})
        client.save()
        
    })()
}

