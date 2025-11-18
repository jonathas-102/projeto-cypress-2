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
      cy.get('[data-testid="0709"] > .sc-iAUPGz > .title').click({ force: true });


     
        
     });
    
});