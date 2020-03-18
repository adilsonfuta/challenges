/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'
import { generateToken } from '@utils/index'

describe('Battle', () => {
  it('Should simulate a battle and save a new battle with occurrence and hero', async () => {
    jest.setTimeout(65000)
    const token = await generateToken({ id: '5e6a502032e09a6ee8f1e248' })
    const occurrence = {
      name: 'Occurrence test',
      level: 'Dragon',
      lat: -1.000,
      lng: -5.403
    }

    const response = await request(app)
      .post('/battles')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        occurrence
      })

    expect(response.status).toBe(200)
  })

  it('Should list all battles', async () => {
    const token = await generateToken({ id: '5e6a502032e09a6ee8f1e248' })
    const response = await request(app)
      .get('/battles')
      .set({ Authorization: `Bearer ${token}` })

    expect(response.status).toBe(200)
  })
})
