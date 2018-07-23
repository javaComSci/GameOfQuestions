describe('Main test for inputting questions and answering', () => {
	before(() => {
		cy.visit('/');
	});

	it('Canary test', () => {
		expect(true).equals(true);
	});

	it('Should display component to input questions on initial render', () => {
		cy.get('div[id="Inputs"]');
	});

	it('Should display component to display after submit', () => {
		cy.reload();
		cy.get('div[id="Inputs"]');
		cy.contains("Submit").click();
		cy.get('div[id="Display"]');	
	});

	it('Should provide points for correct answer',() => {
		cy.reload();

		cy.get('input.0').type("CATEGORY 0");
		cy.get('input.1').type("CATEGORY 1");
		cy.get('input.2').type("CATEGORY 2");
		cy.get('input.3').type("CATEGORY 3");

		cy.get('label[id="00"]').contains("Question:").within(() => {
			cy.get('input').type("Question 1");
		});

		cy.get('label[id="00"]').contains("Answer:").within(() => {
			cy.get('input').type("Answer 1");
		});
		
		cy.contains("Submit").click();

		cy.get('div[id="Display"]');

		cy.get('button[id="00"]').click();
		cy.get('button[id="00"]').should('be.disabled');

		cy.get('#in').parent().contains('Question 1');
		cy.get("#in").type("Answer 1");

		cy.get('input[type="submit"]').click();

		cy.contains('SCORE: ').parent().contains('500');
		cy.contains('YOU GOT IT RIGHT!');
	});

	it('Should not provide points for incorrect answer', () => {
		cy.reload();

		cy.get('label[id="11"]').contains("Question:").within(() => {
			cy.get('input').type("Question 2");
		});

		cy.get('label[id="11"]').contains("Answer:").within(() => {
			cy.get('input').type("Answer 2");
		});

		cy.contains("Submit").click();

		cy.get('button[id="11"]').click();

		cy.get('#in').parent().contains('Question 2');
		cy.get("#in").type("Answer 1");

		cy.get('input[type="submit"]').click();

		cy.contains('SCORE: ').parent().contains('0');
		cy.contains('SORRY, WRONG ANSWER!');

		cy.get("#in").should('be.empty');
		cy.get("#in").type('Answer 2');
		cy.get('input[type="submit"]').click();
		cy.contains('YOU GOT IT RIGHT!');
		cy.contains('SCORE: ').parent().contains('0');
	});

	it('Should fill in default values and given values', () => {
		cy.reload();
		cy.get('label[id="22"]').contains("Question:").within(() => {
			cy.get('input').type("Question 3");
		});

		cy.get('label[id="22"]').contains("Answer:").within(() => {
			cy.get('input').type("Answer 3");
		});

		cy.contains("Submit").click();

		cy.get('button[id="11"]').click();

		cy.get('#in').parent().contains('Q');
		cy.get("#in").type("A");
		cy.get('input[type="submit"]').click();
		cy.contains('YOU GOT IT RIGHT!');
	});
});
