const { validate, errors: { NotFoundError } } = require('sky-call-util')
const {models: { User, Visit, Call}, ObjectId } = require('sky-call-data')

module.exports = function (idAdmin) {
    
    return (async () => {

        validate.string(idAdmin)
        validate.string.notVoid('idAdmin', idAdmin)
        //validación de Mongo
        if (!ObjectId.isValid(idAdmin)) throw new ContentError(`${idAdmin} is not a valid id`)
    
        const admin = User.findById(idAdmin)

        if(!admin) throw new NotFoundError(`admin user with id ${idAdmin} not found`)
        
        if(admin.role === 'agent') throw new ConflictError(`user has no permissions`)
        
        const agents = await User.find({role: 'agent'})

        if(agents.length === 0) throw new NotFoundError(`No users`)
        
        const agentsList = await Promise.all( agents.map(async agent => {
            const calls = await Call.countDocuments({agent: agent.id})
            pendingCalls = await Call.countDocuments({statusCall: 'N.A', agent: agent.id})
            agent = {
                id: agent.id,
                name: agent.name,
                surname: agent.surname,
                calls,
                success: agent.profile.successVisits.length,
                pending: agent.profile.pendingVisits.length,
                fail: agent.profile.failVisits.length,
                pendingCalls
            }
            return agent
            
        })
        )
       
        return agentsList
        
    })()
}
