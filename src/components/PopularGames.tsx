import React, { useEffect } from 'react';
import useGetGames from '@/hooks/useGetGames';
interface Type {
	id: string;
}
import { CircularProgress } from '@mui/material';
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
const PopularGames: React.FC<Type> = ({}) => {
	const { getGames, games, loading } = useGetGames();
	useEffect(() => {
		const hd = async () => {
			await getGames('Popular Games');
		};
		hd();
	}, []);
	console.log(games);

	return (
		<Box marginTop={'50px'}>
			<Divider textAlign="left">
				{' '}
				<Typography variant="h5" textAlign={'left'}>
					Popular Games
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
									<Button variant="contained">Game Details</Button>
								</CardActions>
							</Card>
						))}
					</Box>
				</Box>
			)}
		</Box>
	);
};
export default PopularGames;
