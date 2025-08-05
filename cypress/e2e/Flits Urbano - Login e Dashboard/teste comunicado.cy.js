describe('Acessando a página do Flits', () => {
  it('Deve visitar a página do Flits', () => {
    cy.visit('https://flits.cittati.com.br/login');

    cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('Jonathas.nascimento');
    cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    cy.wait(4000);

    cy.get('.ant-modal-footer > :nth-child(2)').click();
    cy.get(':nth-child(10) > .ant-menu-submenu-title').click({ force: true });

    //sub menu mensagem institucional

    cy.get('[data-testid="1301"] > .sc-gJUwzu').click({ force: true });
    cy.get('[data-cy="btn-form-add"]').click({ force: true });

    cy.get('[data-cy="form-item-startDateValidity"] .ant-picker').click()

    // Digita a data desejada no formato aceito (por exemplo, "26/06/2025")
    cy.get('[data-cy="form-item-startDateValidity"] input')
    .clear()
    .type('04/08/2025{enter}')

    // Clica no campo de data final para ativar o input
    cy.get('[data-cy="form-item-endDateValidity"] .ant-picker').click()

    // Digita a data final no formato esperado (por exemplo, "30/06/2025")
    cy.get('[data-cy="form-item-endDateValidity"] input')
    .clear()
    .type('30/08/2025{enter}')


    cy.get('[data-testid="Input-title"]').type('IMAGEM TESTE COMUNICADO', { force: true });
    cy.get('[data-testid="TextArea-text"]').type('Este é um teste de comunicado para verificar a funcionalidade de criação de mensagens institucionais no sistema.', { force: true });

    cy.get('.ant-upload-select > .ant-upload input[type="file"]')
    .selectFile('cypress/fixtures/Evidencia1.png', { force: true });

    
    cy.get('[data-testid="Select-roles"] > .ant-select-selector').click({ force: true });
    cy.get('[label="Cobrador"]').click({ force: true });

    // Abre o dropdown
   cy.get('[data-testid="MultiSelectAntd-employees"] .ant-select-selector')
   .click({ force: true });

   // Aguarda o dropdown visível
   cy.get('.ant-select-dropdown')
   .should('be.visible');

   // Clica no item com o texto
    cy.get('.ant-select-dropdown .ant-select-item-option-content')
   .contains('Jonathas_123')
   .click({ force: true });

   cy.get('.sc-igsPkr > .ant-btn').click({ force: true });
   cy.get('[data-testid="button-submit"]').click({ force: true });





    
      
      
  });
  

});