describe ("Keyboard press somulation", () => {
    it("should submitt searchbox", () =>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').type('just some text {enter}')
    })
})