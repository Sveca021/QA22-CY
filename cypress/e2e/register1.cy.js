/// <reference types="Cypress" />

describe("Register via API", () => {
    it('Successful registration via API', () => {

        cy.request({
            url: "https://gallery-api.vivifyideas.com/api/auth/register",
            method: "POST",
            body: {
                email: "jel.novkovic123123789@gmail.com",
                first_name: "Jelena",
                last_name: "Novkovic",
                password: "Sveca123",
                password_confirmation: "Sveca123",
                terms_and_conditions: true,
            }
        }).its("body").then((resp) => {
            let respToken = resp.access_token;
            let tokenType = resp.token_type;
            expect(respToken).to.be.a("string");
            expect(tokenType).eq("bearer");
        });


    })
})
