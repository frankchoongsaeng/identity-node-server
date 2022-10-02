"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_openapi_validator_1 = require("express-openapi-validator");
const profile_1 = __importDefault(require("./profile"));
var express = require('express');
var router = express.Router();
router.use((0, express_openapi_validator_1.middleware)({
    apiSpec: './openapi.json',
    validateRequests: true,
    validateResponses: true, // false by default
}));
router.use('/profile', profile_1.default);
exports.default = router;
