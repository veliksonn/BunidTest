import { makeAutoObservable } from 'mobx';

import apiCall from 'utils/api';


class BooksStore {
    constructor() {
        makeAutoObservable(this);
    }

    /* ---- Observable ---- */
    // Has an initial search occured?
    public didSearch = false;

    // Search query:
    public query = '';

    public page = 1;
    public perPage = 10;

    // List of books retrieved:
    public books: API.Book[] = [];

    // How many results did the search query yield?
    public nResults = 0;

    // Is the API loading?
    public isLoading = false;


    /* ---- Computed ---- */
    public get maxPage(): number {
        return Math.ceil(this.nResults / this.perPage);
    }

    public get startIndex(): number {
        return (this.page - 1) * this.perPage;
    }


    /* ---- Actions ---- */
    public setQuery = (query: string) => {
        // Reset page number on new query:

        this.query = query;
    };

    public loadBooks = (data: API.SearchResults) => {
        // Loading is complete:
        this.isLoading = false;

        // Mark the number of results the API retrieved:
        this.nResults = data.totalItems;

        // Load the books:
        this.books = [ ...data.items ];
    };


    /* ---- API ---- */
    public search = async (page: number) => {
        if (page) this.page = page;

        // Initial search has occured:
        this.didSearch = true;

        // Set loader (turned off once the books are loaded.):
        this.isLoading = true;

        apiCall(this.query, this.startIndex, this.loadBooks);
    };

    public prevPage = () => {
        if ((this.page - 1) < 1) {
            console.error('Page cannot be less than 1.');
            return;
        }

        this.search(this.page - 1);
    };

    public nextPage = () => {
        if (this.page >= this.maxPage) {
            console.error('Page cannot be greater than max page.');
            return;
        }

        this.search(this.page + 1);
    };
}


declare global {
    namespace API {
        type SearchResults = {
            totalItems: number;
            items: Book[];
        };

        type Book = {
            id: string;

            saleInfo: {
                country: string;
                saleability: 'NOT_FOR_SALE' | 'FOR_SALE';
                buyLink?: string;

                retailPrice: {
                    amount: number;
                    currencyCode: string;
                };
            };

            volumeInfo: {
                authors?: string[];
                title: string;
                averageRating: number;
                categories: string[];
                description: string;
                infoLink: string;

                imageLinks?: {
                    smallThumbnail: string;
                    thumbnail: string;
                };
            };
        };
    }
}


export default new BooksStore();
