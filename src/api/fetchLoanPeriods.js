import axios from 'axios'

const API_URL = 'http://localhost:5000/requested-repayment-periods'

/**
 * Fetch loan periods from the API.
 * @returns {Promise<Array>} An array of loan periods fetched from the API.
 * @throws {Error} If there is an error fetching data from the API.
 */

export async function fetchLoanPeriods () {
  try {
    const response = await axios.get(`${API_URL}`)
    return response.data
  } catch (error) {
    throw new Error(error?.response.data.message || 'Failed to fetch data')
  } finally {
    // console.log('fetch finished')
  }
}
