"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
/* GET profile listings for user. */
router.get('/', function (_, res) {
    res.send(profiles);
});
/* POST create a profile  and add to profile listings for user. */
router.post('/', function (req, res) {
    const profile = req.body;
    profiles.push(profile);
    res.status(201).send(profile);
});
exports.default = router;
const profiles = [
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
];
