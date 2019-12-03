const { Router } = require('express')
const { createClient, retrieveClient, createCall, createVisit, removeClient, updateClient, listCallsClient, listVisitsClient, searchClients} = require('../../logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const tokenVerifier = require('../../helpers/token-verifier')(SECRET)
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError, CredentialsError } } = require('sky-call-util')

const jsonBodyParser = bodyParser.json()

const router = Router()

//crear client

router.post('/', tokenVerifier, jsonBodyParser, (req, res) => {
    const { id, body: { nameClient, surnameClient, tel, location, address } } = req

    try {
        createClient(id, nameClient, surnameClient, tel, location,address)
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

//RETRIEVE CLIENT

router.get('/:idClient', tokenVerifier, (req, res) => {
    try {
        const { id, params: { idClient }} = req

        retrieveClient(id, idClient)
            .then(client => res.json(client))
            .catch(error => {
                const { message } = error

                if (error instanceof NotFoundError)
                    return res.status(404).json({ message })

                res.status(500).json({ message })
            })
    } catch (error) {
        const { message } = error

        res.status(400).json({ message })
    }
})

// //remove client

router.delete('/:idClient', tokenVerifier, (req, res) => {
    try {
        const { id, params: { idClient }} = req

        removeClient(id, idClient)
            .then(() => res.json())
            .catch(error => {
                const { message } = error

                if (error instanceof NotFoundError)
                    return res.status(404).json({ message })

                res.status(500).json({ message })
            })
    } catch (error) {
        const { message } = error

        res.status(400).json({ message })
    }
})

//update client

router.patch('/:idClient', tokenVerifier, jsonBodyParser, (req, res) => {
    try {
        const { id, params: { idClient }, body: { nameClient, surnameClient, tel, location, address } } = req

        updateClient(id, idClient, nameClient, surnameClient, tel, location, address)
            .then(() =>
                res.end()
            )
            .catch(error => {
                const { message } = error

                if (error instanceof NotFoundError)
                    return res.status(404).json({ message })
                if (error instanceof ConflictError)
                    return res.status(409).json({ message })

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

//pintar clientes con status "X"

router.get('/', tokenVerifier, (req, res) => {
    const { id , query: {call} } = req

    try {

        searchClients(id, call)
            .then(clients => res.json(clients))
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

//crear una llamada al apretar llamar

router.post('/:idClient/calls', tokenVerifier, jsonBodyParser, (req, res) => {
    const { id, params: { idClient }} = req

    try {
        createCall(id, idClient)
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

//update llamada del cliente

router.patch('/:idClient/calls/:idCall', tokenVerifier, jsonBodyParser, (req, res) => {
    const { id, params: { idClient, idCall} , body: { statusCall }} = req
    try {

        stopCall(id, idClient, idCall, statusCall)
            .then(() => res.end())
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

//crear una visita al apretar save

router.post('/:idClient/visits', tokenVerifier, jsonBodyParser, async (req, res) => {
    
    const { id, params: {idClient} , body: { dateVisit, statusVisit } } = req
        try {
    
            createVisit(id, idClient, dateVisit, statusVisit)
                .then(id => res.status(201).json({ id }))
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

//update visit(agent)

router.patch('/:idClient/visits/idVisit', tokenVerifier, jsonBodyParser, (req, res) => {
    try {
        const { id, params: { idClient, idVisit }, body: { dateVisit, statusVisit } } = req

        updateVisit(id, idClient, idVisit, dateVisit, statusVisit)
            .then(() => res.status(200).json({message: "updated"}))
            .catch(error => {
                const { message } = error

                if (error instanceof NotFoundError)
                    return res.status(404).json({ message })
                if (error instanceof ConflictError)
                    return res.status(409).json({ message })

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})





//listar llamadas en cada cliente

router.get('/:idClient/calls', tokenVerifier, jsonBodyParser, (req, res) => {
    const { id , params: {idClient} } = req
    try {

       listCallsClient(id, idClient)
            .then((calls) => res.json(calls))
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

//listar visits en cada cliente

router.get('/:idClient/visits', tokenVerifier, jsonBodyParser, (req, res) => {
    const { id , params: {idClient} } = req
    try {

       listVisitsClient(id, idClient)
            .then((calls) => res.json(calls))
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


//listar visitas en cada cliente

router.get('/:idClient/visits', tokenVerifier, jsonBodyParser, (req, res) => {
    const { id , params: {idClient} } = req
    try {

       listCallsClient(id, idClient)
            .then((visits) => res.json(visits))
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