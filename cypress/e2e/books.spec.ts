/// <reference types="cypress" />

describe('Books Management E2E', () => {
  const book = {
    title: `Book ${Date.now()}`,
    author: 'Author Test',
    isbn: `ISBN${Date.now()}`
  };
  const updatedBook = {
    title: `Updated ${book.title}`
  };

  before(() => {
    cy.login();
  });

  it('creates a new book', () => {
    cy.visit('/books');
    cy.get('[data-cy=add-book]').click();
    cy.get('[data-cy=title]').type(book.title);
    cy.get('[data-cy=author]').type(book.author);
    cy.get('[data-cy=isbn]').type(book.isbn);
    cy.get('[data-cy=submit]').click();
    cy.contains(book.title).should('exist');
  });

  it('edits the book', () => {
    cy.contains(book.title).parent().find('[data-cy=edit]').click();
    cy.get('[data-cy=title]').clear().type(updatedBook.title);
    cy.get('[data-cy=submit]').click();
    cy.contains(updatedBook.title).should('exist');
  });

  it('deletes the book', () => {
    cy.contains(updatedBook.title).parent().find('[data-cy=delete]').click();
    cy.get('[data-cy=confirm-delete]').click();
    cy.contains(updatedBook.title).should('not.exist');
  });
});
