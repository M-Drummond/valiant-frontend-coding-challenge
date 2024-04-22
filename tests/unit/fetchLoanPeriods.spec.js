import { fetchLoanPeriods } from '@/api/fetchLoanPeriods.js'

import { expect, describe, it } from 'vitest'

describe('fetchLoanPeriods', () => {
  try {
    it('fetches from an API', async () => {
      const response = await fetchLoanPeriods()
      expect(response).toBeDefined()
      response.forEach((item, index) => {
        expect(item).toHaveProperty('label')
        expect(item).toHaveProperty('value')
      })
    })
  } catch (error) {
    console.error(error)
  }
})
