const { validate, errors: { NotFoundError, ContentError, ConflictError } } = require('sky-call-util')
const { ObjectId, models: { User, Call, Client} } = require('sky-call-data')

module.exports = function (idAdmin) {
    
    validate.string(idAdmin)
    validate.string.notVoid('idAdmin', idAdmin)
    //validación de Mongo
    if (!ObjectId.isValid(idAdmin)) throw new ContentError(`${idAdmin} is not a valid id`)

    return (async () => {

        let user = await User.findById(idAdmin)

        if (!user) throw new NotFoundError(`user with id ${idAdmin} not found`)

        if (user.role === 'agent') throw new ConflictError(`this user ${idAdmin} has no permission`)

        const calls = await Call.find().sort({created: 'desc'}).populate('agent', 'name')
        

        const callsList = []
        
        calls.map(call => {
           
            let {created, calling, agent, statusCall, duration} = call
           
            created = created.toLocaleDateString()
            if(calling) calling = 'YES'
            else calling = 'NO'
           

            callsList.push({agent: agent.name, created, calling, statusCall, duration})
        })

       
        return callsList

    })()
}
