/// <reference types="cypress" />

describe("Test flashcards", () => {
	beforeEach(() => {
		cy.visit("http://localhost:9000");
	});

	it("Create flashcards", () => {
		cy.get("#createButton").click();
		cy.get("#questionInput").type("Super cool question");
		cy.get("#answerInput").type("Super cool answer");
		cy.get("#saveCardButton").click();

		cy.get("#question0").should("have.text", "Super cool question");
		cy.get("#showAnswerButton0").click();
		cy.get("#answer0").should("have.text", "Super cool answer");
	});

	it("Edit flashcard", () => {
		cy.get("#createButton").click();
		cy.get("#questionInput").type("Super cool question");
		cy.get("#answerInput").type("Super cool answer");
		cy.get("#saveCardButton").click();

		cy.get("#flashcardEdit0").click();
		cy.get("#editQuestionInput").clear().type("Not cool question");
		cy.get("#editAnswerInput").clear().type("Not cool answer");
		cy.get("#saveEditedFlashcardButton").click();

		cy.get("#question0").should("have.text", "Not cool question");
		cy.get("#showAnswerButton0").click();
		cy.get("#answer0").should("have.text", "Not cool answer");
	});

	it("Delete flashcard", () => {
		cy.get("#createButton").click();
		cy.get("#questionInput").type("Super cool question");
		cy.get("#answerInput").type("Super cool answer");
		cy.get("#saveCardButton").click();

		cy.get("#deleteButton0").click();
		cy.get("#flashcardList").should("be.empty");
	});

	it("Show answer", () => {
		cy.get("#createButton").click();
		cy.get("#questionInput").type("Super cool question");
		cy.get("#answerInput").type("Super cool answer");
		cy.get("#saveCardButton").click();

		cy.get("#question0").should("have.text", "Super cool question");
		cy.get("#showAnswerButton0").click();
		cy.get("#answer0").should("have.text", "Super cool answer");
	});
});
