describe("difference between get and find", ()=>{

    it ("Should count number of elemento on the page", ()=>{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('input.search-keyword').type('Ca');
cy.get('.product:visible').should('have.length',4);
cy.get('.products').as('productlocator');
cy.get('@productlocator').find('.product').should('have.length',4);
cy.get(':nth-child(3) > .product-action > button').click()
cy.get('@productlocator').find('.product').eq(0).contains("ADD TO CART").click();
cy.get('@productlocator').find('.product').each(() =>{
    cy.contains("ADD TO CART").click()
});
cy.wait(2000)
cy.get('@productlocator').find('.product').each(($el, index, $list) =>{
    
    const textVeg=$el.find('h4.product-name').text()
    cy.log(textVeg)
    if(textVeg.includes('Cauliflower'))
    {
    $el.find('button').click()
    }
    })
});
    })
