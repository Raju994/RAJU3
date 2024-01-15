
/// <reference types="cypress" />

describe("Tourist Deatils Test", () => {


    it('Get Tourist', () => {

        let post={"id":2,"title":"json-server","author":"typicode"}
        


        cy.request('POST', '/posts').then((resp) => {



            //expect
            cy.log(resp.status)
            cy.log(resp.duration)
            cy.log('status text: ' + resp.statusText)

            cy.log(JSON.stringify(resp.body))
            expect(resp.status).to.eq(200)


        })





    })




    



})