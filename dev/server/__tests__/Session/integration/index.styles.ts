/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'

describe('Session', () => {
  it('Should do login using user credentials', async () => {
    const credentials = {
      login: 'admin@zrp.com',
      password: '12345678'
    }

    const response = await request(app)
      .post('/auth/login')
      .send({
        ...credentials
      })

    expect(response.status).toBe(200)
  })
})
