import * as React from 'react';
import { observer } from 'mobx-react-lite';

import store from 'store';
import * as CSS from './css';


const Search: React.FC = () => (
    <CSS.Search>
        <input
            id='search-query'
            type='text'
            value={ store.query }
            aria-label='enter your search'
            onChange={ e => store.setQuery(e.target.value) }
            onKeyPress={ e => e.key === 'Enter' && store.search(1) }
            placeholder='enter your search'
        />

        <button onClick={ () => store.search(1) }>
            Search
        </button>
    </CSS.Search>
);


export default observer(Search);
