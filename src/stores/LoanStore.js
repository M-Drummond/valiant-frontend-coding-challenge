import { defineStore } from 'pinia'
import { fetchPurposes } from '../api/fetchPurposes.js'
import { fetchLoanTerms } from '../api/fetchLoanTerms.js'
import { fetchLoanPeriods } from '../api/fetchLoanPeriods.js'

import PMT from '../utils/PMT.js'

/**
* Store of all vue functionality used in the app/widget
*/

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
    // form validation check
    loanValueValid: false,
  }),
  actions: {

    /**
    * @function store an array of purposes in the store as `this.purposes`
    **/

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

    /**
    * @function store an array of terms in the store as `this.terms`
    **/

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

    /**
    * @function store an array of periods in the store as `this.periods`
    **/

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

    /**
    * @return `true/false` if the input as between the min/max values
    **/

    loanValueIsValid () {
      if (this.loanValue >= 1000 && this.loanValue <= 20000000) {
        console.log(this.loanValue)
        this.loanValueValid = true
      } else {
        this.loanValueValid = false
      }
    },

    /**
    * @function calculates the repayment amounts using the PMT function
    * @returns { number }
    */

    /**
      @Example a $30,000 loan amount at a rate of 10% per year over 2 years, paid monthly.
      PMT(
      0.1 / 12, // Divide the annual rate by the number of monthly repayment periods in the year.
        24, // 2 year loan term means there are 24 monthly repayment periods.
      30000 // Present value, i.e., the principal of the loan, is 30000.
      )
      @Example PMT(0.1,24,30000)
      @returns {number} 1384
    */

    monthlyRepaymentsAmount () {
      const ratePerPeriod = this.selectedPurpose.annualRate / this.selectedPeriod.value
      const totalRepayments = this.selectedTerm.value / 12 * this.selectedPeriod.value
      const loanAmount = this.loanValue

      // console.log(ratePerPeriod, totalRepayments, loanAmount)

      const calculationResult = PMT(ratePerPeriod, totalRepayments, loanAmount)
      // output calculation as a positive, round number ready for display.
      return Math.round(calculationResult * -1)
    },

    /**
    * @function calculates _how many_ repayments are to be made.
    * @returns { number } total number
    */
    totalRepaymentsAmount () {
      const totalRepayments = this.selectedTerm.value / 12 * this.selectedPeriod.value
      return (totalRepayments * this.monthlyRepaymentsAmount())
    },
  },
})
