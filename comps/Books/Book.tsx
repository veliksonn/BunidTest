import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { ChevronRight } from 'react-feather';
import * as CSS from './css';


const Book: React.FC<{
    book: API.Book;
}> = props => (
    <CSS.Book>
        <img
            className='book-image'
            src={ props.book.volumeInfo.imageLinks?.thumbnail }
        />

        <div className='book-title'>
            { props.book.volumeInfo.title }
        </div>

        <div className='book-authors'>
            { props.book.volumeInfo.authors?.join(', ') }
        </div>

        { props.book.saleInfo.saleability === 'FOR_SALE' &&
            <div className='book-price'>
                ${ props.book.saleInfo.retailPrice.amount } { props.book.saleInfo.retailPrice.currencyCode }
            </div>
        }

        <a
            className='book-link'
            href={ props.book.saleInfo.buyLink || props.book.volumeInfo.infoLink }
            target='_blank'
        >
            Take a look <ChevronRight/>
        </a>
    </CSS.Book>
);


export default observer(Book);
