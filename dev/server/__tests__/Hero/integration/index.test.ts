/* eslint-disable no-undef */
import request from 'supertest'
import app from '../../../src/app'
import { generateToken } from '@utils/index'

describe('Hero', () => {
  it('Should list heroes', async () => {
    const token = await generateToken({ id: '5e6a502032e09a6ee8f1e248' })

    const response = await request(app)
      .get('/heroes')
      .set({ Authorization: `Bearer ${token}` })

    expect(response.status).toBe(200)
  })

  it('Should find the heroes that contains id=5e72239b6d444c5857a5f94d', async () => {
    const token = await generateToken({ id: '5e6a502032e09a6ee8f1e248' })
    const id = '5e72239b6d444c5857a5f94d'
    const response = await request(app)
      .get(`/heroes/${id}`)
      .set({ Authorization: `Bearer ${token}` })

    expect(response.status).toBe(200)
  })

  it('Should create a new hero', async () => {
    const token = await generateToken({ id: '5e6a502032e09a6ee8f1e248' })

    const hero = {
      name: 'Hero Test',
      class: 'S',
      lat: -5.836597,
      lng: -35.236007
    }

    const response = await request(app)
      .post('/heroes')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        ...hero
      })

    expect(response.status).toBe(200)
  })

  it('Should update the hero that contains id=5e72239b6d444c5857a5f94d', async () => {
    const token = await generateToken({ id: '5e6a502032e09a6ee8f1e248' })

    const id = '5e72239b6d444c5857a5f94d'
    const hero = {
      name: 'Hero 1',
      class: 'A',
      lat: -5.836597,
      lng: -35.236007
    }

    const response = await request(app)
      .put(`/heroes/${id}`)
      .set({ Authorization: `Bearer ${token}` })
      .send({
        ...hero
      })

    expect(response.status).toBe(200)
  })

  // it('Should remove the hero that contains id=5e6fb4b8cebeb71d50abd7a7', async () => {
  //   const token = await generateToken({ id: '5e6a502032e09a6ee8f1e248' })

  //   const id = '5e6fb4b8cebeb71d50abd7a7'

  //   const response = await request(app)
  //     .delete(`/heroes/${id}`)
  //     .set({ Authorization: `Bearer ${token}` })

  //   expect(response.status).toBe(200)
  // })
})
