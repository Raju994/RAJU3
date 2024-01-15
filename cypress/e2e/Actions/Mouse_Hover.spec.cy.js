///<reference types="cypress"/>
describe('Hover', () => {
    it("Hover", () => {

        cy.visit('https://amazon.in/')
        cy.get('[data-csa-c-slot-id="nav-link-accountList"]').trigger('mouseover')
       //cy.xpath("//span[text()='Wish from Any Website']").click()
       cy.contains('Wish from Any Website').click()
       cy.title().should('eq','Wish List')
       //screenshot
       cy.screenshot('Amazon');
    })
})