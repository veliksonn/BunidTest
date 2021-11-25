const theme = {
    desktop: '@media(min-width: 900px)',
    mobile: '@media(max-width: 1000px)',

    color: {
        primary: 'rgb(18, 18, 18)',
        secondary: '#1a2829',
        tertiary: '#565656',
        background: '#FFF',

        black: 'rgb(18, 18, 18)',
        white: '#FFF',

        blue: 'rgb(0, 154, 162)',
        green: 'rgba(39, 165, 119, 1)',
        orange: 'rgb(241, 154, 91)',
        purple: 'rgb(106, 91, 128)',
        red: 'rgb(221, 6, 3)',
        yellow: 'rgb(239, 231, 10)',
    },

    font: {
        family: {
            primary: 'futura-pt, sans-serif',
        },

        weight: {
            light: 300,
            regular: 400,
            highlight: 500,
            bold: 700,
            super: 800,
        },
    },

    transition:{
        fast: '50ms',
        slow: '300ms cubic-bezier(.77, 0, .175, 1)',
    },
};


export default theme;
