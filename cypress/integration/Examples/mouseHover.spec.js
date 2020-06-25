describe("should manage Pop up windows", ()=>{
    it("Should accept pop up", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click({force:true})


    })
})