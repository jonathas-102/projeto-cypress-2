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

     //Seleciona um item do menu
  
     cy.get('[data-testid="01"] > .sc-iAUPGz').click();
     cy.get('[data-testid="0109"] > .sc-iAUPGz > .title').click();

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

      cy.get('[data-testid="Select-typeDay"] > .ant-select-selector').click({ force: true });
      cy.get('[label="Sábado"] > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[label="Domingo"] > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[label="Feriado"] > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[label="Útil"] > .ant-select-item-option-content > div').click({ force: true });
      cy.get('[data-testid="Input-code"]').type('U579TRO057');
      cy.get('[data-testid="Input-goal"]').type('U579TRO057 - 31/05/2023');
      cy.get('[data-testid="CheckboxNull-active"]').click({ force: true });
      cy.get('[data-testid="CheckboxNull-active"]').click({ force: true });
      cy.get('[data-testid="button-submit"]').click({ force: true });
      cy.wait(5000);

      
      cy.get('[data-testid="button-reset"]').click({ force: true });
      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(5000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(5000);

      //Incluir 

      cy.get('.ant-btn-text').click();
      cy.wait(4000);
      cy.get('[data-cy="btn-form-add"]').click({ force: true });
      cy.get('[data-testid="Input-code"]').type('U579T57');
      cy.get('#rc_select_8').click({ force: true });
      cy.get('.ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
      cy.get('#rc_select_9').click({ force: true });
      cy.get('[data-testid="Input-goal"]').type('E2E Cypress');

      //Data 

      cy.get('[data-cy="InputDate-startDate"]').type('04/09/2025', { force: true });
      cy.get('[data-cy="InputDate-endDate"]').type('30/09/2025', { force: true });
      cy.get('[data-testid="InputNumber-interval"]').type('61');
      cy.get('[data-testid="button-cancel"]').click({ force: true });
      cy.wait(5000);



        
    });  
});