describe ("Enter into input field", ()=>{
    it("should fill username", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.contains ('Log in to ZeroBank');
    cy.clearCookie('session_id',{log:true});
    cy.clearLocalStorage('your item', { log: true});
    })
})