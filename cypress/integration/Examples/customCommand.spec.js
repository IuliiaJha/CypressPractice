describe ("Login with custom command", ()=>{
    it("should use command to login", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.Login();
    })
})