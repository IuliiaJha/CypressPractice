describe ("create json file", ()=>{
  it("create json file", ()=>{
      cy.writeFile("log.json", {name: "Mike", lastName: "Smith"});
  })
  it("create txt file", ()=>{
    cy.writeFile("log.txt", "Hello world of JavaScript");
})
it("Read and verify from json file", ()=>{
  cy.readFile("log.json")
  .its('lastName')
  .should('eq',"Smith");

})

it("Read and verify fron txt file", ()=>{
  cy.readFile("log.txt")
  .should('eq',"Hello world of JavaScript");
})

})