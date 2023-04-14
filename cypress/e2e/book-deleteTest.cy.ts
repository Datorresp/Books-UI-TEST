import { BookPage, DashboardPage } from "../page/index";
let dashboardPage: DashboardPage;
let bookPage: BookPage;

describe("Cypress Delete Testing Dashboard", () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.visit("http://localhost:4200/dashboard");
        dashboardPage = new DashboardPage();
        bookPage = new BookPage();
    });

    describe("Delete Testing", () => {

        it("Delete book", () => {

            dashboardPage.addBook();
            bookPage.addBook("La odisea", "Homero");
            bookPage.saveBook().click();

            dashboardPage.deleteButton();

            //VERIFY
            dashboardPage.verifyBookNonExist("La odisea", "Homero");
        });

        it("NO PARAMETERS, No delete", () =>{
   
        })
    });
});