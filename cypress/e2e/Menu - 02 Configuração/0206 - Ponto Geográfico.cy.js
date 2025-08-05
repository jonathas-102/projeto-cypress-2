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

      cy.get(':nth-child(2) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Ponto Geográfico').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);

      // Empresa

      cy.get('[data-testid="Select-companyId"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Osasco Matriz Intermunicipal"] > .ant-select-item-option-content > div').click({ force: true });

      // Linha

      cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
      cy.get('[style="height: 928px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

      // Código

      cy.get('[data-testid="Input-id"]').type('152266746', { force: true });
      cy.get('[data-testid="Input-name"]').type('T. Butanta', { force: true });
      cy.get('[data-testid="Input-address"]').type('Avenida Vital Brasil 461, São Paulo - São Paulo, 05503-001, Brasil', { force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(2000);

      // Download pdf, excel e kmz

      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(4000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(4000);

      // Executa o botão limpar

      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.wait(4000);





      

        
    });
    
});
6789