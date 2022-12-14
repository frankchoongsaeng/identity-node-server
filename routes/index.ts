import { Request, Response, NextFunction } from 'express'
import { middleware } from 'express-openapi-validator';
import profileRouter from './profile'

const express = require('express')
const router = express.Router()

const apiOASValidatorMiddleware = middleware({
    apiSpec: './openapi.json',
    validateRequests: true, // (default)
    validateResponses: true, // false by default
  })

router.use('/profile', apiOASValidatorMiddleware, profileRouter)

export default router
