describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('teste.e2e');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('Abcd1234!');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();
      cy.wait(4000);
  
      cy.get('.ant-modal-footer > .ant-btn').click();
      cy.get('#rcc-confirm-button').click();

      // Clica no menu cadastro

      cy.get(':nth-child(1) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Garagem').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);

      // Clica no botão adicionar +

      cy.get('[data-cy="btn-form-add"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="Input-name"]').type('Testador 1', { force: true });
      cy.get('[data-testid="Input-responsable"]').type('Teste E2E Garagem', { force: true });
      cy.get('[data-testid="Input-address"]').type('Teste E2E Garagem', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Input-phone"]').type('11958862358', { force: true });
      cy.get('[data-testid="Input-shortName"]').type('Teste E2E Garagem', { force: true });
      cy.get('[data-testid="Checkbox-main"]').click({ force: true });
      cy.get('[data-testid="Checkbox-calculateFenceGarage"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-cancel"]').click({ force: true });

      // Testa botão pesquisar e limpar

      cy.get('[data-testid="Input-name"]').type('citatti 2', { force: true });
      cy.get('[data-testid="Input-address"]').type('Estrada Turística Do Jaraguá, São Paulo - São Paulo, 05161-000, Brasil', { force: true });
      cy.get('[data-testid="Input-responsable"]').type('jonathas', { force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });


      

        
    });
    
});
