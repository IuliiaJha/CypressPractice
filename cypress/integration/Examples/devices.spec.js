describe("Device Tests", ()=>{
     it ("1200,720", ()=>{
         cy.viewport(1200,720);
         cy.visit('http://www.example.com')
     } )

    it ("1980,1080", ()=>{
        cy.viewport(1980,1080)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    } )
    it ("iphone-6'", ()=>{
        cy.viewport('iphone-6')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    } )

    it ("iphone-6'", ()=>{
        cy.viewport('macbook-15')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    } )
})