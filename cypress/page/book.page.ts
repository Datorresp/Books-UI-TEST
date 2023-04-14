import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

class BookPage {

    private readonly save : string;
    private readonly bookName : string;
    private readonly bookAuthor : string;

    constructor() {

        this.save = '.ant-modal-footer > .ant-btn-primary';
        this.bookNameInput = '#name';
        this.bookAuthorInput = '#author';
    }

    public saveBook() {

        return cy.get(this.saveBookButton);
    }

    public addBook(bookName: string, bookAuthor: string) {

        cy.get(this.bookName).click().type(bookName);
        cy.get(this.bookAuthor).click().type(bookAuthor);
    }


    public updateBook(attributes: string[], newBook: string[]) {

        const selector = {

            Name: this.bookNameInput,
            Author: this.bookAuthorInput,
        };

        attributes.forEach((attribute, index) => {

            cy.get(selector[attribute]).click().clear().type(newBook[index]);
        });
    }
}

export { BookPage }