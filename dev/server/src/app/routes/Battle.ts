import { Router, Application } from 'express'
import auth from '@middlewares/Authenticate'
import BattleController from '@controllers/BattleController'

const routes = Router()
routes.use(auth)

routes.get('/', BattleController.list)
routes.post('/', BattleController.start)

module.exports = (app:Application) => app.use('/battles', routes)
