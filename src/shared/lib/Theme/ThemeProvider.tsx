import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material';
import React from 'react';

const theme = createTheme({
	palette: {
		primary: {
			main: '#ff6f32',
			dark: '#ff521f',
			contrastText: '#ffffff',
		},
	},
});

const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
