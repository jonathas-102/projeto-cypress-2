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
     cy.get('[data-testid="0101"] > .sc-hHuwoJ > .title').click({ force: true });

     //Adicionar 

     cy.get('[data-cy="btn-form-add"]').click({ force: true });
     cy.wait(4000);

     //Nome 
     cy.get('[data-testid="Input-name"]').type('Jonathas QA', { force: true });
     //Matricula
     cy.get('[data-testid="Input-registration"]').type('3597', { force: true });
     //CPF
     cy.get('[data-testid="Input-cpf"]').type('40365021075', { force: true });
     //Função
     cy.get('[data-testid="Select-idEmployeeRole"] > .ant-select-selector').click({ force: true });
     cy.get('[label="Cobrador"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     //Situação
     cy.get('[data-testid="Select-idEmployeeState"] > .ant-select-selector').click({ force: true });
     cy.get('[label="Ativo"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });

     cy.wait(4000);

     //Senha
     cy.get('[data-testid="Input-password"]').type('12345678', { force: true });
     //Crachá
     cy.get('[data-testid="Input-badgeCode"]').type('2020', { force: true });

     //Data admissão
     cy.get('[data-cy="form-item-admissionDate"]')
     .find('input')
     .type('{selectall}10/02/2026{enter}', { force: true })

     //Jornada

     cy.get('[data-testid="TimePicker-contractualJourney"]').type('08:00', { force: true }).type('{enter}', { force: true });

     cy.get('[data-testid="button-cancel"] > :nth-child(2)').click({ force: true });
     cy.wait(4000);

    
     //Filtros


     //CPF
     cy.get('[data-testid="Input-codeNumber"]').type('403.650.210-75', { force: true });
     //Matricula
     cy.get('[data-testid="Input-registration"]').type('3597', { force: true });
     //Nome
     cy.get('[data-testid="Input-name"]').type('Jonathas QA', { force: true });
     //Função
     cy.get('[data-testid="Select-employeeRoleId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[label="Cobrador"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     //Situação
     cy.get('[data-testid="Select-employeeStateId"] > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search').click({ force: true });
     cy.get('[label="Ativo"] > .ant-select-item-option-content > div > :nth-child(1)').click({ force: true });
     //cracha
     cy.get('[data-testid="Input-badgeCode"]').type('2020', { force: true });
     //Data
     cy.get('[data-cy="form-item-admissionDate"] input')
     .invoke('removeAttr', 'readonly')
     .type('10/02/2026{enter}')



     
     //Jornada
     cy.get('[data-testid="TimePicker-contractualJourney"]').type('08:00', { force: true }).type('{enter}', { force: true });
     
     
     //Pesquisar
     cy.get('[data-testid="button-submit"]').click({ force: true });
     cy.wait(8000);
     cy.get('[data-testid="button-reset"] > :nth-child(2)').click({ force: true });




        
    });  
});