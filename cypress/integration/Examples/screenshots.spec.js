describe("Screenshot", () =>{
    it("should capture full screeen", ()=>{
    cy.visit("https://devexpress.github.io/testcafe/example/")

        cy.screenshot({capture:"fullPage"});
      
})
it("should capture single element ", ()=>{
   
  cy.get('header').screenshot();
  cy.get('#populate').screenshot();
})
})