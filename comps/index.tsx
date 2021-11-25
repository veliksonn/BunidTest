import * as React from 'react';
import { observer } from 'mobx-react-lite';

import * as CSS from './css';
import Header from './Header';
import Content from './Content';


const Page = () => (
    <CSS.Page>
        <Header/>
        <Content/>
    </CSS.Page>
);


export default observer(Page);
