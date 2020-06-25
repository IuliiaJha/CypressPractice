describe('Practice click',() =>{
    it("should find element and click on it", ()=>{
 cy.visit('http://books.toscrape.com/');
 cy.url().should('include', 'toscrape')
 cy.log("Befor reload)");
 cy.reload();
 cy.log('After reload');
 cy.contains('Travel').click()
 cy.visit('http://books.toscrape.com/');
 cy.get ('a').
  contains ('Travel')
  .click()
  cy.get('h1').contains('Travel')
    })
    it ('should display correct number of books',()=>{
        cy.get('.product_pod').
        its('length')
        .should('eq',11)
    })

    it ('should check the price', ()=> {
        cy.get("a").contains('Poetry').click();
        cy.get('a').contains('Olio').click()
        cy.url().should('include', "olio");
        cy.get('.price_color').contains('£23.88')

        
    })
})