/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable {
        /**
         * @param selector - take selector as parameter
         */
        isVisible(selector: string): Chainable<Element>;

        /**
         * @param selector - take selector as parameter
         */
        isHidden(selector: string): Chainable<Element>;

        /**
         * @param size - take size as parameter
         */
        setResolution(size: number[]): Chainable<Element>;

        /**
         * @param username - take username as parameter
         * @param password - take password as parameter
         * @example cy.login('username', 'password')
         * @returns {Chainable<Element>}
         */
        login(username: string, password: string): Chainable<Element>;
    }
}

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
});

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist');
});

Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});

Cypress.Commands.add('login', (username, password) => {
    cy.get('#login_form').should('be.visible');
    cy.get('#user_login').type(username);
    cy.get('#user_password').type(password);
    cy.get('#user_remember_me').click();
    cy.contains('Sign in').click();
});