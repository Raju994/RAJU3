///<reference types='cypress'/>
describe('frame',()=>{
    it('frame_plugin',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
       // cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("Hello!!").type('{ctrl}A')
        cy.get('[title="Bold"]').click()
        cy.get('[title="Italic"]').click()
        cy.get('[title="Align center"]').click()

    })
})