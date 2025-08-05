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

      cy.get(':nth-child(7) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Perfil Usuário').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });

      // Pesquisa e limpa o campo de pesquisa

      cy.get('[data-testid="Select-context"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Cittati"]').click({ force: true });
      cy.get('[data-testid="Input-name"]').type('Coordenador', { force: true });
      cy.get('[data-testid="Cascader-functionalities"] > .ant-select-selector').click({ force: true });
      cy.get('[data-testid="Select-appId"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Auttran"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(3000);
      cy.get('[data-testid="button-reset"]').click({ force: true });

      // Incluir

      cy.get('[data-cy="btn-form-add"]').click({ force: true });
      cy.get('[data-testid="Select-context"] > .ant-select-selector').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="Input-name"]').type('Citatti', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Input-name"]').type('Coordenador', { force: true });
      cy.get('[data-testid="Select-app"] > .ant-select-selector').click({ force: true });
      cy.get('[label="GOOL System"] > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[data-testid="Select-profileVisibilityId"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Fiscal"] > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[data-testid="Select-mirrorProfile"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Cgate"] > .ant-select-item-option-content > div').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-submit"]').click({ force: true });

      // Download pdf, excel

      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(4000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(4000);

        
    });
    
});