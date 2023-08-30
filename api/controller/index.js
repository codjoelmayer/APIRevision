const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const {users} = require('../models')

routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
module.exports = {
    express,
    routes
}