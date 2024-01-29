describe("Create Gallery - Gallery App"); 
    it("Successful", () => {
        cy.visit("https://gallery-app.vivifyideas.com/create");

        cy.get("#Title:").type("Waterfall")
        cy.get("#Descriptions:").type("water")
        cy.get("#Images:").type("https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        cy.get("submit").click();
    });

