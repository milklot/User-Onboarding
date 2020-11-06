describe('Form.js testing', () => {
	// run this code before test runs
	beforeEach(() => {
		//go to this link						
		cy.visit("http://localhost:3001/");
	})


	const nameInput = () => cy.get('input[name=name]');
	const emailInput = () => cy.get('input[name=email]');
	const passwordInput = () => cy.get('input[name=password]');
	const check_box = () => cy.get('input[name=terms]');
	const submitBtn = () => cy.get('button[id="submitBTN"]');

	it("get the name input and type a name in it", () => {
		nameInput().should('exist')
		.type('John Cena')
		.should('have.value', "John Cena");
	})

	it("get the 'email' unput and type address in it", () => {
		emailInput().should("exist")
		.type("example@example.com")
		.should("have.value", "example@example.com");
	})

	it("get the password input and type in it", () => {
		passwordInput().should('exist')
		.type('passWORD');
	})

	it('check if user can check the terms and service box', () => {
		check_box().check().should('be.checked');
	})

	it('check if user can submit the form data', () => {
		nameInput().type('John Cena');
		emailInput().type("example@example.com");
		passwordInput().type('passWORD');
		check_box().check();
		submitBtn().click();
	})

	it('form validation is left empty', () => {
		nameInput().should('have.value', '');
		emailInput().should('have.value', '');
		passwordInput().should('have.value', '');
		check_box().should('not.be.checked');

	})
})