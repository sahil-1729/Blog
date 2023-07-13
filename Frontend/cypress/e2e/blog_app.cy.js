describe('Blog tests', () => {
  beforeEach(function (){
    cy.request('POST',`${Cypress.env('BACKEND')}/testing/reset`)
    const user = {
      username : 'username',
      password : 'password'
    }
    cy.request('POST',`${Cypress.env('BACKEND')}/users`,user)
    cy.visit('')

  })
  it('Login Form exist', () => {
    cy.contains('Login')
    cy.contains('Username')
    cy.contains('Password')
  })
  describe('Login check',function(){
    it('for unsuccessful attempt',function(){
      cy.get('.username').type('54321')
      cy.get('.password').type('54321')
      cy.get('.sub').click()
      cy.contains('Invalid username or password')
    })
    it('for successful attempt',function(){
      cy.get('.username').type('username')
      cy.get('.password').type('password')
      cy.get('.sub').click()
      cy.contains('username just logged in')
    })
  })
})