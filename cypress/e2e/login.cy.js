/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    

    it('Deve fazer login com sucesso' , () =>{
        cy.get('[name="username"]').type('henrique@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('Lemebeli0908')
        cy.get('[name="login"]').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , '(não é henrique? Sair)')
        
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido' , () => {
        cy.get('[name="username"]').type('enrique@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('Lemebeli0908')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')

    })
    
    it('Deve exibir uma mensagem de erro ao inserir senha inválida' , () => {
        cy.get('[name="username"]').type('henrique@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('Lemebeli0000')
        cy.get('[name="login"]').click()
        
        cy.get('.woocommerce-error > li').should('contain' , 'A senha fornecida para o e-mail henrique@gmail.com está incorreta')
        
    })
}) 