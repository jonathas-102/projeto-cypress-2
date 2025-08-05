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

      cy.get(':nth-child(4) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Status Comunicação').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(4000);

      // Download PDF e Excel

      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(4000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(4000);

      // Filtrar

      cy.get('.ant-btn-icon-only').click({ force: true });
      cy.get('[data-testid="MultiSelectAntd-companyLineId"] > .ant-select-selector').click({ force: true });
      cy.contains('059 - Osasco (Conj. dos Metalúrgicos) / São Paulo (Metrô Butantã)').click({ force: true });
      cy.get('[data-cy="InputDate-date"]').type('2024-04-24', { force: true });
      cy.get('[data-testid="Select-time"] > .ant-select-selector').click({ force: true });
      cy.get('[label="1h"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-companyVehicleId"] > .ant-select-selector').click({ force: true });
      cy.get('#rc_select_5').type('21334', { force: true });
      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });


    
      

        
    });
    
});