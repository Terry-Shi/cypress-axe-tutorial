describe('Login', function () {
	before( function () {
        cy.visit('http://httpbin.org');
 
        // Inject the axe-core library
        cy.injectAxe();
		
    });


	it('checkA11y', function () {
         
        // Test the page at initial load
        cy.checkA11y();
    });
});