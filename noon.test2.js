
describe('My first cypress test',() => {

    // Navigate to website
    it('Navigate to noon website', () => {
        cy.visit('https://www.noon.com')
        Cypress.Cookies.debug(true)
    

    // Go to Login window and click on Signin button
        cy.wait(8000)
        cy.get('#dd_header_signInOrUp').click()
        cy.wait(2000)
        cy.get('#btn_header_signin').click()

    // Enter Signin details and click on Signin button
        cy.wait(3000)
        cy.get('#tf_signin_email').type('perera_saliya@yahoo.com')
        cy.wait(2000)
        cy.get('#tf_signin_password').type('1qaz2wsx@')
        cy.wait(2000)
        cy.get('#btn_signin_signin').click()
   

    // Headover to Electronics section from the top Nav bar
        cy.wait(2000)
        cy.get('.mainCategories').contains('Electronics').click({force:true})
        cy.wait(20000)

    // Click on the first item that shows up under Electronics which is the '0'th index in swiper-wrapper class
    // A time delay of around 10s had to be forced to let the items load completely
        
        cy.get('.swiper-wrapper').eq(1).children(1).eq(0).click()

    // Add product to cart
        cy.wait(3000)
        cy.get('.addToCartLabel').click()
        cy.wait(3000)
        cy.get('.addedToCartLabel').eq(1).click()

    // Go to checkout
        cy.wait(3000)
        cy.get('.invoiceColumn').click() 
   

    // Enter new address
   
        cy.get('#searchBox').type('United Arab Emirates Honey Shop - Dubai - United Arab Emirates')
        cy.wait(3000)
        // cy.get('.suggestionsCtr').first().type('{downarrow}{enter}')
        // cy.get('.suggestionsCtr').trigger("keydown", { key: "enter" });
        // cy.type('{enter}').trigger('input')
        // cy.get('#btn_signin_signin').click()
        cy.get('#searchBox').type('{enter}')
        cy.wait(10000)
        cy.get('.confirmBtn').click()

        // cy.get('.group').eq(0).type('perera_saliya@yahoo.com')
        cy.get('input[name="address"]').type('6th lane')
        cy.get('input[name="phone"]').type('2222414')
        cy.get('input[name="firstName"]').type('Saliya')
        cy.get('input[name="lastName"]').type('Perera')
        cy.wait(3000)
        cy.get('.ripple').click()
        cy.wait(5000)
        cy.get('.ripple').click()


    })

})