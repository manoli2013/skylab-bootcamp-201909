const { Router } = require('express')
const { createCall, updateCall, stopCall, searchClients, retrieveCall, listCallsAdmin } = require('../../logic')
const { env: { SECRET } } = process
const tokenVerifier = require('../../helpers/token-verifier')(SECRET)
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError } } = require('sky-call-util')

const jsonBodyParser = bodyParser.json()

const router = Router()


//LIST CALLS ADMIN
router.get('/', tokenVerifier, (req, res) => {

    const { id } = req

    try {

        listCallsAdmin(id)
            .then(calls => res.json(calls))
            .catch(error => {
                const { message } = error

                if (error instanceof NotFoundError)
                    return res.status(404).json({ message })

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})



// router.patch('/:taskId', tokenVerifier, jsonBodyParser, (req, res) => {
//     try {
//         const { id, params: { taskId }, body: { title, description, status } } = req

//         modifyTask(id, taskId, title, description, status)
//             .then(() =>
//                 res.end()
//             )
//             .catch(error => {
//                 const { message } = error

//                 if (error instanceof NotFoundError)
//                     return res.status(404).json({ message })
//                 if (error instanceof ConflictError)
//                     return res.status(409).json({ message })

//                 res.status(500).json({ message })
//             })
//     } catch ({ message }) {
//         res.status(400).json({ message })
//     }
// })

// router.delete('/:taskId', tokenVerifier, (req, res) => {
//     try {
//         const { id, params: { taskId } } = req

//         removeTask(id, taskId)
//             .then(() =>
//                 res.end()
//             )
//             .catch(error => {
//                 const { message } = error

//                 if (error instanceof NotFoundError)
//                     return res.status(404).json({ message })
//                 if (error instanceof ConflictError)
//                     return res.status(409).json({ message })

//                 res.status(500).json({ message })
//             })
//     } catch ({ message }) {
//         res.status(400).json({ message })
//     }
// })

module.exports = router