// Clone of the Microsoft Excel PMT function, see here for more information - https://support.microsoft.com/en-us/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441

/**
 * Calculates the payment amount for a loan or investment based on constant payments and a constant interest rate.
 * @param {number} rate - The interest rate per period.
 * @param {number} nper - The total number of payment periods.
 * @param {number} pv - The present value, or the total loan amount.
 * @param {number} [fv=0] - The future value, or a cash balance you want to attain after the last payment.
 * @param {number} [type=0] - The timing of the payment: 0 for end-of-period payments, 1 for beginning-of-period payments.
 * @returns {number} The payment amount per period.
 * @Example a $30,000 loan amount at a rate of 10% per year over 2 years, paid monthly.
 * PMT(
 * 0.1 / 12, // Divide the annual rate by the number of monthly repayment periods in the year.
 *   24, // 2 year loan term means there are 24 monthly repayment periods.
 * 30000 // Present value, i.e., the principal of the loan, is 30000.
 * )
 * @Example PMT(0.1,24,30000)
 * @returns {number} 1384
 *
 */

function PMT (rate, nper, pv, fv = 0, type = 0) {
  const pvif = Math.pow(1 + rate, nper)
  return rate === 0
    ? -(fv + pv) / nper
    : -(rate * (fv + pvif * pv)) / ((-1 + pvif) * (1 + rate * type))
}

export default PMT
