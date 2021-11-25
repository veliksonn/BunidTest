import * as React from 'react';
import { observer } from 'mobx-react-lite';

import * as CSS from './css';
import Search from './Search';
import Books from './Books/';


const Content: React.FC = () => (
    <CSS.Content>
        <div className='content-container'>
            <h2>Search books</h2>
            <Search/>
            <Books/>
        </div>
    </CSS.Content>
);


export default observer(Content);
