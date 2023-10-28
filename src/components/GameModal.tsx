import {
	Paper,
	Modal,
	Box,
	Typography,
	Card,
	Button,
	CircularProgress,
	Avatar,
	Tooltip,
} from '@mui/material';
import { useEffect } from 'react';
import PlatFormCP from './PlatForm';
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};
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
interface ModalProps {
	open: boolean;
	handleClose: () => void;
	game: gameType | undefined;
}
import useGetGameDetails from '@/hooks/useGetGameDetails';
const GameModal: React.FC<ModalProps> = ({ open, handleClose, game }) => {
	// console.log(games);
	if (!game) {
		return '';
	}
	const { getGameDetails, gameDetail, loading } = useGetGameDetails();
	useEffect(() => {
		const hd = async () => {
			await getGameDetails(game?.id);
		};
		hd();
	}, [game]);
	return (
		<>
			<Paper>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Paper>
						<Card
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
								height: '80%',
								width: '90%',
								overflowY: 'scroll',
							}}
						>
							{loading ? (
								<Box
									display={'flex'}
									justifyContent={'center'}
									alignItems={'center'}
									marginTop={'200px'}
								>
									<CircularProgress></CircularProgress>
								</Box>
							) : (
								<Box>
									<Typography
										variant="h5"
										textAlign={'center'}
										marginTop={'30px'}
									>
										{game?.name}
									</Typography>
									<Typography textAlign={'center'}>
										<a href={gameDetail?.website} target="_blank">
											<Button>{gameDetail?.website}</Button>
										</a>
									</Typography>
									<Box
										marginTop={'30px'}
										display={'flex'}
										flexDirection={'column'}
										justifyContent={'center'}
										alignItems={'center'}
									>
										<Typography
											textAlign={'center'}
											fontSize={'20px'}
											sx={{ opacity: '0.8' }}
										>
											PlatForms
										</Typography>
										<Box display={'flex'}>
											{game.platforms.map((platform) => (
												<PlatFormCP name={platform.platform.name}></PlatFormCP>
											))}
										</Box>
									</Box>

									<Typography padding={'50px'} sx={{ opacity: 0.7 }}>
										{!loading && gameDetail?.description_raw}
									</Typography>
									<Box
										display={'flex'}
										flexWrap={'wrap'}
										justifyContent={'center'}
										alignItems={'center'}
										padding={'50px'}
									>
										{game.short_screenshots.map((ss) => (
											<Box margin={'10px'}>
												<Box borderRadius={'50px'}>
													<img
														src={`${ss.image}`}
														height={'230px'}
														width={'320px'}
														alt=""
														style={{ borderRadius: '10px' }}
													/>
												</Box>
											</Box>
										))}
									</Box>
								</Box>
							)}
						</Card>
					</Paper>
				</Modal>
			</Paper>
		</>
	);
};
export default GameModal;
