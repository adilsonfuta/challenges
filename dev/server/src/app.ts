import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

class App {
    public express:express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void{
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect('mongodb+srv://zrpuser:zrp@heros123@cluster0-ab55r.mongodb.net/zrpheros?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
    }

    private routes (): void {
      require('./app/routes')(this.express)
    }
}

export default new App().express
