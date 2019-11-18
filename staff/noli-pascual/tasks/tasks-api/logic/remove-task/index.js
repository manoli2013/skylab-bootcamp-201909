const validate = require('../../utils/validate')
const { NotFoundError } = require('../../utils/errors')
const database = require('../../utils/database')
const { ObjectId } = database

module.exports = function (id, taskId) {
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

                    return tasks.findOne({ _id: ObjectId(taskId) }, { user: ObjectId(id) })
                        .then(task => {
                            if (!task) throw new NotFoundError(`user does not have task with id ${taskId}`)

                            tasks.deleteOne({ _id: ObjectId(taskId) })

                        })
                })
        })
}