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
     cy.get('[data-testid="0116"] > .sc-hHuwoJ > .title').click({ force: true });

     //Adicionar 

     cy.get('[data-cy="btn-form-add"]').click({ force: true });
     cy.wait(4000);

     //Motivo

     cy.get('[data-testid="Select-reasonId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('.ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     //Função

     cy.get('[data-testid="Select-roleId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[label="Manutenção"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     //Funcionario

     cy.get('[data-testid="Select-employeeId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[style="height: 800px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     //Cancelar

     cy.get('[data-testid="button-cancel"] > :nth-child(2)').click({ force: true });
     cy.wait(4000);

          //Adicionar 

     cy.get('[data-cy="btn-form-add"]').click({ force: true });
     cy.wait(4000);

     //Motivo

     cy.get('[data-testid="Select-reasonId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('.ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     //Função

     cy.get('[data-testid="Select-roleId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[label="Manutenção"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     //Funcionario

     cy.get('[data-testid="Select-employeeId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[style="height: 800px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     //Salvar

     cy.get('[data-testid="button-submit"] > :nth-child(2)').click({ force: true });
     cy.wait(4000);




     




        
    });  
});