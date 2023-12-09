import BasePage from '../BasePage';

export default class LoginPage extends BasePage {
    static login(username: string, password: string): void {
        cy.get('#user_login').type(username);
        cy.get('#user_password').type(`${password}{enter}`);
    }

    static clickForgotPassword(): void {
        cy.contains('Forgot your password ?').click();
    }

    static displayErrorMessage(): void {
        cy.isVisible('.alert-error');
    }
}