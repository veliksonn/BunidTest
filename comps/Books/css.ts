import styled from 'styled-components';

import theme from 'theme';


export const Books = styled.div`
    width: 100%;
    padding: 12px;

    margin-top: 16px;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .results-stats {
        width: 100%;
        padding: 12px 0;

        font-size: 16px;
        text-align: center;

        border-bottom: 1px solid rgba(21, 21, 21, 0.25);
    }
`;


export const BooksList = styled.div`
`;


export const Book = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 12px;

    &:not(:first-child) {
        margin-top: 12px;
        padding-top: 24px;

        border-top: 2px solid rgba(25, 25, 25, 0.25);
    }

    .book-image {
        width: 100%;
        max-width: 150px;
    }

    .book-title {
        margin-top: 12px;

        font-size: 22px;
        font-weight: ${ theme.font.weight.highlight }
    }

    .book-authors {
        margin-top: 4px;
        font-size: 14px;
    }

    .book-price {
        margin-top: 12px;

        font-size: 26px;
    }

    .book-link {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 12px;

        text-transform: uppercase;

        color: ${ theme.color.blue };
    }
`;


export const Pagination = styled.div`
    display: flex;

    button {
        width: 100%;
        padding: 12px;

        color: #FFF;
        background: #000;
    }

    button.disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;
