/// <reference types="cypress"/>

describe('tigger test', () => {

    it('Right click test', () => {


        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')


        //Right click operation on element
        //app1
        //cy.contains('right click me').trigger('contextmenu')

        //app2
        cy.get('span[class="context-menu-one btn btn-neutral"]').rightclick();

        //click on delete
        cy.xpath("//span[text()='Delete']").click()

        //validation on alert
        cy.on('window:alert', (alert) => {

            expect(alert).to.contain('clicked: delete')

        })

    })

})