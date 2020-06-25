describe('login',() =>{
    it.skip("should  login to v2 ", ()=>{
 cy.visit('https://sso.qa.corvium.com/login?redirect=true&service_url=https://qa.cpro-v2.corvium.com&application=controlpro');
 cy.url().should('include', 'login')
 cy.get ('#email')
  .click().
  type('1111111')
    })
})