///<reference types="cypress"/>
describe('frame',()=>{

    it('frame',()=>{
        cy.visit('https://paytm.com')

        cy.get('[class="_1YPz_"]').click()

        cy.iframe('[class="qrLoginCont"]').should('have.text','Login with your Paytm account')
        

    })



})