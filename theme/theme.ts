import { createTheme } from '@mui/material/styles';
const theme = createTheme({
	palette: {
		background: {
			paper: '#F1F6F9',
		},
		primary: {
			main: '#394867',
		},
		secondary: {
			main: '#9BA4B5',
		},
	},

	typography: {
		fontFamily: 'Nunito, sans-serif',
		body1: {
			color: '9BA4B5',
		},
		body2: { color: 'F1F6F9' },
	},
});

export default theme;
