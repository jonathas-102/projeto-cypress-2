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

      cy.get(':nth-child(4) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Sinótico').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);

      // Filtros

      cy.get('[data-cy="form-item-lineGroup"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.get('.ant-btn-icon-only').click({ force: true });
      cy.get('[data-testid="button-reset"] > :nth-child(2)').click({ force: true });
      cy.wait(4000);

      // Pesquisar

      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(4000);


      


      





      

        
    });
    
});
