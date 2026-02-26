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
  
     cy.contains('Cadastro').click({ force: true });
     cy.contains('Veículo').click({ force: true });

     // Adicionar

     cy.get('[data-cy="btn-form-add"] > .ant-btn-icon').click({ force: true });

     // Periféricos

     cy.get('[data-testid="Checkbox-leftDoor"]').click({ force: true });
     cy.get('[data-testid="Checkbox-acessibility"]').click({ force: true });
     cy.get('[data-testid="Checkbox-airConditioned"]').click({ force: true });
     cy.get('[data-testid="Checkbox-twoTurnstiles"]').click({ force: true });
     cy.get('[data-testid="Checkbox-integratedProdataValidator"]').click({ force: true });
     cy.get('[data-testid="Checkbox-hasTd"]').click({ force: true });
     cy.get('[data-testid="Checkbox-fake"]').click({ force: true });
     cy.wait(4000);

     //Dados do veículo

     cy.get('[data-testid="Input-prefix"]') .type('DGG-0015', { force: true });
     cy.get('[data-testid="Input-plate"]').type('DGG-0015', { force: true });
     cy.get('[data-testid="InputNumber-manufactureYear"]').type('2020', { force: true });
     cy.get('[data-testid="InputNumber-modelYear"]').type('2020', { force: true });
     cy.get('[data-testid="Select-vehicleTypeId"] > .ant-select-selector').click({ force: true });
     cy.get('.ant-select-item-option-active > .ant-select-item-option-content > div').click({ force: true });
     cy.get('[data-testid="Select-fuelType"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get(':nth-child(11) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.get('[data-testid="Select-situationId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get(':nth-child(12) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.wait(4000);

     //Integração

     cy.get('[data-testid="Select-avlId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[style="height: 40064px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.get('[data-testid="Input-integrationCode"]').type('123456789', { force: true });
     cy.get('[data-testid="Select-validatorCode"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get(':nth-child(14) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.get('[data-testid="Select-validatorPortId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get(':nth-child(15) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.get('[data-testid="Select-avlValidatorId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[data-testid="Input-validatorPrefix"]').type('10203050', { force: true });
     cy.wait(4000);

     //Cancelar

     cy.get('[data-testid="button-cancel"] > :nth-child(2)').click({ force: true});

     //Prefixo

     cy.get('[data-testid="Input-prefix"]').type('63001', { force: true });
     cy.get('[data-testid="Input-plate"]').type('FOJ0886');
     cy.get('[data-testid="InputNumber-manufactureYear"]').type('2014');
     cy.get('[data-testid="InputNumber-modelYear"]').type('2014');
     cy.get('[data-testid="Select-vehicleTypeId"] > .ant-select-selector').click({ force: true });
     cy.get('.ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.get('[data-testid="Select-fuelType"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get(':nth-child(11) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.get('[data-testid="Select-vehicleSituation"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[label="Bloqueado"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     cy.get('[data-testid="Input-avlNumber"]').type('203050');
     cy.wait(4000);

     //Pesquisar

     cy.get('[data-testid="button-submit"] > :nth-child(2)').click({ force: true });
     cy.wait(5000);

     //Limpar

     cy.get('[data-testid="button-reset"] > :nth-child(2)').click({ force: true });
     cy.wait(4000);

        
    });  
});