import { Router, Application } from 'express'
import AuthController from '@controllers/auth/Authenticate'

const routes = Router()

routes.post('/login', AuthController.login)

module.exports = (app: Application) => app.use('/auth', routes)
