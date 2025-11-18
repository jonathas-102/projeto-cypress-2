describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
     cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('jonathas.nascimento');
     cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
     cy.get('.ant-form-item-control-input-content > .ant-btn').click();
     cy.wait(8000);
     cy.get('.ant-modal-footer > :nth-child(2)').click();
     cy.wait(4000);
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

     cy.get('[title="2025-11-06"]')
     .should('be.visible')
     .click({ force: true });
     cy.wait(2000);

     // Abre o calendário do campo de data final

     cy.get('[data-cy="form-item-endDate"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input').type('11112025');
     cy.wait(2000);

     //Linha

     cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
     const optionsToSelect = [
        '10010 / Paese',
      ];
      cy.contains('10010 / Paese').click({ force: true });
      cy.get('[data-testid="Select-companyVehicleId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
      
      // Prefixo

      cy.get('[data-testid="Select-companyVehicleId"] > .ant-select-selector').click({ force: true });
      cy.get('[style="height: 21632px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
      
      // Hora Inicial

      cy.get('[data-cy="form-item-beginTime"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click({ force: true });
      cy.get('[data-testid="TimePicker-beginTime"]').type('0000');
      
      
      cy.get('.content-form > .ant-btn').click({ force: true });     
      cy.wait(4000);
      cy.get('[data-testid="button-cancel"]').click({ force: true });   
      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(5000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(5000);
      

        
    });
    
});
