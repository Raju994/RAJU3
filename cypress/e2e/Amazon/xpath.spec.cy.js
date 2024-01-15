/// <reference types="cypress"/>
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.amazon.in/')
      cy.xpath('//input[@placeholder="Search Amazon.in"]').clear().type("Iphone15")
      cy.xpath('//input[@value="Go"]').click()
  
      cy.title().should('contain','Iphone15')
  
      cy.url().should('contain','Iphone15')
    })
  })
