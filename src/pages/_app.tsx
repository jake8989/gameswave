import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '../../theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Paper } from '@mui/material';
export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
