const { Router } = require('express')
const { createVisit, updateVisit } = require('../../logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const tokenVerifier = require('../../helpers/token-verifier')(SECRET)
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError, CredentialsError } } = require('sky-call-util')

const jsonBodyParser = bodyParser.json()

const router = Router()







module.exports = router