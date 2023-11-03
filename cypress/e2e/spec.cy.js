describe('template spec', () => {
  it('passes', () => {
    //navigate to the C playground
    cy.visit('https://programiz.pro/ide/c')

    //need to wait for the button click to work
    cy.wait(2000)

    //find run button and hit click

    cy.get('button').contains('Run').click()


    cy.get('.xterm-rows',{ timeout: 1 }).should('contain', 'Hello, World!');

     });
 

  })

