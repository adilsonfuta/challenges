/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'

describe('Start a Battle', () => {
  it('Should simulate a battle and save a new battle with occurence and hero', async () => {
    const occurence = {
      name: 'Occurence test',
      level: 'Dragon',
      lat: -1.000,
      lng: -5.403
    }

    const response = await request(app)
      .post('/battles')
      .send({
        occurence
      })

    expect(response.status).toBe(200)
  })
})
