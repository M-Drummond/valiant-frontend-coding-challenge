import axios from 'axios'

const API_URL = 'http://localhost:5000/requested-repayment-periods'

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
