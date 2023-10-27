import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
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
	name: string;
	released: string;
	rating: number;
	background_image: string;
	platforms: Array<Platforms>;
	short_screenshots: Array<ScreenShots>;
}
const useGetGames = () => {
	const [games, setGames] = useState<gameType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		console.log('games', games);
	}, []);
	const getGames = async (search_query: string) => {
		setLoading(true);
		axios
			.get(`https://api.rawg.io/api/games`, {
				params: {
					key: `${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
					search: search_query,
					ordering: '-rating',
				},
			})
			.then((response: AxiosResponse) => {
				console.log(response.data.results);
				setLoading(false);
				const result: gameType[] = response.data.results.map(
					(resultt: gameType) => {
						const {
							name,
							background_image,
							rating,
							platforms,
							released,
							short_screenshots,
						} = resultt;
						return {
							name,
							background_image,
							rating,
							platforms,
							released,
							short_screenshots,
						};
					}
				);
				console.log(result);
				setGames(result);
				// console.log('after updation', games);
			})
			.catch((err: any) => {
				setLoading(false);
				console.log(err);
			});
	};
	return { getGames, games, loading };
};

export default useGetGames;
