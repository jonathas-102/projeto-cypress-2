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

      cy.contains('Gestão Operacional').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.get('[data-testid="main-button"]').click({ force: true });
      cy.get('[data-testid="action-button-1"]').click({ force: true });

      // Incluir escala

      cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
      cy.contains('059 - Osasco (Conj. dos Metalúrgicos) / São Paulo (Metrô Butantã)').click({ force: true });
      cy.wait(2000);
      cy.get('[data-testid="Select-typeDay"] > .ant-select-selector').click({ force: true });
      cy.contains('Útil').click({ force: true });
      cy.get('[data-testid="Select-timeTableId"] > .ant-select-selector').click({ force: true });
      cy.contains('U059TRO017').click({ force: true });

      // Salvar

      cy.get('[style="display: flex; flex-direction: column; height: calc(-130px + 100vh);"] > .sc-dCVDEO > .ant-form > .row-btns > .ant-col > div > [data-testid="button-submit"]').click({ force: true });

      // Verifica na tela a mensagem de erro "Esta escala já existe."

      cy.contains('Esta escala já existe.').should('be.visible');
      cy.wait(4000);

      


      





      

        
    });
    
});
6789