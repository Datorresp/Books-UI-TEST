import { DashboardPage,BookPage } from "../page/index"
let dashboardPage:DashboardPage;
let bookPage:BookPage;

describe("Cypress Add Testing Dashboard", () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.visit("http://localhost:4200/dashboard");
        dashboardPage= new DashboardPage();
        bookPage= new BookPage();
    });

   describe("TESTING DASHBOARD", () => {

        it("Add Book.", () => {

            bookPage.addBook("El nombre del viento", "");
            bookPage.saveBook().click();

            //Verificacion
            dashboardPage.verifyBookInDashboard("El nombre del viento", "Patrick Rothfuss");

        });

        it("Cannot Save book with no arguments", () => {

            bookPage.addBook(" ", " ");
            bookPage.saveBook().should('be.disabled');
        });
    })
});