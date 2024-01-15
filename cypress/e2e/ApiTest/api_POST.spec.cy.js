
/// <reference types="cypress" />

describe("Create Tourist Test", () => {

    it('POST - create Tourist', () => {


        console.log('***************' +Math.random())


         let requestBody = {
                                 tourist_name: "Vinith",
                                 tourist_email: Math.random().toString(5).substring(2) + "vinith@gmail.com",
                                 tourist_location: "Paris"
                             }
        


        cy.request({

            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody



        }).then( (resp)=>{



            //printing entire body
            cy.log(JSON.stringify(resp.body))

            //validation step

            console.log(resp.body);
            expect(resp.status).to.eq(201)              //verify status code ---201

            expect(resp.body.tourist_name).to.eq(requestBody.tourist_name) 
            expect(resp.body.tourist_email).to.eq(requestBody.tourist_email) 
            expect(resp.body.tourist_location).to.eq('Paris') 

        })




    })




})
