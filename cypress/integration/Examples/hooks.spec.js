class BasePage {
    static loadHomePage (){
        cy.visit ('https://devexpress.github.io/testcafe/example');
    }
    static wait (number){
        cy.wait (number)
    }
}
class HomePage extends BasePage{
    static  scrollToBottom(){
    cy.get('#submit-button').scrollIntoView()
    }
    static scrollToTop (){
    cy.get('header').scrollIntoView()
    }
}
describe('Befor, Aftre hooks', ()=>{
    before(function (){
        //runs before all test inside describe block
        HomePage.loadHomePage();
    })

    after(function (){
        //runs after all test inside describe block
    })
    beforeEach(function (){
        //runs before each  it block inside describe block
    })
   afterEach(function (){
//runs after each  it block inside describe block
   })
   it.skip ('should skip 1 it-block', ()=>{
  
    HomePage.scrollToBottom();
    HomePage.wait(3000);
   })
   it.only('should run only 2 it-block', ()=>{
    HomePage.scrollToTop();
    HomePage.wait(3000);
})


})
 