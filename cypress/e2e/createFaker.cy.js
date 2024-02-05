/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";

const locators = require('../fixtures/locators.json')
let title
let description

describe("Create Gallery using Faker", () => {
    it("Create Gallery using Faker", () => {
        title = faker.string.alpha(10);
        description = faker.string.alphanumeric(5)
        cy.visit("/login");

        cy.get(locators.loginPage.emailInputField).type("jel.novkovic+123@gmail.com")
        cy.get(locators.loginPage.passwordField).type("Sveca123")
        cy.get(locators.loginPage.submitButton).click();

        cy.get('a[href="/create"]').should("be.visible").click();
        cy.get("h1").should("have.text", "Create Gallery");

        cy.get("#title").should("be.visible").type(title);
        cy.get("#description").should("be.visible").type(description);

        cy.get('input[type="url"]').type("https://www.motowag.com/wp-content/uploads/2023/01/1969-ford-mustang.jpg")


        cy.contains("Submit").click();
    });
})