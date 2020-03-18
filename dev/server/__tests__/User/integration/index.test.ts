/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'

describe('User', () => {
  it('Should list users', async () => {
    const response = await request(app)
      .get('/users')

    expect(response.status).toBe(200)
  })

  it('Should find the user that contains id=5e722606029e9e360c98a0d9', async () => {
    const id = '5e722606029e9e360c98a0d9'
    const response = await request(app)
      .get(`/users/${id}`)

    expect(response.status).toBe(200)
  })

  it('Should create a new user', async () => {
    const user = {
      name: 'ZRPTeste 2',
      login: 'teste2@zrp.com',
      password: '12348765'
    }

    const response = await request(app)
      .post('/users')
      .send({
        ...user
      })

    expect(response.status).toBe(200)
  })

  it('Should update the user that contains id=5e722606029e9e360c98a0d9', async () => {
    const id = '5e722606029e9e360c98a0d9'
    const user = {
      name: 'ZRPTeste 01',
      login: 'teste01@zrp.com',
      password: '12348765'
    }

    const response = await request(app)
      .put(`/users/${id}`)
      .send({
        ...user
      })

    expect(response.status).toBe(200)
  })

  // it('Should remove the user that contains id=5e722606029e9e360c98a0d9', async () => {

  //   const id = '5e722606029e9e360c98a0d9'

  //   const response = await request(app)
  //     .delete(`/users/${id}`)

  //   expect(response.status).toBe(200)
  // })
})
