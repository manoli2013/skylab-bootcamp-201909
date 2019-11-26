//indexamos todos los Schemas para que estén disponibles en models.js
module.exports = {
    user: require('./user'),
    admin: require('./admin'),
    agent: require('./agent'),
    route: require('./route'),
    client: require('./client'),
    call: require('./call'),
    visit: require('./visit')
}