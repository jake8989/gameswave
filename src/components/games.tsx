import React, { useEffect } from 'react';
import useGetGames from '@/hooks/useGetGames';
import {
	Typography,
	Box,
	Paper,
	Button,
	Card,
	Divider,
	CardContent,
	CardMedia,
	CardActions,
	Rating,
} from '@mui/material';
import { CircularProgress } from '@mui/material';
import GameModal from './GameModal';
interface Platform {
	id: number;
	name: string;
	slug: string;
}

interface Platforms {
	platform: Platform;
}
interface ScreenShots {
	id: number;
	image: string;
}

interface gameType {
	id: number;
	name: string;
	released: string;
	rating: number;
	background_image: string;
	platforms: Array<Platforms>;
	short_screenshots: Array<ScreenShots>;
}
interface props {
	games: gameType[];
	loading: boolean;
}

const Games: React.FC<props> = ({ games, loading }) => {
	console.log(games);
	const [open, setOpen] = React.useState(false);
	const [currentGame, setCurrentGame] = React.useState<gameType>();

	const handleOpen = (game: gameType) => {
		setOpen(true);
		setCurrentGame(game);
	};
	const handleClose = () => setOpen(false);
	if (games.length === 0) {
		return '';
	}
	return (
		<Box marginTop={'50px'}>
			<Divider textAlign="left">
				{' '}
				<Typography variant="h5" textAlign={'left'}>
					{' '}
					Searched Games
				</Typography>
			</Divider>
			{loading ? (
				<Box display={'flex'} justifyContent={'center'}>
					{' '}
					<CircularProgress />
				</Box>
			) : (
				<Box>
					<Box
						display={'flex'}
						justifyContent={'center'}
						// border={'2px solid red'}
						flexWrap={'wrap'}
						padding={'20px'}
					>
						{games.map((game) => (
							<Card sx={{ width: 380, margin: '10px' }} elevation={6}>
								<CardMedia
									sx={{ height: 230 }}
									image={`${game.background_image}`}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{game.name}
									</Typography>
									<Typography gutterBottom variant="h5" component="div">
										<Rating
											name="half-rating-read"
											precision={0.1}
											value={game.rating}
											readOnly
										/>
									</Typography>
									<Typography variant="body1" color="text.secondary">
										{game.released}
									</Typography>
								</CardContent>
								<CardActions>
									<Button variant="contained" onClick={() => handleOpen(game)}>
										Game Details
									</Button>
								</CardActions>
							</Card>
						))}
					</Box>
				</Box>
			)}
			<GameModal
				open={open}
				handleClose={handleClose}
				game={currentGame}
			></GameModal>
		</Box>
	);
};
export default Games;
