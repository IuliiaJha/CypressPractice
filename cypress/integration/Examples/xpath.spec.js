
describe("using xpath", ()=>{
    it("Should select element using xpath", ()=>{
        cy.visit("http://zero.webappsecurity.com/")
        cy.xpath('//*[@id="signin_button"]').should("be.visible");
        cy.get('#signin_button', ).click();
        cy.wait(2000)
    })
})