// describe('Política de privacidade', () => {
  Cypress._.times(3, function(){
    it('testa a página da política de privacidade de forma independente', () => {
      cy.visit('./src/privacy.html')
      cy.contains('Talking About Testing').should('be.visible')
    })
  })