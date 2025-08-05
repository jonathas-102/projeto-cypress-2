describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('teste.e2e');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('Abcd1234!');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();
      cy.wait(4000);
  
      cy.get('.ant-modal-footer > .ant-btn').click();
      cy.get('#rcc-confirm-button').click();

      // Clica no menu cadastro

      cy.get(':nth-child(7) > .ant-menu-submenu-title').click();

      // Clica no sub menu Escala Padrão

      cy.contains('Usuário Empresa').click({ force: true });
      cy.get('.ant-col > .ant-btn').click({ force: true });
      cy.wait(4000);
      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });

      // Pesquisa e limpa o campo de pesquisa

      cy.get('[data-cy="form-item-companyOrGroup"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click({ force: true });
      cy.wait(4000);
      cy.get('[label="Cittati"]').click({ force: true });
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
      cy.get('[label="Cittati"] > .ant-select-item-option-content > .company-company-group-select').click({ force: true });
      cy.get('[data-testid="Select-product"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Auttran"]').click({ force: true });
      cy.get('[data-testid="Select-profile"] > .ant-select-selector').click({ force: true });
      cy.wait(4000);
      cy.get(':nth-child(11) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active').click({ force: true });
      cy.get('.ant-col > div > .ant-btn').click({ force: true });
      cy.get('[style="padding-left: 5px; padding-right: 5px; text-align: right; margin-top: 20px; padding-top: 8px; gap: 6px; display: flex; justify-content: flex-end;"] > :nth-child(1)').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(4000);
      cy.get('[style="padding-left: 5px; padding-right: 5px; text-align: right; margin-top: 20px; padding-top: 8px; gap: 6px; display: flex; justify-content: flex-end;"] > :nth-child(2)').click({ force: true });

      // Incluir Visibilidade

      




        
    });
    
});