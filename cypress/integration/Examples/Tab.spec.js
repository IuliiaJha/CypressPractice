describe("should manage Pop up windows", ()=>{
    it("Should accept pop up", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr','target').click();

    });
})