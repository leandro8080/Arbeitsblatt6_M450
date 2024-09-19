/// <reference types="cypress" />

describe("example sharkblaze website", () => {
	beforeEach(() => {
		cy.visit("https://sharkblaze.netlify.app/");
	});

	it("Go to JMI karriere", () => {
		cy.get(".container").contains("Karriere").click();
		cy.url().should("eq", "https://sharkblaze.netlify.app/karriere");
	});

	it("Go to JMI Projekte then to JMI Referenzen", () => {
		cy.get(".container").contains("Projekte").click();
		cy.url().should("eq", "https://sharkblaze.netlify.app/projekte");

		cy.get(".unterliste1").contains("Referenzen").click();
		cy.url().should("eq", "https://sharkblaze.netlify.app/referenzen");
	});
});
