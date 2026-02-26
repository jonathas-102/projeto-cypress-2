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

      cy.contains('Mapa').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);

      cy.get('.left-top-button button:has(svg#Layer_1)', { timeout: 15000 })
      .first()
      .click({ force: true })

      //Monitorar 
      
      cy.get('.sc-imWYAH > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get('[style="height: auto;"] > .sc-jsJBEQ > .ant-form > .row-btns > .ant-col > div > [data-testid="button-submit"]').click({ force: true });
      cy.wait(8000);


    });
    
});     