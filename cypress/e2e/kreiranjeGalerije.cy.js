/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

import { loginPage } from '../page_objects/loginPage';

describe("Create Gallery - Gallery App", () => {

    beforeEach(() => {
        cy.visit("/login");
        cy.get(locators.loginPage.emailInputField).type("jel.novkovic+123@gmail.com")
        cy.get(locators.loginPage.passwordField).type("Sveca123")
        cy.get(locators.loginPage.submitButton).click();
    });


    it("Successful", () => {
        cy.get('[href="/create"]').click();
        cy.get(locators.creategalleryPage.titleInputField).type("Waterfall")
        cy.get(locators.creategalleryPage.descriptionInputField).type("water")
        cy.get(locators.creategalleryPage.imageInputField).type("https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        cy.get(locators.creategalleryPage.submitButton).click();
    });
})
