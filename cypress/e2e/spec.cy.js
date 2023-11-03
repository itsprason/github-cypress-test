const { exec } = require('child_process');
const WEBHOOK_URL = process.env.WEBHOOK_URL
describe('template spec', () => {
  it('passes', () => {
    //navigate to the C playground
    cy.visit('https://programiz.pro/ide/c')

    //need to wait for the button click to work
    cy.wait(2000)

    //find run button and hit click

    cy.get('button').contains('Run').click()
    //wait for 2 seconds for the execution to complete

    cy.wait(1)

       // Use Cypress assertions to check if the output shows up
       cy.get('.xterm-rows').should('contain', 'Hello, World!')
       .then(() => {
         cy.log('Test pass');
       })
       .catch(() => {
         cy.log('Test failed');
         cy.fail();
       });
   });
 

  })

