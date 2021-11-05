// Library
// name, books[{ title: string, author: string, nrPages: Number, price: Number, isAvailable: boolean }](private),
// location: string(protected), amountEarned: number(private)
// buyBook(title: string) => { log(book), amountEarned+=book.price, isAvailable -> false }
// loanBook(title: string) => { log(book), isAvailable -> false }
// returnBoughtBook(title: string) => { find price, isAvailable -> true, amountEarned-=price }
// returnLoanBook(title: string) => { isAvailable -> true }

interface IBook {
    title: string;
    author: string;
    nrPages: Number;
    price: Number;
    isAvailable: boolean;
}

class Library {
    public name: string;
    private _books: Array<IBook>;
    protected location: string;
    private _amountEarned: Number;

    constructor(name: string, books: Array<IBook>, location: string) {
        this.name = name;
        this._books = books;
        this.location = location;
        this._amountEarned = 0;
    }

    get getBooks() { return this._books }
    set setBooks(books: Array<IBook>) { this._books = books }

    get getLocation() { return this.location }
    set setLocation(location: string) { this.location = location };

    get getAmountEarned() { return this._amountEarned };

    public buyBook(title: string): void {
        this._books = this._books.map((book) => {
            if (book.isAvailable && book.title === title) {
                book.isAvailable = false;
                this._amountEarned = Number(this._amountEarned) + Number(book.price);

                console.log(`Book ${book.title} is bought and cost $${book.price}`)
                return book;
            }

            return book;
        })
    }

    public loanBook(title: string): void {
        this._books = this._books.map((book) => {
            if (book.isAvailable && book.title === title) {
                book.isAvailable = false;

                console.log(`Book ${book.title} is loaned.`)
                return book;
            }

            return book;
        })
    }

    public returnBook(title: string): void {
        this._books = this._books.map((book) => {
            if (!book.isAvailable && book.title === title) {
                book.isAvailable = true;
                this._amountEarned = Number(this._amountEarned) - Number(book.price);

                console.log(`Book ${book.title} is returned and cost $${book.price}`)
                return book;
            }

            return book;
        });
    }

    public returnLoanBook(title: string): void {
        this._books = this._books.map((book) => {
            if (!book.isAvailable && book.title === title) {
                book.isAvailable = true;

                console.log(`Loaned book with title ${book.title} is returned.`)
                return book;
            }

            return book;
        })
    }
}

export { IBook, Library };
