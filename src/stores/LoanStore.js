import { defineStore } from 'pinia'
import { fetchPurposes } from '../api/fetchPurposes.js'
import { fetchLoanTerms } from '../api/fetchLoanTerms.js'
import { fetchLoanPeriods } from '../api/fetchLoanPeriods.js'

export const useLoanStore = defineStore('loanStore', {
  state: () => ({
    purposes: [],
    terms: [],
    periods: [],
  }),
  actions: {
    async fillPurposes () {
      try {
        const fetchedData = await fetchPurposes()

        // we keep both because we may want to modify (filter etc in the future )
        const modifiedData = fetchedData

        console.log(modifiedData)
        // assign it to the store data
        this.purposes = modifiedData ?? []
      } catch (error) {
        console.error('Error fetching data:', error)
        // Handle error or throw it further
      }
    },
    async fillTerms () {
      try {
        // similar to fillPurposes ()
        const fetchedData = await fetchLoanTerms()
        const modifiedData = fetchedData
        this.terms = modifiedData ?? []
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async fillPeriods () {
      try {
        // similar to fillPurposes ()
        const fetchedData = await fetchLoanPeriods()
        const modifiedData = fetchedData
        this.periods = modifiedData ?? []
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
  },
})
