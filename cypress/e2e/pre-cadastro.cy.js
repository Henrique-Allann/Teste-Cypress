/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o Pré Cadastro com sucesso', () => {
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()
        let emailFaker = faker.internet.email({
            firstName: nomeFaker
        });
        
        cy.get('[name="email"]').type(emailFaker)
        cy.get('.register > :nth-child(2) > [name="password"]').type('testando@teste.com')
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(nomeFaker)
        cy.get('[name="account_last_name"]').type(sobrenomeFaker)
        cy.get('[name="save_account_details"]').click()
        
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o pré-cadastro com sucesso usando Comandos customizados' , () => {
        let emailFaker2 = faker.internet.email();
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'Henrique', 'Allan')
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

  
});