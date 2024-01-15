/// <reference types="cypress" />

describe("Put ", () => {

    it('PUT ', () => {
    
      //  cy.visit('http://localhost:3000')

    


        let resquestBody = {
            "last_name": "Raju",
            "first_name": "Uppala"
                            }


        cy.request({

            method: 'PUT',
            url: ' https://reqres.in/api/users/2',
            body: resquestBody



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);
           expect(resp.status).to.eq(200)              //verify status code ---200

            expect(resp.body.last_name).to.eq(resquestBody.last_name) 
            expect(resp.body.first_name).to.eq(resquestBody.first_name) 
         
        })




    })




})


