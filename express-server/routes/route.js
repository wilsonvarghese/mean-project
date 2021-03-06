// Import dependencies
const express = require('express');
const router = express.Router();

var User = require('../models/user');
var user_api = require('../api/user-api');

/* GET api listing. */
router.get('/', (req, res) => {
		res.send('api works');
});

/* GET all users. */
router.get('/users', (req, res) => {
    user_api.GetAllUsers(req, res);
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
    user_api.GetUserById(req, res);
});

/* Create a user. */
router.post('/users', (req, res) => {
    user_api.AddNewUser(req, res);
});

module.exports = router;
