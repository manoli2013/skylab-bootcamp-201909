const call = require('../../helpers/call')
const { ContentError } = require('../../utils/errors')

module.exports = function(id, token, query, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
    if (!id.trim().length) throw new ContentError('id is empty or blank')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!token.trim().length) throw new ContentError('token is empty or blank')
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    return new Promise((resolve, reject) => {
        

        call('GET', undefined, query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search', undefined, result => {
            if (result.error) reject(new Error(result.error))

            return new Promise ((resolve, reject) => {

                call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result2 => {
                    if (result2.error) reject(new Error(result2.error))
        
                    const { data: { favs = [] } } = result2
        
                    result.map(duck => { // normalize image url to image
                        duck.image = duck.imageUrl
        
                        delete duck.imageUrl
        
                        duck.isFav = favs.includes(duck.id)
                    })
        
                    resolve() //vacío
                })

            })
    
        })

    })

}