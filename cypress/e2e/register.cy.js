/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe("Registration functionality - Gallery App", () => {

    it("Unsuccessful registration - invalid email address", () => {
        cy.visit("/register");
        cy.url().should('contain', '/register');
    
        cy.get('h1').should('have.text', 'Register')
        cy.get('label').eq(0).should('have.text', 'First Name')
        cy.get('label').eq(1).should('have.text', 'Last Name')
        cy.get('label').eq(2).should('have.text', 'Email')
        cy.get('label').eq(3).should('have.text', 'Password')


        cy.get(locators.registrationPage.firstNameInputfield).type("Jelena");
        cy.get(locators.registrationPage.lastnameinputField).type("Novkovic");
        cy.get(locators.registrationPage.emailInputField).type("jel.novkovic+123gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("Sveca123");
        cy.get(locators.registrationPage.passwordConfirmationInputField).type("Sveca123");
        cy.get(locators.registrationPage.termsCheckbox).check();
        cy.get(locators.registrationPage.submitButton).click();
    });
    it("Unsuccessful registration - invalid password confirmation", () => {
        cy.visit("/register");

        cy.get(locators.registrationPage.firstNameInputfield).type("Jelena");
        cy.get(locators.registrationPage.lastnameinputField).type("Novkovic");
        cy.get(locators.registrationPage.emailInputField).type("jel.novkovic+123@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("Sveca123");
        cy.get(locators.registrationPage.passwordConfirmationInputField).type("Sveca1233");
        cy.get(locators.registrationPage.termsCheckbox).check();
        cy.get(locators.registrationPage.submitButton).click();
    });
    it("Successful registration", () => {
        cy.visit("/register");

        cy.get(locators.registrationPage.firstNameInputfield).type("Jelena");
        cy.get(locators.registrationPage.lastnameinputField).type("Novkovic");
        cy.get(locators.registrationPage.emailInputField).type("jel.novkovic+123@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("Sveca123");
        cy.get(locators.registrationPage.passwordConfirmationInputField).type("Sveca123");
        cy.get(locators.registrationPage.termsCheckbox).check();
        cy.get(locators.registrationPage.submitButton).click();
    });

});


