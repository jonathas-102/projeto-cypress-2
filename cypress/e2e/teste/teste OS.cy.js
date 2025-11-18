describe('Acessando a página do Flits', () => {
  it('Deve visitar a página do Flits', () => {
    cy.visit('http://10.10.50.48:3106/login');

    cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('Jonathas.nascimento');
    cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('20252025@Mtzero');
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    cy.wait(4000);

    cy.get('.ant-modal-footer > .ant-btn').click();
    cy.get('[data-testid="17"] > .sc-eEhoOH').click({ force: true });
    cy.get('[data-testid="1702"] > .sc-eEhoOH > .title').click({ force: true });
    cy.get('[data-testid="button-submit"] > :nth-child(2)').click({ force: true });
    cy.wait(4000);
    
   //Preenche o nome do tecnico

    cy.get('[data-testid="Custom-"] > .ant-btn').click({ force: true });
    cy.get('#rc_select_11').type('Jonathas Nascimento');
    cy.get('.ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

    // preenche o campo endereço

    cy.get('[data-testid="Input-address"]').type('Rua Teste, 123, Bairro Exemplo, Cidade Exemplo', { force: true });
    cy.get('[data-testid="Input-neighborhood"]').type('Bairro Exemplo', { force: true });
    cy.get('[data-testid="Select-companyId"] > .ant-select-selector').click({ force: true });
    cy.get('[label="Capellini - BUS +"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
    cy.get('#rc_select_13').click({ force: true });
    cy.get('[label="604 - Paulínia (Rodoshopping) / Campinas (TMC)"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
    cy.get('[data-cy="DatePicker-date"]').type('30/08/2025', { force: true });
    cy.get('.ant-picker-cell-today').click({ force: true });







    
      
      
  });
  

});