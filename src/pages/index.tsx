import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Button, Paper } from '@mui/material';
const inter = Inter({ subsets: ['latin'] });
import { Typography, Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material';
import StormIcon from '@mui/icons-material/Storm';
import Games from '@/components/games';
import PopularGames from '@/components/PopularGames';
import { ChangeEvent, useState } from 'react';
import useGetGames from '@/hooks/useGetGames';
export default function Home() {
	const theme = useTheme();
	const [search, setSearch] = useState<string>('');
	const { getGames, loading, games } = useGetGames();
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setSearch(event.target.value);
	};
	const handleClick = async () => {
		await getGames(search);
		setSearch('');
	};
	return (
		<>
			<Head>
				<title>GamesWave</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Paper
				sx={{
					marginTop: '0px',
				}}
				elevation={6}
			>
				<Typography variant="h4" textAlign={'center'}>
					GamesWave
					<StormIcon fontSize="large"></StormIcon>
				</Typography>
			</Paper>
			<Box marginTop={'50px'} display={'flex'} justifyContent={'center'}>
				<Box display={'flex'} flexDirection={'row'} width={'70%'}>
					<TextField
						size="small"
						fullWidth
						label="search games"
						value={search}
						onChange={handleChange}
					></TextField>
					<Button
						variant="contained"
						sx={{ marginLeft: '5px' }}
						onClick={handleClick}
					>
						Search
					</Button>
				</Box>
			</Box>
			<Games games={games} loading={loading}></Games>
			<PopularGames id={'ksf'}></PopularGames>
		</>
	);
}
