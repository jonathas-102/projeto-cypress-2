// cypress/e2e/Menu - 03+Monitoramento/0305 - Gestão Operacional.cy.js

describe('Acessando a página do Flits', () => {
  it('Deve visitar a página do Flits', () => {

    // Acessa a URL principal
    cy.visit('http://10.10.50.48:3102/');

    // Faz login
    cy.get('[data-cy="form-item-username"] .ant-input')
      .type('jonathas.nascimento');
    cy.get('[data-cy="form-item-password"] .ant-input')
      .type('20252025@Mtzero');
    cy.get('.ant-form-item-control-input-content > .ant-btn')
      .click();

    // Espera o sistema carregar e fecha os modais iniciais
    cy.wait(8000);
    cy.get('.ant-modal-footer > :nth-child(2)').click();
    cy.wait(4000);
    cy.get('#rcc-confirm-button').click();

    // Abre o menu "Cadastro"
    cy.get(':nth-child(4) > .ant-menu-submenu-title').click();

    // Clica no submenu "Gestão Operacional"
    cy.contains('Gestão Operacional').click({ force: true });

    // Clica no botão de pesquisa / consulta
    cy.get('.ant-col > .ant-btn').click({ force: true });
    cy.wait(4000);

    // Clica no botão de salvar / confirmar
    cy.get('[data-testid="button-submit"] > :nth-child(2)')
      .click({ force: true });
    cy.wait(4000);

    // === INCLUIR ESCALA ===
   // pega todos os botões flutuantes visíveis e clica no do meio
    cy.get('.ant-float-btn:visible')
     .eq(0)                // 0 = cima, 1 = meio, 2 = baixo
     .click();

     // Espera o popover aparecer (é injetado no <body>)
     cy.get('body .ant-popover').should('be.visible');

     // Clica no item "Incluir escala" dentro do popover
     cy.get('body .ant-popover .ant-menu-title-content')
     .contains(/incluir escala/i)
     .click();

     cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });
     cy.get('.ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     // Seleciona o tipo de dia

     cy.get('[data-testid="Select-typeDay"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.contains('Útil').click({ force: true });

     //Quadro horario não possui


     cy.get('[data-testid="button-cancel"]').click({ force: true });
     cy.wait(4000);

  });
});
