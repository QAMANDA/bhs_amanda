describe('Navigate to Test Cases Page Test', () => {
    it('should navigate to test cases page successfully', () => {
      // Step 1: Launch browser
      cy.visit('http://automationexercise.com')
  
      // Step 2: Verify that home page is visible successfully
      //cy.contains('Welcome to Automation Exercise').should('be.visible')
  
      // Step 3: Click on 'Test Cases' button
      cy.contains('Test Cases').click()
  
      // Step 4: Verify user is navigated to test cases page successfully
      cy.contains('Test Cases Page').should('be.visible') // Replace 'Test Cases Page' with the actual text or element you expect on the test cases page
    })
  })
  