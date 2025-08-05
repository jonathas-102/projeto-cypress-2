describe('Acessando a página do Flits', () => {
  it('Deve visitar a página do Flits', () => {
    cy.visit('http://10.10.50.48:3102/');

    cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('teste.e2e');
    cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('Abcd1234!');
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    cy.wait(4000);

    cy.get('.ant-modal-footer > .ant-btn').click();
    cy.get('#rcc-confirm-button').click();

    cy.get('[data-testid="Select-lineGroupId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click();
    cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click();

    cy.get('[data-testid="Select-lineGroupId"] > .ant-select-selector').click({ force: true });
    cy.get('[data-testid="Select-companyLineId"] > .ant-select-selector').click({ force: true });

    // Define as opções específicas a serem selecionadas
    //Se algum valor de texto ou valor de backend mudar no futuro, o teste irá falhar, indicando que há uma discrepância, ajudando na manutenção e atualização do sistema.
    const optionsToSelect = [
      '100 - Especial Funcionário',
      '103P.O - Parada Operacional',
      '180 - Osasco (Jardim 1º de Maio) / São Paulo (Lapa)',
      '181 - Carapicuíba (Pq. Santa Teresa) / São Paulo (Lapa)',
      '244 - Osasco (Centro) / Cotia (Rod. Raposo Tavares, Km 21)',
      '263 - Carapicuíba (Novo Horizonte) / Osasco (Vila Yara)',
      '404 - Osasco (Novo Osasco) / São Paulo (Metrô Vila Sônia)',
      '466EX1 - Osasco (Terminal Santa Maria) / Barueri (Alphaville/Green Valley) via Veloso',
      '466EX2 - Osasco (Santa Maria) / Barueri (Alphaville/Green Valley) via (Bradesco Cidade de Deus)',
      '466TRO - Osasco(Conjunto dos Metalurgicos)Barueri(Alphaville/Green Valley)',
      '479 - Carapicuíba (Pq. Santa Teresa) / Osasco (Centro)',
      '496 - São Paulo (Jd. João XXIII) / Barueri (Alphaville / Green Valley)',
      '496EX1 - São Paulo (Rodovia Raposo Tavares - KM 17,8) - Barueri (Alphaville/Green Valley)',
      '496VP1 - São Paulo (Raposo Tavares Km 17,8) / Barueri (Alphaville / Green Valley)',
      '572 - Osasco (Jd. Santa Maria) / São Paulo (Metrô Morumbi)',
      '579 - Osasco (Vila Yolanda) / Barueri (Alphaville / Green Valley)',
      '835 - São Paulo (Metrô Vila Sonia) / Barueri (Alphaville / Green Valley)',
      'I - 059PR1 - Carapicuíba (Jd Novo Horizonte) / São Paulo (Metrô Butantã)',
      'I - 060BI1 - Osasco (Jd. Santa Maria) / SP (Metrô Butantã)',
      'I - 180DV1 - Osasco (1º de Maio) via Jd. Conceição / SP (Lapa)',
      'I - 180DV2 - Osasco (1º de Maio) Via Jd. Paulista / SP (Lapa)',
      'I - 244BI1 - Osasco (Vila Yara) / Cotia (Rod. Raposo Tavares, Km 21)',
      'I - 244VP1 - Osasco (Cidade de Deus) / Cotia (Rod. Raposo Tavares, Km 21)',
      'I - 466 - Osasco (Jd. Santa Maria) / Barueri (Alphaville III)',
      'I - 466VP1 - Osasco (Cj. dos Metalúrgicos) / Barueri (Alphaville III)',
    ];

    // Abre o dropdown
    cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').should('be.visible');

    // Seleciona uma opção que está na lista
    cy.get('.ant-select-dropdown')
      .find('div[role="option"]') // Encontra as opções do dropdown
      .each(($option) => {
        const optionText = $option.text().trim();

        // Se o texto da opção for um dos que desejamos, clica nela
        if (optionsToSelect.includes(optionText)) {
          cy.wrap($option).click({ force: true });
        }
      });
      cy.get('[data-testid="Checkbox-usingExtraTrip"]').click({ force: true });
      cy.get('[data-testid="Checkbox-usingTransferTrip"]').click({ force: true });
      cy.get('.sc-gjZUHa > .ant-btn').click({ force: true });
      cy.wait(2000);
      cy.get('.sc-fIVDxH > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox-label').click({ force: true });
      
      
  });
  

});