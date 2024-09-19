/// <reference types="cypress" />

describe("Sign in as user", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("Sign in as John", () => {
		cy.get("a").contains("Sign In").click();
		cy.url().should("eq", "http://localhost:3000/signin");

		cy.get("#email").type("user@example.com");
		cy.get("#password").type("1234");
		cy.get(".primary").contains("Sign In").click();
		cy.get("a").contains("John").should("exist");
	});
});
