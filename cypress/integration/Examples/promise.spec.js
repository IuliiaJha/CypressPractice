describe("difference between get and find", ()=>{

    it ("Should count number of elemento on the page", ()=>{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
// const logotext = cy.get('.brand').text()
// cy.log(logotext ) will not work as separate action, need to use promise

cy.get('.brand').then((logotext)=>{
    cy.log(logotext.text() )
})
 
// but to get text inside function is posible without promise : 
cy.get('.products').find('.product').each(($el, index, $list) =>{
    
    const textVeg=$el.find('h4.product-name').text()
    cy.log(textVeg)
    if(textVeg.includes('Cauliflower'))
    {
    $el.find('button').click()
    }
    });
    cy.get('div.brand.greenLogo').should("have.text","GREENKART")
});


    })
