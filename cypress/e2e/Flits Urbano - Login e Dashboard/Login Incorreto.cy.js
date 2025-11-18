describe('Acessando a página do Flits', () => {
  it('Deve visitar a página do Flits', () => {
    // Ignora a exceção esperada
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('invalid_authenticate')) return false;
    });

    cy.visit('http://10.10.50.48:3102/');

    // Preenche com dados inválidos
    cy.get('[data-cy="form-item-username"] input').type('jonathas');
    cy.get('[data-cy="form-item-password"] input').type('20252025@Mtzero');
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();

    // Aguarda a notificação e fecha pelo "X"
    cy.get('.ant-notification-notice-close').click();

 
  });
});