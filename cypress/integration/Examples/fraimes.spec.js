import 'cypress-iframe'
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe");
cy.iframe().find("a[href='#/mentorship']").eq(0).click()
 
 
})
})