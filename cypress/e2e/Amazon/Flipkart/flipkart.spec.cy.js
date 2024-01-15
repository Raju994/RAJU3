//For autosuggistion-ON
///<reference types='cypress'/> 

describe('Flipkart',()=>{

    //Testing 
    it('Filipkart Search',()=>{
        //switching to site
        cy.visit('https://www.flipkart.com/')
        //searching for Iphone 14pro and click on enter
        cy.get("[type='text']").type('Iphone 14pro').type('{ENTER}')

       

    })
})