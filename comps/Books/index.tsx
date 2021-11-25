import * as React from 'react';
import { observer } from 'mobx-react-lite';

import store from 'store';
import * as CSS from './css';
import BooksList from './BooksList';
import Pagination from './Pagination';


const Books: React.FC = () => {
    // Until the first search is made, hide the empty results:
    if (!store.didSearch) return null;

    if (store.isLoading) return (
        <CSS.BooksList>
            <h3>Loading...</h3>
        </CSS.BooksList>
    );

    return (
        <CSS.Books>
            <div className='results-stats'>
                Page { store.page } of about { store.nResults } results
            </div>

            <BooksList/>

            <Pagination/>
        </CSS.Books>
    );
};


export default observer(Books);
