import { url, login_username } from '../../config';
import Navbar from '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPages';

describe('Login Failed Test', () => {
    beforeEach(() => {
        cy.visit(url);
        Navbar.clickSignIn();
    });

    it('should try to login with invalid credentials', () => {
        LoginPage.login('invalid username', 'invalid password');
    });

    it('should display error message', () => {
        LoginPage.login('invalid username', 'invalid password');
        LoginPage.displayErrorMessage();
    });
});

describe('Login Success Test', () => {
    before(() => {
        cy.visit(url);
        Navbar.clickSignIn();
    })

    it('should try to login with valid credentials', () => {
        LoginPage.login(login_username, 'password');
    });

    it('should logout from application', () => {
        Navbar.logout();
        Navbar.displaySignInButton();
    });
});

