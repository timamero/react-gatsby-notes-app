describe('home page tests', () => {
  beforeEach(() => {
    cy.clearDatabase()
  })

  describe('with no notes in the database', () => {
    beforeEach(() => {
      cy.request('GET', 'http://localhost:3001/notes') 
      cy.visit('/')
    })
  
    it('index page can be opened', () => {
      cy.get('.title')
        .contains('Notes App')
        .should('have.class', 'title')
    })

    it('My Notes button is active', () => {
      cy.get('.my-notes-btn')
        .should('have.class', 'is-active')
    })

    it('test that no notes are returned from get request', () => {
      cy.get('.content')
          .should('not.exist') 
    })

    it('display message to create a new note', () => {
      cy.contains('You do not have any notes😭. Go to Add Note to add some!')
    })
  })

  describe('with notes in the database', () => {
    it('3 notes in the database are displayed', () => {
      cy.postMultipleNotes(3)

      cy.contains('note 0 test')
      cy.contains('note 1 test')
      cy.contains('note 2 test')
    })

    it('a note delete button can be clicked', () => {
      cy.postMultipleNotes(1)
      cy.get('.delete').click()
    })

    it.only('when note is deleted it is not visible', () => {
      cy.postMultipleNotes(1)
      cy.contains('note 0 test')
      cy.get('.delete').click()
      cy.contains('note 0 test').should('not.exist')
    })
  })
})

describe('create page tests', () => {
  beforeEach(() => {
    cy.clearDatabase()
  })

  it('user can navigate to the create page test from home page', () => {
    cy.visit('/')
    cy.get('.add-note-btn').click()
    cy.get('h2').contains('New Note')
  })

  it('Add Note button is active', () => {
    cy.visit('/create')
    cy.get('.add-note-btn')
      .should('have.class', 'is-active')
  })

  describe('submitting one note', () => {
    beforeEach(() => {
      cy.visit('/create')
    })

    it('user can submit note', () => {
      cy.get('#noteContentInput')
        .type('this is a test note')
      cy.get('#submitNewNote').click()
    })

    it('after user submits a new note, they are redirected to home page', () => {
      cy.get('#noteContentInput')
        .type('this is a test note')
      cy.get('#submitNewNote').click()
      cy.location('pathname').should('eq', '/')
    })
  })
  

  
})