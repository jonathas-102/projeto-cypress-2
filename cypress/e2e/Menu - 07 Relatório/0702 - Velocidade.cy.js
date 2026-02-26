describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
     cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('jonathas.nascimento');
     cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
     cy.get('.ant-form-item-control-input-content > .ant-btn').click();
     cy.wait(8000);
     cy.get('.ant-modal-footer > :nth-child(2)').click();
     cy.get('#rcc-confirm-button').click();
     cy.wait(4000);

      // Clica no menu Relatório

      cy.get(':nth-child(5) > .ant-menu-submenu-title').click();

      // Clica no sub menu Velocidade

      cy.contains('Velocidade').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);

      //Modelo

      cy.get('[data-testid="Select-model"] > .ant-select-selector').click({ force: true });
      cy.contains('Controle').click({ force: true });
      cy.wait(4000);

      //Linha

      cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
      cy.contains('10010 - Paese').click({ force: true });
      cy.wait(4000);
      //Clica no x de linha para limpar o campo
      cy.get('[data-testid="Select-companyLineId"] > .ant-select-clear > .anticon > svg').click({ force: true });


      //Veículo

      cy.get('[data-testid="Select-companyVehicleId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
      cy.contains('63001').click({ force: true });
      cy.wait(4000);

      //Motorista

      cy.get('[data-testid="Select-operatorId"] > .ant-select-selector').click({ force: true });
      cy.contains('003786').click({ force: true });
      cy.wait(4000);

      //Sentido

      cy.get('[data-testid="Select-direction"] > .ant-select-selector').click({ force: true });
      cy.contains('Ida').click({ force: true });
      cy.wait(4000);

      cy.get('.anticon-tag').click({ force: true });
      cy.get('[data-testid="TextArea-note"]').type('Teste de relatório de viagem', { force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });

      // Pesquisa e limpa o campo de pesquisa

      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-submit"]').click({ force: true });
        
    });
    
});