
describe('My first cypress test',() => {

    it('Navigate to noon website', () => {

        /* 
        Navigate to website 
        */
        cy.visit('https://www.noon.com')
        Cypress.Cookies.debug(true)
    
        /* 
        Go to Login window and click on Signin button
        */
        cy.wait(8000)
        cy.get('#dd_header_signInOrUp').click()
        cy.wait(2000)
        cy.get('#btn_header_signin').click()

        /* 
        Enter Signin details and click on the Signin button
        */
        cy.wait(3000)
        cy.get('#tf_signin_email').type('perera_saliya@yahoo.com')
        cy.wait(2000)
        cy.get('#tf_signin_password').type('1qaz2wsx@')
        cy.wait(2000)
        cy.get('#btn_signin_signin').click()
   
        /* 
        Headover to Electronics section from the top Nav bar
        */
        cy.wait(2000)
        cy.get('.mainCategories').contains('Electronics').click({force:true})
        cy.wait(15000)

        /* Click on the first item that shows up under Electronics which is the '0'th index in swiper-wrapper class
        A time delay of around 10s had to be forced to let the items load completely 
        */
        cy.get('.swiper-wrapper').eq(1).children(1).eq(0).click()

        /* 
        Add product to cart
        */
        cy.wait(3000)
        cy.get('.addToCartLabel').click()
        cy.wait(3000)
        cy.get('.addedToCartLabel').eq(1).click()

        /* 
        Go to checkout 
        */
        cy.wait(3000)
        cy.get('.invoiceColumn').click() 
   
        /* 
        Enter new location
        In google map search box a location will be typed and and a keypress with the "ENTER" command 
        will be simulated by the type('{enter}') function.
        This will execute click on the first search result
        */
        cy.get('#searchBox').type('United Arab Emirates Honey Shop - Dubai - United Arab Emirates')
        cy.wait(3000)
        cy.get('#searchBox').type('{enter}')
        cy.wait(5000)
        cy.get('.confirmBtn').click()

        /* 
        Address, first name, last name and phone will be typed on to the relevant input fields 
        */
        cy.get('input[name="address"]').type('6th lane')
        cy.get('input[name="phone"]').type('2222414')
        cy.get('input[name="firstName"]').type('Saliya')
        cy.get('input[name="lastName"]').type('Perera')
        cy.wait(3000)
        
        /* 
        Click on the "Save Address" button
         */
        cy.get('.ripple').click()
        cy.wait(5000)

        /* 
        Click on the "Continue" button and this will take you to
        the phone number verification page and the test will end
         */
        cy.get('.ripple').click()


    })

})