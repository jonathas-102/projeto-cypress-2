describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('jonathas.nascimento');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click({ force: true });
      cy.wait(4000);
      cy.get('.ant-modal-footer > :nth-child(2) > :nth-child(2)').click({ force: true });
  

      // Clica no menu Índice Operacional

      cy.get('[data-testid="07"] > .sc-iAUPGz').click({ force: true });
      cy.get('[data-testid="0710"] > .sc-iAUPGz > .title').click({ force: true });

      // Linha

      cy.get('#rc_select_3').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('000 - Sereno 01').click({ force: true });
      cy.get('body').click(0,0);

      // Sentido

      cy.get('#rc_select_4').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Ida').click({ force: true });
      cy.get('body').click(0,0);

      // Tipo de dia

      cy.get('#rc_select_5').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Útil').click({ force: true });
      cy.get('body').click(0,0);

      // Pesquisar e Cancelar

      cy.get('[data-testid="button-submit"] > :nth-child(2)').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });

     
        
    });
    
});