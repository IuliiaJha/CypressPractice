class ProductPage{

getAllProducts()
{
    return cy.get("h4.card-title")
}

AddButton()
{
    return cy.get('button.btn.btn-info')

}
CheckOut(){
    return cy.get(".nav-link.btn.btn-primary")
}

}

export default ProductPage;