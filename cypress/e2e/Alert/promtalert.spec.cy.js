///<reference types="cypress"/>
describe('Alert',()=>{
    it('alert_simple',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsAlert()"]').click();        //Handles alerts automatically--simple alert

        //validation
        cy.get('[id="result"]').should('have.text','You successfully clicked an alert')

    })




    it('alert_confirm_ok',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsConfirm()"]').click();        //Handles alerts automatically--simple alert

        //validation
        cy.get('[id="result"]').should('have.text','You clicked: Ok')

    })


    
    it('alert_confirm_cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsConfirm()"]').click();        //Handles alerts automatically--simple alert
        cy.on('window:confirm',()=>false)
        //validation
        cy.get('[id="result"]').should('have.text','You clicked: Cancel')

    })



     
    it.only('alert_confirm_promt',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
       // cy.get('[onclick="jsPrompt()"]').click()

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Hi');
            cy.get('[onclick="jsPrompt()"]').click()
        });
        // // cy.on('window:confirm',()=>true);

        // cy.on('window:confirm',(message)=>{
        //     expect(message).to.equal('I am a JS Prompt')
        //     return 'Hi';
        // })
          
       
        //validation
        cy.get('[id="result"]').should('have.text','You entered: Hi')

    })
})




// describe('AutomationLearning Test', function () {
//     // test case
//     it("Scenario 1", function () {
//        //URL launch
//        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
//        //handling prompt alert
//        cy.window().then(function(p){
//           //stubbing prompt window
//           cy.stub(p, "prompt").returns("AutomationLearning");
//           // click on Click for JS Prompt button
//           cy.get(':nth-child(3) > button').click()
//           // verify application message on clicking on OK
//           cy.get('#result').contains('You entered: AutomationLearning')
//        });
//     });
//  });
 