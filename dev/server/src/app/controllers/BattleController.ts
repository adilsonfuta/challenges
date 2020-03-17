import BattleModel, { Battle } from '@models/Battle'
import OccurenceModel, { Occurence } from '@models/Occurence'
import HeroModel, { Hero } from '@models/Hero'
import { Request, Response } from 'express'

class BattleController {
  public async start (req: Request, res: Response): Promise<Response<Battle>> {
    try {
      const { occurence }: { occurence: Occurence } = req.body

      let hero:Hero[] | undefined
      let battle:Battle | undefined

      switch (occurence.level) {
        case 'God':
          hero = await HeroModel.find().where('class').equals('S')
          break
        case 'Tiger':
          hero = await HeroModel.find().where('class').equals('A')
          break
        case 'Dragon':
          hero = await HeroModel.find().where('class').equals('B')
          break
        case 'Wolf':
          hero = await HeroModel.find().where('class').equals('C')
          break
        default:
          break
      }

      if (!hero || hero.length === 0) return res.status(404).send({ error: true, message: 'Nenhum herói com a classe adequada para combater a ameçada.', type: 'error' })

      const selectedHero = (hero as Hero[])[0]
      await selectedHero.set({ allocated: true })
      await selectedHero.save()

      await setTimeout(async () => {
        await selectedHero.set({ allocated: false })
        await selectedHero.save()
        const selectedOccurence = await OccurenceModel.create(occurence)
        battle = await BattleModel.create({ occurence: selectedOccurence, hero: selectedHero })
      }, 4000)

      return res.json(battle)
    } catch (err) {
      return res.status(400).send({ error: true, message: 'Erro ao iniciar uma nova batalha', type: 'error' })
    }
  }

  public async list (req: Request, res: Response): Promise<Response<Battle>> {
    try {
      const Battles = await BattleModel.find().populate(['occurence', 'hero'])
      return res.json(Battles)
    } catch (err) {
      res.status(400).send({ error: true, message: 'Erro ao buscar o histórico de batalhas', type: 'error' })
    }
  }
}

export default new BattleController()
