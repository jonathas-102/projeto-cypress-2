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

      cy.contains('Escala Padrão').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);

      cy.get('[data-cy="btn-form-add"]').click({ force: true });
      cy.wait(4000);

      cy.get(':nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(4) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get('[data-cy="form-item-startDate"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click({ force: true });
      
      // Seleciona a data de início

     cy.get('[title="2025-05-06"]')
     .should('be.visible')
     .click({ force: true });
     cy.wait(4000);

     // Abre o calendário do campo de data final

     cy.get('[data-cy="form-item-endDate"] .ant-picker')
     .should('be.visible')
     .click({ force: true });

     // Seleciona a data de fim
     cy.wait(4000);
     cy.get(':nth-child(10) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > :nth-child(1) > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > :nth-child(4) > [title="2025-05-06"]').click({ force: true });
     cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
     const optionsToSelect = [
        '059 / Osasco (Conj. dos Metalúrgicos) / São Paulo (Metrô Butantã)',
      ];
      cy.contains('059 / Osasco (Conj. dos Metalúrgicos) / São Paulo (Metrô Butantã)').click({ force: true });
      cy.get('#rc_select_3').click({ force: true });
      cy.get('.ant-select-item-option-active').click({ force: true });
      cy.wait(4000);

      cy.get('#rc_select_4').click({ force: true });
      cy.contains('21269').click({ force: true });

      // Hora Inicial

      cy.get('[data-cy="form-item-beginTime"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input').click({ force: true });
      cy.get(':nth-child(13) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > :nth-child(1) > .ant-picker-footer > .ant-picker-ranges > .ant-picker-now > .ant-picker-now-btn').click({ force: true });
      cy.get('.content-form > .ant-btn').click({ force: true });     
      cy.wait(4000);
      cy.get('[data-testid="button-cancel"]').click({ force: true });   
      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(5000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(5000);
      

        
    });
    
});
