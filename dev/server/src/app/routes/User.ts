import { Router, Application } from 'express'
import UserController from '@controllers/UserController'

const routes = Router()

routes.get('/', UserController.list)
routes.post('/', UserController.create)
routes.get('/:id', UserController.index)
routes.put('/:id', UserController.update)
routes.delete('/:id', UserController.delete)

module.exports = (app:Application) => app.use('/users', routes)
