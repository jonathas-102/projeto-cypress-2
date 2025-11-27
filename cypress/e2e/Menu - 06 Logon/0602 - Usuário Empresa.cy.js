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

      cy.get(':nth-child(7) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Usuário Empresa').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });

      // Pesquisa e limpa o campo de pesquisa

      cy.get('.ant-select-selection-overflow')
      .find('.ant-select-selection-search-input')
      .type('Produtos{enter}', { force: true });


      cy.get('[data-testid="Select-appCode"] > .ant-select-selector').click({ force: true });
      cy.get('[label="GOOL System"]').click({ force: true });
      cy.get('[data-testid="Input-profile"]').type('Cgate', { force: true });
      cy.get('[data-testid="Input-login"]').type('oscar.fw', { force: true });
      cy.get('[data-testid="Input-userName"]').type('Oscar', { force: true });
      cy.get('[data-testid="Select-active"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Ativo"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });

      // Incluir Pág Usuário

      cy.get('[data-cy="btn-form-add"]').click({ force: true });
      cy.get('[data-testid="Input-id"]').type('jonathas.teste', { force: true });
      cy.get('[data-testid="Input-userName"]').type('Jonathas.teste', { force: true });
      cy.get('[data-testid="Input-alternativeEmail"]').type('jonathas.nascimento@cittati.com.br', { force: true });
      cy.get('[data-testid="Input-cpf"]').type('46863465841', { force: true });
      cy.get('[data-testid="InputPassword-password"]').type('12345678', { force: true });
      cy.get('[data-testid="InputPassword-confirmPassword"]').type('12345678', { force: true });
      cy.get('[data-testid="Input-quantityDaysPasswordIsValid"]').type('900', { force: true });
      cy.get('[data-testid="Select-active"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Ativo"]').click({ force: true });
      cy.get('[data-testid="Select-employeeId"] > .ant-select-selector').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });

      // Incluir Pág Perfil

      cy.get('[data-testid="Custom-companyOrGroup"] > .ant-select-selector').click({ force: true });
      cy.wait(4000);
      cy.get('[label="MobiBrasil SP (Jonathas)"] > .ant-select-item-option-content > .company-company-group-select').click({ force: true });
      cy.get('[data-testid="Select-product"] > .ant-select-selector').click({ force: true });
      cy.wait(4000);
      cy.get('[label="GOOL System"]').click({ force: true });
      cy.get('[data-testid="Select-profile"] > .ant-select-selector').click({ force: true });
      cy.wait(4000);

      cy.get('[data-testid="Select-profile"] > .ant-select-selector').click({ force: true });
      cy.contains('*Comunicados*').click({ force: true });

      //Incluir -> Proximo
      
      cy.get('.ant-col > div > .ant-btn > :nth-child(2)').click({ force: true });
      cy.get(':nth-child(2) > .ant-btn-icon').click({ force: true });
      
      
      // Descrição

      cy.get('.ant-input').type('10010 - Paese', { force: true });
      cy.get(':nth-child(2) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click({ force: true });
      cy.get('[style="padding-left: 5px; padding-right: 5px;"] > .ant-btn').click({ force: true });
      cy.get('[style="padding-left: 5px; padding-right: 5px; margin-top: 20px;"] > .ant-btn').click({ force: true });
      cy.wait(4000);

      //Voltar

      cy.get(':nth-child(2) > .ant-col > [type="button"]').click({ force: true});
      cy.get('[style="padding-left: 5px; padding-right: 5px; text-align: right; margin-top: 20px; padding-top: 8px; gap: 6px; display: flex; justify-content: flex-end;"] > :nth-child(1)').click({ force: true });
      cy.wait(4000);

      //Cancelar

      cy.get('[data-testid="button-cancel"]').click({ force: true});

      

        
    });
    
});