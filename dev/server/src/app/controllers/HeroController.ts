import HeroModel, { Hero } from '../models/Hero'
import { Request, Response } from 'express'
import { Crud } from '@common/crud'

class HeroController implements Crud<Hero> {
  public async index (req: Request, res: Response): Promise<Response<Hero>> {
    try {
      const { id } = req.params
      const hero = await HeroModel.findById(id)
      return res.json(hero)
    } catch (err) {
      return res.status(400).send({ error: true, message: 'Erro ao buscar o herói', type: 'error' })
    }
  }

  public async create (req: Request, res: Response): Promise<Response<Hero>> {
    try {
      const hero = await HeroModel.create(req.body)
      return res.json(hero)
    } catch (err) {
      return res.status(400).send({ error: true, message: 'Erro ao cadastrar o herói', type: 'error' })
    }
  }

  public async list (req: Request, res: Response): Promise<Response<Hero>> {
    try {
      const heroes = await HeroModel.find()
      return res.json(heroes)
    } catch (err) {
      res.status(400).send({ error: true, message: 'Erro ao buscar os heróis', type: 'error' })
    }
  }

  public async update (req: Request, res: Response): Promise<Response<Hero>> {
    try {
      const { id } = req.params
      const hero:Hero = await HeroModel.findById(id)
      await hero.set(req.body)
      await hero.save()
      const heroes = await HeroModel.find()
      return res.json(heroes)
    } catch (error) {
      return res.status(400).send({ error: true, message: 'Erro ao editar o herói', type: 'error' })
    }
  }

  public async delete (req: Request, res: Response): Promise<Response<string>> {
    try {
      const { id } = req.params
      await HeroModel.findByIdAndDelete(id)
      const heroes = await HeroModel.find()
      return res.json(heroes)
    } catch (error) {
      return res.status(400).send({ error: true, message: 'Erro ao deletar o herói', type: 'error' })
    }
  }
}

export default new HeroController()
