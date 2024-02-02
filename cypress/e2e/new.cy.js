/// <reference types="Cypress" />

describe("Create Gllery", () => {

    beforeEach(() => {
        // cy.request({
        //     url: "https://gallery-api.vivifyideas.com/api/auth/login",
        //     method: "POST",
        //     body: {
        //         email: "jel.novkovic@gmail.com",
        //         password: "Sveca123",
        //     }
        // }).its("body").then((resp) => {
        //     let respToken = resp.access_token;
        //     let tokenType = resp.token_type;
        //     expect(respToken).to.be.a("string");
        //     expect(tokenType).eq("bearer");

        //     window.localStorage.setItem('token', respToken);
        //     cy.loginviaAPI();
        //     cy.visit("")
        // });
        cy.loginviaAPI()
    })

    it("Successfully create gallery with one image", () => {
        cy.visit('');
        cy.get('a[href="/create"]').should("be.visible").click();
        cy.get("h1").should("have.text", "Create Gallery");

        cy.get("#title").should("be.visible").type("Nova Galerija - Jelena");
        cy.get("#description").should("be.visible").type("Galerija Mustang");

        cy.get('input[type="url"]').type("https://www.motowag.com/wp-content/uploads/2023/01/1969-ford-mustang.jpg")


        cy.contains("Submit").click();
    });

})