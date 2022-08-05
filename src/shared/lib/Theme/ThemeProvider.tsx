import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material';
import React from 'react';

const theme = createTheme({
	palette: {
		primary: {
			main: '#24a0ed',
			dark: '#2594d9',
			contrastText: '#ffffff',
		},
	},
});

const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
