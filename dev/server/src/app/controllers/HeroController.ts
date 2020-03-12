import HeroModel, { Hero } from '../models/Hero'
import { Request, Response } from 'express'
import { Crud } from '../common/crud'

class HeroController implements Crud<Hero> {
  public async index (req: Request, res: Response): Promise<Response<Hero>> {
    try {
      const { id } = req.params
      const hero = await HeroModel.findById(id)
      return res.json(hero)
    } catch (err) {
      res.status(400).send({ message: 'Erro ao buscar o herói' })
    }
  }

  public async create (req: Request, res: Response): Promise<Response<Hero>>  {
    try {
      const hero = await HeroModel.create(req.body)
      return res.json(hero)
    }catch(err){
      return res.status(400).send({ message: 'Erro ao cadastrar o herói' })
    }
  }

  public async list (req: Request, res: Response): Promise<Response<Hero>> {
    try {
      const heros = await HeroModel.find()
      return res.json(heros)
    } catch (err) {
      res.status(400).send({ message: 'Erro ao buscar os heróis' })
    }
  }

  public async update (req: Request, res: Response): Promise<Response<Hero>> {
    try{
      const { id } = req.params
      const hero = await HeroModel.findById(id)
      await hero.set(req.body)
      await hero.save()
      return res.send({ hero })
    }catch(error){
      return res.status(400).send({ error: 'Erro ao editar o herói'})
    }
  }

  public async delete (req: Request, res: Response): Promise<Response<string>> {
    try{
      const { id } = req.params
      await HeroModel.findByIdAndDelete(id)
      return res.json({ message: 'Herói deletado com sucesso.'})
    }catch(error){
      return res.status(400).send({ error: 'Erro ao deletar o herói'})
    }
  }

  
}

export default new HeroController()
