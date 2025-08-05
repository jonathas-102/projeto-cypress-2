describe('Acessando a página do Flits', () => {
    it('Deve visitar a página do Flits', () => {
      cy.visit('http://10.10.50.48:3102/');

      // Preenche com dados inválidos
      // Após executar o teste deve ser apresentado o reCaptcha
  
      cy.get('[data-cy="form-item-username"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('teste');
      cy.get('[data-cy="form-item-password"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type('Abcd123');
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();

     // Valida a mensagem de erro
     cy.contains("Complete a tarefa: 'Não sou um robô'")
      .should('be.visible');

     // Valida a tarefa Não sou um robô
     cy.contains("'Não sou um robô'")
     .should('be.visible');
  

    });
});
  