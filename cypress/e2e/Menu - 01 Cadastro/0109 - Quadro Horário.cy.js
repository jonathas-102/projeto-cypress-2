describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('teste.e2e');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('Abcd1234!');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();
      cy.wait(4000);
  
      cy.get('.ant-modal-footer > .ant-btn').click();
      cy.get('#rcc-confirm-button').click();
      cy.get(':nth-child(1) > .ant-menu-submenu-title').click();
      cy.get('[data-testid="0109"] > .sc-fneYkE').click();
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
      cy.get('.sc-guGTOK').click({ force: true });
      cy.get('.anticon-file-pdf').click({ force: true });
      cy.wait(5000);
      cy.get('.anticon-file-excel').click({ force: true });
      cy.wait(5000);

      cy.get('.ant-pagination-item-2 > a').click({ force: true });
      cy.get('.ant-pagination-options > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item').click({ force: true });
      cy.get('#rc_select_4_list_0 > .ant-select-item-option-content').click({ force: true });
      cy.get('#rc_select_4_list_1 > .ant-select-item-option-content').click({ force: true });
      cy.get('#rc_select_4_list_2 > .ant-select-item-option-content').click({ force: true });

     // Abre modal de edição (1º calendário)
     cy.get('[data-row-key="637076"] [data-cy="edit-action-0"]')
     .should('be.visible')
     .click({ force: true });

     // Aguarda o campo de data de início estar disponível
     cy.get('[data-cy="form-item-startDate"] .ant-picker')
     .should('be.visible')
     .click({ force: true });

     // Seleciona a data de início
     cy.get('[title="2025-04-29"]')
     .should('be.visible')
     .click({ force: true });

     // Abre o calendário do campo de data final
     cy.get('[data-cy="form-item-endDate"] .ant-picker')
     .should('be.visible')
     .click({ force: true });

     // Seleciona a data de fim
     cy.get('[data-cy="InputDate-endDate"]').click({ force: true });
     cy.get(':nth-child(10) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > :nth-child(1) > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > :nth-child(2) > [title="2025-05-07"]').click({ force: true });

     cy.get('[data-testid="InputNumber-interval"]').type('60', { force: true });
     cy.get('[data-testid="Custom-calculateInterval"]').click({ force: true }); 
     cy.get('[data-testid="Custom-intervalPerTrack"]').click({ force: true });
     cy.wait(4000); 
     cy.get(':nth-child(1) > [data-testid="RangeTimePicker-timeBand"]').click({ force: true });
     cy.get(':nth-child(1) > [data-testid="RangeTimePicker-timeBand"]').type('00:00', { force: true });
     cy.get('.ant-picker-ok > .ant-btn').click({ force: true });
     cy.wait(4000);
     cy.get(':nth-child(3) > [data-testid="RangeTimePicker-timeBand"]').type('12:00', { force: true });
     cy.get('.ant-picker-ok > .ant-btn').click({ force: true });
     cy.wait(4000);
     cy.get('.ant-col-4 > .ant-form-item > [data-cy="form-item-interval"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number > .ant-input-number-input-wrap > [data-testid="InputNumber-interval"]').type('60', { force: true });
     cy.get('.ant-btn-icon-only').click({ force: true });
     cy.get('[data-testid="Custom-addbutton"] > :nth-child(2)').click({ force: true });
     cy.wait(4000);
     cy.get('.sc-lfDbuM > .sc-dCVDEO > .ant-form > .row-btns > .ant-col > div > [data-testid="button-cancel"] > :nth-child(2)').click({ force: true });
     cy.wait(4000);
     cy.get('[data-testid="button-cancel"]').click({ force: true });
     cy.wait(4000);
      

    

        
    });  
});