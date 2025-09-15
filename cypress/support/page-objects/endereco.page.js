class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('[name="billing_first_name"]').clear().type(nome)
        cy.get('[name="billing_last_name"]').clear().type(sobrenome)
        cy.get('[name="billing_company"]').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('[name="billing_address_1"]').clear().type(endereco)
        cy.get('[name="billing_address_2"]').clear().type(numero)
        cy.get('[name="billing_city"]').clear().type(cidade).click()
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('[name="billing_postcode"]').clear().type(cep)
        cy.get('[name="billing_phone"]').clear().type(telefone)
        cy.get('[name="billing_email"]').clear().type(email)
        cy.get('[name="save_address"]').click()
    }

    editarEnderecoEntrega() {
        //elementos + ações
    }

}

export default new EnderecoPage()