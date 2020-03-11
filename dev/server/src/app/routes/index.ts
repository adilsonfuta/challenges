import fs from 'fs'
import { resolve } from 'path'

module.exports = app => {
  fs
    .readdirSync(__dirname)
    .filter((file:string) => ((file.indexOf('.')) !== 0 && (file !== 'index.ts')))
    .forEach((file:string) => require(resolve(__dirname, file))(app))
}
