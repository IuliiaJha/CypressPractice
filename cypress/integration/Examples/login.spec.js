
describe ("Enter into input field", ()=>{
    it("should fill username", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.contains ('Log in to ZeroBank');
    })
    it("should fill username", ()=>{
        cy.get('#user_login').as('username');
       cy.get('@username').clear().
       type("Some invalid name");
    })
    it("should fill password", ()=>{
        cy.get('#user_password').clear().
       type("Some invalid ordpassw");

    })
    it('should mark checkbox', ()=>{
        expect('input[type="checkbox"]').not.to.be.selected;
        cy.get('input[type="checkbox"]').click()
    })
    it("should submitt form", ()=>{
        cy.contains('Sign in').click();
    
    })
        it("should display error message", ()=>{
            cy.get (".alert.alert-error").should("be.visible").
            and('contain','Login and/or password are wrong.' )

       
    })
})