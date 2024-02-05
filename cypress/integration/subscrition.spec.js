describe('Verify Subscription in home page Test', () => {
  it('should verify subscription successfully', () => {
    // Step 1: Launch browser
    cy.visit('http://automationexercise.com')

    // Step 2: Verify that home page is visible successfully
    //cy.contains('Welcome to Automation Exercise').should('be.visible')

    // Step 3: Scroll down to footer
    cy.get('footer').scrollIntoView()

    // Step 4: Verify text 'SUBSCRIPTION'
    cy.contains('Subscription', { timeout: 10000 }).should('be.visible')

    // Step 5: Enter email address in input
    const email = 'amanda123@teste.com' 
    cy.get("[type='email']")
    cy.get("[type='email']").type('amanda123@teste.com')

    // Step 6: Click arrow button
    cy.get('button[type="submit"]').click()

    // Step 7: Verify success message 'You have been successfully subscribed!' is visible
    cy.contains('You have been successfully subscribed!').should('be.visible')
  })
})
