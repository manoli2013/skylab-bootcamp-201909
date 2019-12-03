const { Router } = require('express')
const { createRoute, listClients } = require('../../logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const tokenVerifier = require('../../helpers/token-verifier')(SECRET)
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError, CredentialsError } } = require('sky-call-util')

const jsonBodyParser = bodyParser.json()

const router = Router()

router.post('/', tokenVerifier, jsonBodyParser, (req, res) => {
    const { id, body: { location } } = req

    try {
        createRoute(id, location)
            .then(() => res.status(201).end())
            .catch(error => {
                const { message } = error

                if (error instanceof ConflictError)
                    return res.status(409).json({ message })

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

//LIST CLIENTS BY ROUTE
router.get('/:idRoute/clients', tokenVerifier, (req, res) => {
    const { id , params: {idRoute} } = req
    try {

        listClients(id, idRoute)
            .then(clients=> res.json(clients))
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



module.exports = router