describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('jonathas.nascimento');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();
      cy.wait(8000);
      cy.get('.ant-modal-footer > :nth-child(2) > :nth-child(2)').click();
  

      // Clica no menu Relatório

      cy.get('[data-testid="07"] > .sc-iAUPGz').click();
      cy.get('[data-testid="0712"] > .sc-iAUPGz > .title').click({ force: true });

      // Seleciona Veículo

      cy.get('[data-cy="form-item-vehicleIds"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
      //cy.get('.ant-select-item-option-content').contains('0148').click({ force: true });
      //cy.get('body').click(0,0);

      cy.get('[data-cy="form-item-status"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Lida').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Enviada').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Não Lida').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Recebida').click({ force: true });
      cy.get('body').click(0,0);


      //Pesquisa

      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });

     
        
    });
    
});