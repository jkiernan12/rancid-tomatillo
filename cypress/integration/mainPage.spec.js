describe('main page',() => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })
  it('should visit homepage and render movies', () => {
    cy.fixture('./example.json').then((allMovies) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        body: allMovies
      })
      cy.contains('Money Plane')
      .should('be.visible')
      cy.contains('Mulan')
      .should('be.visible')

    })
  })

  it('should visit a movie page after clicking it', () => {
    cy.contains('Mulan')
    .click();
    cy.url()
    .should('include', '337401');
  })

  it('should have a header and a search bar', () => {
    cy.get('header')
    .contains('Rancid Tomatillos');
    cy.get('form')
    .should('be.visible')
  })

  it('should filter movies with search', () => {
    cy.get('input')
    .type('Tenet');
    cy.contains('Mulan')
    .should('not.exist');
    cy.contains('Tenet')
    .should('exist');
  })
} )