describe('Browser actions', ()=>{
    it('should load correct url',() =>{
    cy.visit('https://example.cypress.io/', {timeout:10000});
    cy.url().should ('include', 'io');
    cy.get(".navbar.navbar-inverse").should('be.visible');
    cy.contains('type');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.get('.#actions > div > div:nth-child(2) > div > form > div:nth-child(1) > label')
    .should("be.visible");
    })
})