/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'

describe('Start a Battle', () => {
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNmE1MDIwMzJlMDlhNmVlOGYxZTI0OCIsImlhdCI6MTU4NDQ1Mzc1NSwiZXhwIjoxNTg0NTQwMTU1fQ.i-yMHEj3okGGhBEtYlUV94QILf4Biurd51Iz915sGE0'
  it('Should simulate a battle and save a new battle with occurrence and hero', async () => {
    jest.setTimeout(65000)

    const occurrence = {
      name: 'Occurrence test',
      level: 'Dragon',
      lat: -1.000,
      lng: -5.403
    }

    const response = await request(app)
      .post('/battles')
      .set({ Authorization: token })
      .send({
        occurrence
      })

    expect(response.status).toBe(200)
  })
})
