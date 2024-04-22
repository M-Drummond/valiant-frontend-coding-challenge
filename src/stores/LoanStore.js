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
    * @function return `true/false` if the input as between the min/max values
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

    monthlyRepaymentsAmount () {
      const ratePerPeriod = this.selectedPurpose.annualRate / this.selectedPeriod.value
      const totalRepayments = this.selectedTerm.value / 12 * this.selectedPeriod.value
      const loanAmount = this.loanValue

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
