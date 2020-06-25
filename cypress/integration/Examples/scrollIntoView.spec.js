describe("Scroll to the element", ()=>{
    it("Should scroll", ()=>{
        cy.visit("https://devexpress.github.io/testcafe/example/")
        cy.get('#submit-button').scrollIntoView()
        cy.wait(2000)
        cy.get('header').scrollIntoView()
        cy.wait(2000)
    })
})