describe('View dashboard after tile expansion', () => {
    it('View dashboard after expanding and exiting a tile', () => {
        // Arrange -Setup Initial state
        // - Visit Grow login page
        // - Log in
        cy.visit('https://app.gogrow.com/login');
        cy.get("[name='email']").type("david.herrera83@gmail.com");
        cy.get("[name='password']").type("Angeleyes1");
        cy.get("[title='Sign in to Grow']").click();
        // Act -Take Actions
        // - Expand element
        // - Escape element
        cy.get("[id*='metric-']").first().click();
        cy.get("[class*='close']").click();
        // Assert - make assertion
        // - Assert dashboard is back in view
        cy.get("[id*='metric-']").then((dashboard) => {
            expect(dashboard).to.exist;
        });
    });
});