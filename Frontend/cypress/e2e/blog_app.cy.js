describe('Blog tests', () => {
  beforeEach(function (){
    cy.request('POST',`${Cypress.env('BACKEND')}/testing/reset`)
    const user = {
      username : 'testing',
      password : 'testing'
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
      cy.get('.username').type('testing')
      cy.get('.password').type('testing')
      cy.get('.sub').click()
      cy.contains('testing just logged in')
    })
  })
  describe('When user logs in',function(){
    beforeEach(function(){
      cy.login( {
        username : 'testing',
        password : 'testing'
      })
      cy.get('.username').type('testing')
      cy.get('.password').type('testing')
      cy.get('.sub').click()
    }) 
    it('blog already exists',function(){
      // cy.contains('logged')
      cy.create({
        title: "Healthy Breakfast Ideas to Start Your Day Right",
        author: "Olivia Collins",
        url: "www.exampleblog.com/healthy-breakfast-ideas",
        likes: 183
      })
      cy.contains('Healthy')

    })
    it('save a blog',function(){
      cy.contains('create new blog').click()
      cy.get('.title').type('Top 5 Hiking Trails in the Grand Canyon')
      cy.get('.author').type('Jason Turner')
      cy.get('.url').type('www.exampleblog.com/top-hiking-trails-grand-canyon')
      cy.get('.blogSubmit').click()
    })

  })
})