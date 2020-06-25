/// <reference types="Cypress" />
import HomePage from '../../support/PageObject.js/HomePage.js'
import ProductPage from '../../support/PageObject.js/ProductPage.js'
describe ("Framework",()=>{

    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
    })
    it("My Cypress framework", function() {
        const homePage= new HomePage();
        const productPage = new ProductPage();
    cy.visit(Cypress.env("url"));
    homePage.getName().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getName().should("have.value", this.data.name);
    cy.get("form div:nth-child(1) input").should("have.attr", "minlength","2");
    cy.contains("Shop").click();
    // cy.get("h4.card-title").each(($el, index, $list) =>
    // {
    //     if($el.text().includes("Blackberry")){
    //         cy.get("button.btn.btn-info").eq(index).click()
    //     }
    // })
  
this.data.productName.forEach(function(element){;
    cy.SelectProduct(element);
    })
    productPage.CheckOut().click();
    
    var sum=0

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
  
  
   const amount=$el.text()
   var res= amount.split(" ")
  res= res[1].trim()
  sum= Number(sum)+Number(res)
  
  }).then(function()
  {
      cy.log(sum)
  })
  cy.get('h3 strong').then(function(element)
  {
      const amount=element.text()
      var res= amount.split(" ")
     var total= res[1].trim()
     expect(Number(total)).to.equal(sum)
  
  })


cy.contains("Checkout").click();
cy.get("#country").type("india");
cy.get('div.suggestions > ul > li > a').click();
cy.get('#checkbox2').click({force: true})
cy.get('input[type="submit"]').click()
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element)
{
   const actualText=element.text()
  expect(actualText.includes("Success")).to.be.true
})







})
})
// describe('User page', () => {
//     before(function () {
     
//       cy.fixture('example')
//         .then((user) => {
//           this.user = user
//         })
//     })
  

//     it('has user', function () {
//       // this.user exists
//       expect(this.user.name).to.equal('Bob')
//     })
//   