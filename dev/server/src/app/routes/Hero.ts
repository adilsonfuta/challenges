import { Router, Application } from 'express'
import auth from '@middlewares/Authenticate'
import HeroController from '@controllers/HeroController'

const routes = Router()
routes.use(auth)

routes.get('/', HeroController.list)
routes.post('/', HeroController.create)
routes.get('/:id', HeroController.index)
routes.put('/:id', HeroController.update)
routes.delete('/:id', HeroController.delete)

module.exports = (app:Application) => app.use('/heroes', routes)
