describe('Contact Us Form Test', () => {
  it('should submit contact us form successfully', () => {
    // Step 1: Launch browser
    cy.visit('http://automationexercise.com')

    // Step 2: Verify that home page is visible successfully
    // cy.contains('Welcome to Automation Exercise').should('be.visible')

    // Step 3: Click on 'Contact Us' button
    cy.contains('Contact us').click()

    // Step 4: Wait for 'GET IN TOUCH' is visible
   // cy.get('form#contact-form', { timeout: 10000 }).should('be.visible')

    // Step 5: Enter name, email, subject, and message
    const name = 'Amanda Teste'
    const email = 'amanda@teste.com'
    const subject = 'Titulo para solicitação'
    const message = 'Descritivo da solicitação'
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="subject"]').type(subject)
    cy.get('textarea[name="message"]').type(message)

    // Step 6: Upload file
    // Replace 'your_file_path' with the path to your file
    // cy.get('input[type="file"]').attachFile('your_file_path')

    // Step 7: Click 'Submit' button
    cy.contains('Submit').click()

    // Step 8: Click OK button
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Form submitted successfully!')
    })

    // Step 9: Verify success message is visible
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')

    // Step 10: Click 'Home' button
   // cy.contains('Home').click()

    // Step 11: Verify that landed to home page successfully
   // cy.contains('Welcome to Automation Exercise').should('be.visible')
  })
})