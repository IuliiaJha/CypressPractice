describe ("Override time", ()=>{
it("should use JS Date object", ()=>{
    const date = new Date(2020,3,10).getTime()//returns timestamp
    cy.clock(date)// sets app to date
    cy.log(date)
})
})