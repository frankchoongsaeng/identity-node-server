import { Request, Response } from 'express'

const express = require('express')
const router = express.Router()

/* GET profile listings for user. */
router.get('/', function (_: Request, res: Response<Profile[]>) {
	res.send(profiles)
})

/* POST create a profile  and add to profile listings for user. */
router.post('/', function (req: Request<Profile>, res: Response<Profile>) {
	const profile = req.body
	profiles.push(profile)
	res.status(201).send(profile)
})

export default router

const profiles: Profile[] = [
	{
		profileDescription: 'Main Profile',
		firstName: 'Chukwuebuka',
		middleName: 'Choongsaeng',
		lastName: 'Nwokafor',
		email: 'frankchoongsaeng@gmail.com'
	},
	{
		profileDescription: 'Default'
	}
]
