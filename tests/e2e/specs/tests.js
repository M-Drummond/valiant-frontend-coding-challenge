describe('App loading test', () => {
  it('runs the app', () => {
    cy.visit('http://localhost:5173/')
    cy.url().should('eq', 'http://localhost:5173/')
  })
  it('loads the vue app and the inputs', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#LoanTerm')
    cy.get('#LoanAmountInputNumber')
    cy.get('#LoanPurpose')
    cy.get('#LoanPeriod')
  })
  it('input loan amount value should load as null', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#LoanAmountInputNumber').should('have.value', '')
  })
  it('each select should have at least one option', () => {
    cy.visit('http://localhost:5173/')

    const selectIds = ['#LoanTerm', '#LoanPurpose', '#LoanPeriod']

    selectIds.forEach(selectId => {
      cy.get(selectId).find('option').should('have.length.at.least', 1)
    })
  })
})
