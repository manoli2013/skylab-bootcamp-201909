const validate = require('../../utils/validate')
const users = require('../../data/users')()


module.exports = function () {

    return new Promise((resolve, reject) => {
       
        users.persist().then(users =>  resolve(users), console.log(users))
    })
}
