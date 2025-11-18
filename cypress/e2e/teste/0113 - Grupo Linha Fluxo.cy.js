describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('jonathas.nascimento');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();
      cy.wait(4000);
      cy.get('.ant-modal-footer > :nth-child(2)').click();
      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });


      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      

      //clica no menu cadastro

      cy.get('[data-testid="01"] > .sc-eEhoOH').click();
      cy.wait(4000);
      // sub menu grupo linha
      
      cy.get('[data-testid="0105"] > .sc-eEhoOH > .title').click();
      
      // Incluir novo grupo linha

      cy.get('[data-cy="btn-form-add"]').click({ force: true });

      // Insere uma descrição

      cy.get('[data-testid="Input-description"]').type('1 Rodrigo minervino test', { force: true });
      cy.wait(4000);
      cy.get('[data-testid="Select-groupType"] > .ant-select-selector').click({ force: true });
      cy.get('.ant-select-dropdown:visible').contains('.ant-select-item-option-content', 'Monitoramento').click();

      //seleciona tipo de dia

      cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input').click({ force: true });

      //Seleciona itens

      cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('.ant-transfer-operation > :nth-child(1)').click();
      cy.get('[data-testid="button-submit"]').click({ force: true });

      




        
    });
    
});
