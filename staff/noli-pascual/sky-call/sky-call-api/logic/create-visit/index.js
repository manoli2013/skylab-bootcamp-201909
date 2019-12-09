const { validate, errors: { NotFoundError, ContentError } } = require('sky-call-util')
const { ObjectId, models: { User, Visit, Client, Agent} } = require('sky-call-data')

/**
 * create call
 * 
 * @param {string} id user 
 * @param {String} idClient client
 
 * 
 * @returns {Promise}
 * 
 */

module.exports = function(idUser, idClient, dateVisit, statusVisit) {
    validate.string(idUser)
    validate.string.notVoid('idUser', idUser)
    validate.string(idClient)
    validate.string.notVoid('idClient', idClient)
    validate.string(statusVisit)
    validate.string.notVoid('statusVisit', statusVisit)
    

    if (!ObjectId.isValid(idUser)) throw new ContentError(`${idUser} is not a valid id`)
    if (!ObjectId.isValid(idClient)) throw new ContentError(`${idClient} is not a valid id`)

    return (async () => {
        const user = await User.findById(idUser)

        if(!user) throw new NotFoundError(`user with id ${idUser} not found`)

        const clientFiltered = await Client.findById(idClient)

        if(!clientFiltered) throw new NotFoundError(`client with id ${idClient} not found`)
        
        dateVisit = new Date(dateVisit)

        const visit = await Visit.create({agent: idUser, client: idClient, dateVisit, statusVisit})
     

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