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

      cy.get(':nth-child(5) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Evento').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);
      
      // Modelo e Grupo Linha

      cy.get('#rc_select_5').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Resumo').click({ force: true });
      cy.get('#rc_select_7').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('NOTURNO').click({ force: true });

      //Veículo

      cy.get('#rc_select_6').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('63001').click({ force: true });

      //Evento

      cy.get('[data-testid="MultiSelectAntd-eventIds"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('Carro parado em viagem').click({ force: true });

      //Login

      cy.get('[data-testid="Select-login"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-item-option-content').contains('yasmin.mobibrasil').click({ force: true });

      cy.get('.anticon-tag').click({ force: true });
      cy.get('[data-testid="TextArea-note"]').type('Teste de relatório de evento', { force: true });
      
      
      // Pesquisa e limpa o campo de pesquisa

      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });


     
        
    });
    
});