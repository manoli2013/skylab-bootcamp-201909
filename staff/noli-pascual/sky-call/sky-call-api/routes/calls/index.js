const { Router } = require('express')
const { callsReport } = require('../../logic')
const { env: { SECRET } } = process
const tokenVerifier = require('../../helpers/token-verifier')(SECRET)
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError } } = require('sky-call-util')

const jsonBodyParser = bodyParser.json()

const router = Router()


//CALLS REPORT ADMIN
router.get('/', tokenVerifier, (req, res) => {

    const { id } = req

    try {

        callsReport(id)
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


module.exports = router