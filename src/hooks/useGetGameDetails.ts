import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
interface GameDetails {
	id: number;
	description_raw: string;
	website: string;
}
const useGetGameDetails = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [gameDetail, setGameDetail] = useState<GameDetails>();
	const getGameDetails = async (game_id: number | undefined) => {
		if (game_id === undefined) {
			return;
		}
		setLoading(true);
		axios
			.get(`https://api.rawg.io/api/games/${game_id}`, {
				params: {
					key: `${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
				},
			})
			.then((response: AxiosResponse) => {
				console.log(response.data);
				setLoading(false);
				const result: GameDetails = response.data;
				setGameDetail(result);
			})
			.catch((err: any) => {
				setLoading(false);
				console.log(err);
			});
	};
	return { getGameDetails, loading, gameDetail };
};

export default useGetGameDetails;
