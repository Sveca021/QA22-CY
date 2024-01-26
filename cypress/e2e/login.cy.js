/// <reference types="Cypress" />

describe("Login functionality - Gallery App", () => {
    it("Successful login", () => {
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("jel.novkovic+123@gmail.com")
        cy.get("#password").type("Sveca123")
        cy.get("button").click();
    });
    it("Unsuccessful login - wrong password", () => {
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("jel.novkovic+123@gmail.com")
        cy.get("#password").type("Sveca12333")
        cy.get("button").click();
    });
    it("Unsuccessful login - wrong email", () => {
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("jel.novkovic+12223@gmail.com")
        cy.get("#password").type("Sveca12333")
        cy.get("button").click();
    });

});

