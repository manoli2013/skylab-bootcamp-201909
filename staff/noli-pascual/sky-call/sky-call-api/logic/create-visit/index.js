const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { User, Visit, Client, Agent} } = require('sky-call-data')

module.exports = function(idAgent, idClient, dateVisit, statusVisit) {
    validate.string(idAgent)
    validate.string.notVoid('idAgent', idAgent)
    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    validate.string(statusVisit)
    validate.string.notVoid('statusVisit', statusVisit)
    

    // if (!ObjectId.isValid(idAgent)) throw new ContentError(`${idAgent} is not a valid id`)
    // if (!ObjectId.isValid(idClient)) throw new ContentError(`${idClient} is not a valid id`)

    return (async () => {
        const user = await User.findById(idAgent)

        if(!user) throw new NotFoundError(`user with id ${idAgent} not found`)
        if((user.role === 'agent') && user.profile === undefined) {
            user.profile = new Agent()
        }

        const clientFiltered = await Client.findById(idClient)

        if(!clientFiltered) throw new NotFoundError(`client with id ${idClient} not found`)
        
        dateVisit = new Date(dateVisit)

        const visit = await Visit.create({agent: idAgent, client: idClient, dateVisit, statusVisit})
  
        //extraer el agent
       
        switch(statusVisit) {
            case 'OK' : user.profile.successVisits.push(visit.id)
            break
            case 'NO' : user.profile.failVisits.push(visit.id)
            break
            case 'PDTE' : user.profile.pendingVisits.push(visit.id)
            break
        }
       
        await user.save()
        
        clientFiltered.visits.push(visit.id)
        await clientFiltered.save()//return visit.id
        
    return visit.id
    
    })()
}