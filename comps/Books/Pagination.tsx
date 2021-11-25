import * as React from 'react';
import { observer } from 'mobx-react-lite';

import store from 'store';
import * as CSS from './css';


const Pagination: React.FC = () => (
    <CSS.Pagination>
        <button
            className={ store.page < 2 ? 'disabled' : '' }
            onClick={ store.prevPage }
        >
            Prev
        </button>

        <button
            className={ store.page >= store.maxPage ? 'disabled' : '' }
            onClick={ store.nextPage }
        >
            Next
        </button>
    </CSS.Pagination>
);


export default observer(Pagination);
