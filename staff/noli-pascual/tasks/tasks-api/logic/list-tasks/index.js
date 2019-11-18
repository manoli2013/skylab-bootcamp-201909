const validate = require('../../utils/validate')
const database = require('../../utils/database')
const { ObjectId } = database
const { NotFoundError } = require('../../utils/errors')
module.exports = function(id) {
  validate.string(id)
  validate.string.notVoid('id', id)
  const client = database()
  return client.connect()
    .then(connection => {
      const db = connection.db()
      users = db.collection('users')
      tasks = db.collection('tasks')
      return users.findOne({ _id: ObjectId(id) })
        .then(user => {
          if (!user) throw new NotFoundError(`user with id ${id} not found`)
          return tasks.find({ user: ObjectId(id) }).toArray()
            .then(list => {
              list.forEach((elem) => {
                tasks.updateOne({ _id: ObjectId(elem._id.toString()) }, { $set: { lastAccess: new Date } })
              })
            })
            .then(() => {
              return tasks.find({ user: ObjectId(id) }).toArray()
            })
        })
    })
}


// const validate = require('../../utils/validate')
// const database = require('../../utils/database')
// const { ObjectId } = database
// const { NotFoundError } = require('../../utils/errors')
// ​
// module.exports = function(id) {
//   validate.string(id)
//   validate.string.notVoid('id', id)
// ​
//   const client = database()
//   return client.connect()
//     .then(connection => {
//       const db = connection.db()
// ​
//       users = db.collection('users')
//       tasks = db.collection('tasks')
// ​
//       return users.findOne({ _id: ObjectId(id) })
//         .then(user => {
//           if (!user) throw new NotFoundError(`user with id ${id} not found`)
// ​
//           return tasks.find({ user: ObjectId(id) }).toArray()
//             .then(list => {
//               list.forEach((elem) => {
//                 tasks.updateOne({ _id: ObjectId(elem._id.toString()) }, { $set: { lastAccess: new Date } })
//               })
//             })
//             .then(() => {
//               return tasks.find({ user: ObjectId(id) }).toArray()
//             })
//         })
//     })
// }