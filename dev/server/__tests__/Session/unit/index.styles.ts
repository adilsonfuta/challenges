/* eslint-disable no-undef */
import { generateToken } from '@utils/index'

describe('Session', () => {
  it('Should create a token to user authenticated', async () => {
    const id = '5e6a502032e09a6ee8f1e248'

    const token = await generateToken({ id })

    expect(typeof token).toBe('string')
  })
})
