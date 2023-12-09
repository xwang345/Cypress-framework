export default class AccountLinks {
    static clickSummary(): void {
        cy.get('#account_summary_tab').click();
    }

    static clickActivity(): void {
        cy.get('#account_activity_tab').click();
    }

    static clickTransferFunds(): void {
        cy.get('#transfer_funds_tab').click();
    }

    static clickPayBills(): void {
        cy.get('#pay_bills_tab').click();
    }

    static clickMoneyApp(): void {
        cy.get('#money_map_tab').click();
    }

    static clickOnlineStatements(): void {
        cy.get('#online_statements_tab').click();
    }
}