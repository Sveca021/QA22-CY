/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe("Login functionality - Gallery App", () => {
    it("Successful login", () => {
        cy.visit("/login");

        cy.get(locators.loginPage.emailInputField).type("jel.novkovic+123@gmail.com")
        cy.get(locators.loginPage.passwordField).type("Sveca123")
        cy.get(locators.loginPage.submitButton).click();
    });
    it("Unsuccessful login - wrong password", () => {
        cy.visit("/login");

        cy.get(locators.loginPage.emailInputField).type("jel.novkovic+123@gmail.com")
        cy.get(locators.loginPage.passwordField).type("Sveca12333")
        cy.get(locators.loginPage.submitButton).click();
    });
    it("Unsuccessful login - wrong email", () => {
        cy.visit("/login");

        cy.get(locators.loginPage.emailInputField).type("jel.novkovic+12223@gmail.com")
        cy.get(locators.loginPage.passwordField).type("Sveca12333")
        cy.get(locators.loginPage.submitButton).click();
    });

});

