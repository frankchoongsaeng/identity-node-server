import { Request, Response, NextFunction } from 'express'
import { middleware } from 'express-openapi-validator';
import profileRouter from './profile'

var express = require('express')
var router = express.Router()

router.use(
  middleware({
    apiSpec: './openapi.json',
    validateRequests: true, // (default)
    validateResponses: true, // false by default
  }),
);

router.use('/profile', profileRouter)

export default router
