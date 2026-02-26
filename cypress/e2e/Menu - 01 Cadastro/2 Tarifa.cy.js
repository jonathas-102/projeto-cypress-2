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

      cy.get('[data-testid="0129"] > .sc-hHuwoJ > .title').click({ force: true });
      cy.wait(4000);

      //Adicionar

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      cy.get('[data-testid="Select-fareGroupId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
      cy.get('[label="Teste QA Jonathas"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
      cy.get('[data-testid="InputNumberAntd-code"]').type('19', { force: true });
      cy.get('[data-testid="Input-name"]').type('QA Jonathas');
      cy.wait(4000);

      //Adicionar 

      cy.get('.sc-cSrxWQ > .ant-btn').click({ force: true });
      cy.wait(4000);



     // Preenche Data Início
      cy.get('[data-cy="form-item-startDate"] .ant-picker-input input')
      .invoke('removeAttr', 'readonly')
      .clear({ force: true })
      .type('01/02/2026{enter}', { force: true })

     // Preenche Data Fim
      cy.get('[data-cy="form-item-endDate"] .ant-picker-input input')
      .invoke('removeAttr', 'readonly')
      .clear({ force: true })
      .type('10/02/2026{enter}', { force: true })


      //Salvar

      cy.get('.ant-modal-footer > .ant-btn-primary > span').click({ force: true });
      cy.wait(4000);

      //Salvar 2

      cy.get('[data-testid="button-cancel"]').click({ force: true });
      cy.wait(4000);










      

        
    });
    
});
