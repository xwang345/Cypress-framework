export default class Navbar {
    static clickOnLogo(): void {
        cy.get('.brand').click();
    }

    static search(text: string): void {
        cy.get('#searchTerm').type(`${text} {enter}`);
    }

    static clickSignIn(): void {
        cy.get('#signin_button').click();
    };

    static logout(): void {
        cy.contains('username').click();
        cy.get('#logout_link').click();
    }

    static displaySignInButton(): void {
        cy.isVisible('#signin_button');
    }
}