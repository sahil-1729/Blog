describe('Blog tests', () => {
  beforeEach(function (){
    cy.request('POST','http://localhost:3003/api/testing/reset')
    cy.visit('')

  })
  it('Login Form', () => {

    cy.contains('Login')
    cy.contains('Username')
    cy.contains('Password')
  })
})