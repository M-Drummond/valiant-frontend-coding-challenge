import { defineStore } from 'pinia'
import { fetchPurposes } from '../api/fetchPurposes.js'
import { fetchLoanTerms } from '../api/fetchLoanTerms.js'
import { fetchLoanPeriods } from '../api/fetchLoanPeriods.js'

import PMT from '../utils/PMT.js'

export const useLoanStore = defineStore('loanStore', {
  state: () => ({
    // available options
    purposes: [],
    terms: [],
    periods: [],
    // user inputs:
    selectedPurpose: {},
    selectedTerm: {},
    selectedPeriod: {},
    loanValue: null,
  }),
  actions: {
    async fillPurposes () {
      try {
        const fetchedData = await fetchPurposes()

        // we keep both because we may want to modify (filter etc in the future )
        const modifiedData = fetchedData

        // assign it to the store data
        this.purposes = modifiedData ?? []
        this.selectedPurpose = this.purposes[0]
      } catch (error) {
        // console.error('Error fetching data:', error)
        // Handle error or throw it further
      }
    },
    async fillTerms () {
      try {
        // similar to fillPurposes ()
        const fetchedData = await fetchLoanTerms()
        const modifiedData = fetchedData
        this.terms = modifiedData ?? []
        this.selectedTerm = this.terms[2]
      } catch (error) {
        // console.error('Error fetching data:', error)
      }
    },
    async fillPeriods () {
      try {
        // similar to fillPurposes ()
        const fetchedData = await fetchLoanPeriods()
        const modifiedData = fetchedData
        this.periods = modifiedData ?? []
        this.selectedPeriod = this.periods[2]
      } catch (error) {
        // console.error('Error fetching data:', error)
      }
    },
    monthlyRepaymentsAmount () {
      //
      /*
      Example of a $30,000 loan amount at a rate of 10% per year over 2 years, paid monthly.
      PMT(
      0.1 / 12, // Divide the annual rate by the number of monthly repayment periods in the year.
        24, // 2 year loan term means there are 24 monthly repayment periods.
      30000 // Present value, i.e., the principal of the loan, is 30000.
      )
      */

      const P = this.selectedPurpose.annualRate / 12 // the annualised rate
      const M = this.selectedPeriod.value // the amount of repayment periods
      const T = parseInt(this.loanValue) // Present value, i.e., the principal of the loan, is 30000

      console.log(P, M, T)

      const calculationResult = PMT(P, M, T)
      // output calculation as a positive, round number ready for display.
      return Math.round(calculationResult * -1)
    },
    totalRepaymentsCount () {
      return (this.selectedPeriod.value * this.selectedTerm.value)
    },
    totalRepaymentsAmount () {
      return (this.selectedPeriod.value * this.selectedTerm.value)
    },
  },
})
