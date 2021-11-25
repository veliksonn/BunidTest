import styled from 'styled-components';

import theme from 'theme';


export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    top: 0;
    width: 100%;
    min-height: 100vh;

    background: ${ theme.color.background };

    z-index: 2;
`;


export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 24px 5vw;

    h1 {
        color: rgba(21, 21, 21, 0.25);
    }
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 400px;
`;


export const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
    margin-top: 12px;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    input {
        margin-left: 8px;
        padding: 12px;

        color: ${ theme.color.primary };
        background: rgba(21, 21, 21, 0.1);
    }

    button {
        padding: 12px;

        font-weight: ${ theme.font.weight.highlight };
        text-transform: uppercase;

        color: #FFF;
        background: ${ theme.color.blue };
    }
`;
