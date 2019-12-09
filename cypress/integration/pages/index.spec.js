
describe('Home page', () => {
  /*
   * Visits the page before each test
   */
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit('/');
  });

  it('should have a home link', () => {
    cy.get('a[href="/"]').should('have.length', 1);
  });

  it('should have a title', () => {
    cy.get('h1').should('have.length', 1);
  });
});
