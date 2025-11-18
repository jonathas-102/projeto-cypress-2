describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('jonathas.nascimento');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();
      cy.wait(8000);

      //Entendido

      cy.get('.ant-modal-footer > :nth-child(2) > :nth-child(2)').click();
      cy.wait(4000);

      // Clica no menu relatório e sub menu

      cy.get('[data-testid="07"] > .sc-iAUPGz > .title').click();
      cy.get('[data-testid="0703"] > .sc-iAUPGz > .title').click({ force: true });

      // Seleciona modelo, atividade e garagem.

      cy.get('#rc_select_5').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Garagem').click({ force: true });

      cy.get('#rc_select_6').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Saída e chegada').click({ force: true }); 
      
      cy.get('#rc_select_7').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Pátio Teotonio').click({ force: true });

      //Pesquisa e Limpar       

      cy.get('[data-testid="button-submit"] > :nth-child(2)').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"] > :nth-child(2)').click({ force: true });

     
        
    });
    
});