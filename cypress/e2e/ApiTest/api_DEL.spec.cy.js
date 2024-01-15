/// <reference types="cypress" />

describe("DEL ", () => {

    it('DEL ', () => {
    
      //  cy.visit('http://localhost:3000')

    


        let requestBody = {
            
            "first_name": "Raju"
                            }


        cy.request({

            method: 'DELETE',
            url: ' https://reqres.in/api/users/2',
            body: requestBody



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);
           expect(resp.status).to.eq(204)              //verify status code ---200

            // expect(resp.body.last_name).to.eq(resquestBody.last_name) 
            //expect(resp.body.first_name).to.eq(requestBody.first_name) 
         
        })




    })




})


