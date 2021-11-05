// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('clearDatabase', () => {
  cy.request('GET', 'http://localhost:3001/notes')
    .then(({ body }) => {
      if (body.length) {
        const ids = body.map(note => note.id)
        ids?.forEach(id => cy.request('DELETE', `http://localhost:3001/notes/${id}`))
      }
    })
})

Cypress.Commands.add('postMultipleNotes', (numberOfNotes) => {
  const generateRandomNum = () => {
    return Math.floor((Math.random() * 1000))
  }

  Array.from(new Array(numberOfNotes))
    .forEach((element, index) => cy.request('POST', 'http://localhost:3001/notes', {
      id: generateRandomNum(),
      content: `note ${index} test`,
      date: "Wed Oct 20 2021 23:21:03 GMT-0700 (Pacific Daylight Time)"
    })
    )
  cy.visit('/')
})