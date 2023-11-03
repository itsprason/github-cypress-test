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

    //condition to check if the output shows up
    if (cy.get('.xterm-rows').contains('Hello, World!')) {
      cy.log('test pass')
    }
    else {
      //send notification to Teams
      const command = `curl -H "Content-Type: application/json" -d '{
  "text": "Cypress test failed."
}' ${WEBHOOK_URL}`;

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error('Error:', error);
          return;
        }

        if (stderr) {
          console.error('Error:', stderr);
        } else {
          console.log('Notification sent successfully:', stdout);
        }
      });
    }

  })
})
