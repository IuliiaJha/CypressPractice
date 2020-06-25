describe ("Using fixtures", ()=>{
    it("should fill username with fixture", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html");
    cy.fixture("MyUser").then( MyUser =>{
        const username = MyUser.username;
        const password = MyUser.password;

        cy.get('#user_login').type(username);
        cy.get('#user_password').type(password);
        cy.wait(2000);
    })
})   
     
    
})