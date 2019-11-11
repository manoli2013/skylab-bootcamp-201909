const call = require('../../helpers/call')
const validate = require('../../utils/validate')

module.exports = function(id, token) {
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(token)
    validate.string.notVoid('token', token)
    validate.function(callback)

    return new Promise((resolve, reject) => {

        call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
            if (result.error) return reject(new Error(result.error))
    
            const { data: { favs = [] } } = result
    
            let counter = 0, error
    
            if (favs.length)
                for (let i = 0; i < favs.length && !error; i++) {
                    call('GET', undefined, `https://duckling-api.herokuapp.com/api/ducks/${favs[i]}`, undefined, result2 => {
                        if (result2.error) return reject(error = new Error(result2.error))
    
                        result2.image = result2.imageUrl
    
                        delete result2.imageUrl
    
                        favs[i] = result2
    
                        //if (++counter === favs.length) callback(undefined, favs)
                        ++counter === favs.length && resolve(favs)
                    })
                }
            else resolve(favs)
        })

    })
}