
/// <reference types="cypress" />

import 'cypress-file-upload';


//reference url - https://www.npmjs.com/package/cypress-file-upload


describe('verify drag drop test', () => {



    it('dragdropTest', () => {


        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')



        cy.get('[type="file"]').should('be.visible')
        cy.get('[type="file"]').attachFile('New.pdf')
        cy.get('[type="text"]').type('New pdf')
        cy.get('[type="submit"]').click()



        //install packge "file-upload"
        // cy.get('#file-upload').attachFile('Test.txt')
        //cy.get('#file-upload').attachFile('New.pdf')
        // cy.get('#file-upload').attachFile('2.xlsx')


        //drag and drop-single file
       // cy.get('div#drag-drop-upload').attachFile('2.xlsx', { subjectType: 'drag-n-drop' })

        //attach multiple file upload 
       // cy.get('div#drag-drop-upload').attachFile(['New.pdf', 'Test.txt'], { subjectType: 'drag-n-drop' })


        //click on upload button
        // cy.get('#file-submit').click();


        cy.wait(3000)

        //validation step

        // cy.get('h3').should('have.text','File Uploaded!')

    })



})
