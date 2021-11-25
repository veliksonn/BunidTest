import * as React from 'react';
import { observer } from 'mobx-react-lite';

import store  from 'store';
import * as CSS from './css';
import Book from './Book';


const Books: React.FC = () => {
    const booksDom = store.books.map(book =>
        <Book
            book={ book }
            key={ book.id }
        />
    );

    return (
        <CSS.BooksList>
            { booksDom }
        </CSS.BooksList>
    );
};


export default observer(Books);
