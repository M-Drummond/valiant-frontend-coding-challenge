import { setActivePinia, createPinia } from 'pinia'
import { expect, describe, beforeEach, it } from 'vitest'
import { useLoanStore } from './LoanStore'

describe('Loan Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('loanValue is initialised null', () => {
    const ls = useLoanStore()
    const value = ls.loanValue
    expect(value).toBe(null)
  })
  it('selectedPurpose is not init null', () => {
    const ls = useLoanStore()
    const value = ls.selectedPurpose
    expect(value).not.toBe(null)
  })
  it('selectedTerm is not init null', () => {
    const ls = useLoanStore()
    const value = ls.selectedTerm
    expect(value).not.toBe(null)
  })
  it('selectedPeriod is not init null', () => {
    const ls = useLoanStore()
    const value = ls.selectedPeriod
    expect(value).not.toBe(null)
  })
})
