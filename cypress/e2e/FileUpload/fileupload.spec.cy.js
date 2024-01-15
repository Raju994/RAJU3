
/// <reference types="cypress" />

import 'cypress-file-upload';


//reference url - https://www.npmjs.com/package/cypress-file-upload


describe('verify drag drop test', () => {



    it('dragdropTest', () => {


        cy.visit('https://the-internet.herokuapp.com/upload')



        cy.get('#file-upload').should('be.visible')



        //install packge "file-upload"
        // cy.get('#file-upload').attachFile('Test.txt')
        //cy.get('#file-upload').attachFile('New.pdf')
        // cy.get('#file-upload').attachFile('2.xlsx')


        //drag and drop-single file
        cy.get('div#drag-drop-upload').attachFile('2.xlsx', { subjectType: 'drag-n-drop' })

        //attach multiple file upload 
        cy.get('div#drag-drop-upload').attachFile(['New.pdf', 'Test.txt'], { subjectType: 'drag-n-drop' })


        //click on upload button
        // cy.get('#file-submit').click();


        cy.wait(3000)

        //validation step

        // cy.get('h3').should('have.text','File Uploaded!')

    })



})
