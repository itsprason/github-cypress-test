describe('template spec', () => {
  it('passes', () => {
    //navigate to the C playground
    cy.visit('https://programiz.prwo/ide/c')

    //need to wait for the button click to work
    cy.wait(2000)

    //find run button and hit click

    cy.get('button').contains('Run').click()
    //wait for 2 seconds for the execution to complete

    cy.wait(2000)

    //condition to check if the output shows up
    if (cy.get('.xterm-rows').contains('Hello, World!')) {
      cy.log('test pass')
    }
    else {
      //send notification to Teams
    }

  })
})
