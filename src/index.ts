import { IBook, Library } from './lecture32';

const books: Array<IBook> = [
    {
        title: 'Meriylli',
        author: 'Viktor Canosinaj',
        nrPages: 300,
        price: 1000,
        isAvailable: true,
    },
    {
        title: 'Mogli',
        author: 'Viktor Canosinaj',
        nrPages: 100,
        price: 500,
        isAvailable: true,
    },
    {
        title: 'Da Vinci',
        author: 'Viktor Canosinaj',
        nrPages: 500,
        price: 2000,
        isAvailable: true,
    },
];

const library = new Library('Qendrore', books, 'Tirane');

library.buyBook('Da Vinci');
console.log(library.getAmountEarned);

library.buyBook('Da Vinci');
console.log(library.getAmountEarned);
