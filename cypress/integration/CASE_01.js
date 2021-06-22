describe('Login', function () {
	before( function () {
        cy.visit('http://httpbin.org');
 
        // Inject the axe-core library
        cy.injectAxe();
		
    });

  // Then in your test...
  it('Logs violations to the terminal', () => {
	//cy.checkA11y(null, null, violations => cy.task('reportA11y', violations));
    cy.checkA11y(null, null, terminalLog);
  })
});

// Define at the top of the spec file or just import it
function terminalLog(violations) {
	cy.task(
	  'log',
	  `${violations.length} accessibility violation${
		violations.length === 1 ? '' : 's'
	  } ${violations.length === 1 ? 'was' : 'were'} detected`
	)
	// pluck specific keys to keep the table readable
	const violationData = violations.map(
	  ({ id, impact, description, nodes }) => ({
		id,
		impact,
		description,
		nodes: nodes.length
	  })
	)
  
	cy.task('table', violationData)
  }