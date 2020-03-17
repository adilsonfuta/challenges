/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'

describe('Start a Battle', () => {
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmE1MDIwMzJlMDlhNmVlOGYxZTI0OCIsImlhdCI6MTU4NDQ1Mzc1NSwiZXhwIjoxNTg0NTQwMTU1fQ.i-yMHEj3okGGhBEtYlUV94QILf4Biurd51Iz915sGE0'

  it('Should simulate a battle and save a new battle with occurence and hero', async () => {
    const occurence = {
      name: 'Occurence test',
      level: 'Dragon',
      lat: -1.000,
      lng: -5.403
    }

    const response = await request(app)
      .post('/battles')
      .set({ Authorization: token })
      .send({
        occurence
      })

    expect(response.status).toBe(200)
  })
})
