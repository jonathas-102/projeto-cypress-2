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

      cy.contains('Atendimento').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);

      // Clica no botão adicionar +

      cy.get('[data-cy="btn-form-add"]').click({ force: true });
      cy.get('[data-testid="Select-type"] > .ant-select-selector').click({ force: true });
      cy.contains('Normal').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
      cy.wait(2000);
      cy.contains('059 - Osasco (Conj. dos Metalúrgicos) / São Paulo (Metrô Butantã)').click({ force: true });
      cy.get('[data-testid="Input-name"]').type('Testador 1', { force: true });
      cy.get('[data-testid="Input-returnName"]').type('Teste E2E Atendimento', { force: true });
      cy.get('[data-testid="Input-identifier"]').type('Teste E2E Atendimento', { force: true });
      cy.get('[data-testid="Input-suffixERP"]').type('Teste', { force: true });
      cy.get('[data-testid="Checkbox-main"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-cancel"]').click({ force: true });

      // Testa botão pesquisar e limpar

      cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
      cy.contains('059 - Osasco (Conj. dos Metalúrgicos) / São Paulo (Metrô Butantã)').click({ force: true });
      cy.wait(2000);
      cy.get('[data-testid="Select-draft"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Não"] > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
      cy.wait(2000);
      cy.get('[data-testid="Select-main"] > .ant-select-selector').click({ force: true });
      cy.get(':nth-child(11) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[data-testid="CheckboxNull-active"]').click({ force: true });
      cy.get('[data-testid="CheckboxNull-active"]').click({ force: true });
      cy.get('[data-cy="form-item-tagIds"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-submit"]').click({ force: true });

      // Download pdf, excel e kmz

      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(4000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(4000);
      cy.get('.anticon-more').click({ force: true });
      cy.get('.sc-gAqISa > :nth-child(1)').click({ force: true });
      cy.wait(4000);

      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(2000);



        
    });
    
});
