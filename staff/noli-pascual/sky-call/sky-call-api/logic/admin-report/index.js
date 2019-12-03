const { validate, errors: { NotFoundError } } = require('sky-call-util')
const {models: { User, Visit, Call}, ObjectId } = require('sky-call-data')

module.exports = function (idAdmin) {
    
    return (async () => {

        validate.string(idAdmin)
        validate.string.notVoid('idAdmin', idAdmin)
        //validación de Mongo
        if (!ObjectId.isValid(idAdmin)) throw new ContentError(`${idAdmin} is not a valid id`)
    
        const admin = User.findById(idAdmin)
        const agents = User.find({role: 'agent'})

        if(!admin) throw new NotFoundError(`admin user with id ${idAdmin} not found`)
        
        if(admin.role === 'agent') throw new ConflictError(`user has no permissions`)

        if(agents.length === 0) throw new NotFoundError(`No users in route ${idRoute}`)
        
        
        let calls = await Call.countDocuments()
        let answered = await Call.countDocuments({statusCall: 'A'})
        let pending = await Call.countDocuments({statusCall: 'N.A'})
        let visits =  await Visit.countDocuments({status: 'OK'})
        let fails = await Visit.countDocuments({status: 'OK'})
        let calling = await Call.countDocuments({calling: true})
        
        
        const agentsReport = {
            calls,
            answered,
            pending,
            visits,
            fails,
            calling
        }
        
        return agentsReport
        
    })()
}
