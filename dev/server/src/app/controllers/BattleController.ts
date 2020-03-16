import BattleModel, { Battle } from '../models/Battle'
import OccurenceModel, { Occurence } from '../models/Occurence'
import HeroModel, { Hero } from '../models/Hero'
import { Request, Response } from 'express'

class BattleController {
  public async start (req: Request, res: Response): Promise<Response<Battle>> {
    try {
      const { occurence }: { occurence: Occurence } = req.body
      let hero: Hero
      //   switch(occurence.level){
      //       case ''
      //   }

      return res.json(occurence)
    } catch (err) {
      return res.status(400).send({ error: true, message: 'Erro ao iniciar uma nova batalha', type: 'error' })
    }
  }

  public async list (req: Request, res: Response): Promise<Response<Battle>> {
    try {
      const Battles = await BattleModel.find()
      return res.json(Battles)
    } catch (err) {
      res.status(400).send({ error: true, message: 'Erro ao buscar o histórico de batalhas', type: 'error' })
    }
  }
}

export default new BattleController()
