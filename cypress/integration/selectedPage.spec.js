describe('selected movie page', () => {
  beforeEach(() => {
    cy.fixture('./peninsula.json').then((movie) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', {
        statusCode: 200,
        body: movie
      })
      cy.visit('http://localhost:3000/581392');
    })
})

  it('should have all the movie details', () => {
    cy.contains('Peninsula')
    .should('exist');
    cy.contains('Tagline: Escape The Apocalypse')
    .should('exist')
    cy.contains('Rating: ⭐️ 8/10')
    .should('exist')
    cy.contains('Genres: Action, Horror, Thriller')
    .should('exist')
    cy.contains('Release Date: June 2, 2020')
    .should('exist')
    cy.contains('Budget: $17,000,000')
    .should('exist')
    cy.contains('Runtime: 1 hour 54 minutes')
    .should('exist');
    cy.get('.selected-page')
    .get('img')
    .should('exist')
    cy.contains('Trailer')
    .should('exist')
  })

  it('should return to the main page', () => {
    cy.contains('Return')
    .click()
    cy.url()
    .should('include', 'localhost:3000/')
  })
})