describe('Verify all dashboards are listed', () => {
    it('Verify all dashboards are listed in Settings', () => {
        // Arrange -Setup Initial state
        // - Visit Grow login page
        // - Log in
        cy.visit('https://app.gogrow.com/login')
        cy.get("[name='email']").type("david.herrera83@gmail.com")
        cy.get("[name='password']").type("Angeleyes1")
        cy.get("[title='Sign in to Grow']").click()
        // Act -Take Actions
        // - Click the User Name & Icon
        // - Click Settings
        // - Click Dashboards
        cy.get("[id*='metric-']").then((dashboards) => {
            const count = dashboards.length;
            cy.get("[class*='avatar']").click();
            cy.get("[class*='userAndAccount---settings']").click();
            cy.get("[href='/settings/dashboards']").click();
            cy.get("[class*='dashboards---userListContainer']").contains('Sales Dashboard').click();
        // Assert - make assertion
        // - Assert dashboard count in settings matches count of tiles in the dashboard
            cy.get("[class*='individualDashboard---detail']").contains(count);
        });
    });
});