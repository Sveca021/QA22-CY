/// <reference types="Cypress" />

describe("Registration functionality - Gallery App", () => {

    it("Unsuccessful registration - invalid email address", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");

        cy.get("#first-name").type("Jelena");
        cy.get("#last-name").type("Novkovic");
        cy.get("#email").type("jel.novkovic+123gmail.com");
        cy.get("#password").type("Sveca123");
        cy.get("#password-confirmation").type("Sveca123");
        cy.get(".form-check-input").check();
        cy.get("button").click();
    });
    it("Unsuccessful registration - invalid password confirmation", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");

        cy.get("#first-name").type("Jelena");
        cy.get("#last-name").type("Novkovic");
        cy.get("#email").type("jel.novkovic+123@gmail.com");
        cy.get("#password").type("Sveca123");
        cy.get("#password-confirmation").type("Sveca1233");
        cy.get(".form-check-input").check();
        cy.get("button").click();
    });
    it("Successful registration", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");

        cy.get("#first-name").type("Jelena");
        cy.get("#last-name").type("Novkovic");
        cy.get("#email").type("jel.novkovic+123@gmail.com");
        cy.get("#password").type("Sveca123");
        cy.get("#password-confirmation").type("Sveca123");
        cy.get(".form-check-input").check();
        cy.get("button").click();
    });

});


