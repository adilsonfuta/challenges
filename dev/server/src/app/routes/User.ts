import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes.get('/', UserController.list)

module.exports = app => app.use('/users', routes)
