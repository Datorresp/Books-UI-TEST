class DashboardPage {
    private addButton: string;
    private deleteButton: string;
    private editButton: string;
    private booksForPageButton: string;
    private rowsTable: string;
    private pageButton: string;
    private paginationSizeChanger: string;
    private paginationSizeOption: string;

    constructor() {

    this.addButton = '.ant-btn-primary > .ng-star-inserted:contains("Add")';
    this.deleteButton = '.ant-btn.table-button > .ng-star-inserted:contains("Delete")';
    this.editButton = "button.ant-btn-primary.ant-btn-circle";
    this.booksForPageButton = '.ant-select-selection-item.ng-star-inserted[ng-reflect-label="50 / page"]';
    this.rowsTable = ".ant-table-tbody > .ant-table-row.ng-star-inserted";
    this.pageButton = '.ng-star-inserted > .ant-pagination-item.ng-star-inserted > .ng-star-inserted';
    this.paginationSizeChanger = '.ng-star-inserted > .ant-pagination-options.ng-star-inserted > .ant-select.ant-pagination-options-size-changer';
    this.paginationSizeOption = '.ant-select-item > .ant-select-item-option-content';
    }

    public addBook() {

        cy.get(this.addBookButton).click();
    }

    public deleteButton() {

        return cy.get(this.deleteBookButton).click();
    }

    public getBooksForPageButton() {

        return cy.get(this.booksForPageButton).click();
    }

    public getRowsTable() {

        return cy.get(this.rowsTable);
    }

    public editFirstButton() {

        cy.get(this.editBookButton).eq(0).click();
    }

    public verifyBook(title: string, author: string){

        this.getRowsTable()
        .get(".ant-table-cell")
        .should("contain", title)
        .and("contain", author);
    }

    public verifyBookNonExist(title: string, author: string){

            this.getRowsTable()
            .get(".ant-table-cell")
            .should("not.contain", title)
            .and("contain", author);
    }

    public changePage(number: number) {

        const pageToChange= this.pageButton + `:contains("${number}")`;
        return cy.get(pageToChange).click();
    }

    public changePaginationSize(size: string) {

        cy.get(this.paginationSizeChanger).click();
        const newSize = this.paginationSizeOption + `:contains("${size}")`;
        cy.get(newSize).click();
    }

    public verifyBookInDashboard(title: string){
        this.getRowsTable()
        .contains('td', title)
        .parent()
        .find('[type="checkbox"]')
        .check();
    }

    public clickEditBook(title: string){

        this.getRowsTable()
        .contains('td', title)
        .parent()
        .find('.anticon-edit')
        .click();
    }

    public getFirstRowTable() {

        return cy.get(this.rowsTable)
        .eq(0);
    }
}

export { DashboardPage };