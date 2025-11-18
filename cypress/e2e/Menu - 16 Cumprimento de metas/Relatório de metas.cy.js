describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
     cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('jonathas.nascimento');
     cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
     cy.get('.ant-form-item-control-input-content > .ant-btn').click();
     cy.wait(8000);
     cy.get('.ant-modal-footer > :nth-child(2)').click();
     cy.get('#rcc-confirm-button').click();
     cy.wait(4000);

      // Clica no menu cadastro

      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.get('[data-testid="16"] > .sc-iAUPGz > .title').click({ force: true });
      cy.get('[data-testid="1602"] > .sc-iAUPGz > .title').click({ force: true });

      //Período

      // abre o RangePicker
      cy.get('[data-testid="RangeDatePicker-rangeDates"]').first().click({ force: true });

      // digita a data inicial
      cy.get('[data-testid="RangeDatePicker-rangeDates"]')
      .eq(0)
      .clear()
      .type('01/10/2025{enter}', { force: true });

      // digita a data final
      cy.get('[data-testid="RangeDatePicker-rangeDates"]')
      .eq(1)
      .clear()
      .type('10/10/2025{enter}', { force: true });


      //Download pdf, excel

      cy.get('[data-testid="button-download"]').click({ force: true });

      // aguarda o popover renderizar
      cy.get('.ant-popover-inner-content', { timeout: 5000 }).should('be.visible');

      // clica no PDF
      cy.get('.ant-popover-inner-content .ant-row > :nth-child(1)').click({ force: true });
      cy.wait(2000);

      // reabre o popover (pois ele fecha após o clique)
      cy.get('[data-testid="button-download"]').click({ force: true });

      // aguarda novamente o popover aparecer
      cy.get('.ant-popover-inner-content', { timeout: 5000 }).should('be.visible');

      // clica no XLS
      cy.get('.ant-popover-inner-content .ant-row > :nth-child(2)').click({ force: true });
      cy.wait(2000);

      //Limpa os filtros

      cy.get('[data-testid="button-reset"]').click({ force: true });

      




      

      

        
    });
    
});