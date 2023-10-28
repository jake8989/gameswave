import React from 'react';
import { Avatar, Tooltip } from '@mui/material';
const PlatFormCP: React.FC<{ name: string }> = ({ name }) => {
	let img_url = '';
	switch (name) {
		case 'PC':
			img_url = '/pc.svg';
			break;
		case 'Xbox Series S/X':
			img_url = '/xboxseriesx.svg';
			break;
		case 'Wii':
			img_url = '/wii.svg';
			break;
		case 'Commodore / Amiga':
			img_url = '/amiga.svg';
			break;
		case 'Atari ST':
			img_url = '/atari.svg';
			break;
		case '"Genesis"':
			img_url = '/gensis.svg';
			break;
		case 'PlayStation 4':
			img_url = '/playstation4.svg';
			break;
		case 'PlayStation 5':
			img_url = '/playstation5.svg';
			break;
		case 'PlayStation 3':
			img_url = '/playstation3.svg';
			break;
		case 'PlayStation 2':
			img_url = '/playstation2.svg';
			break;
		case 'PlayStation':
			img_url = '/playstation.svg';
			break;
		case 'Xbox One':
			img_url = '/xboxone.svg';
			break;
		case 'Nintendo Switch':
			img_url = '/nitendoswitch.svg';
			break;
		case 'Android':
			img_url = '/android.svg';
			break;
		case 'macOS':
			img_url = '/macos.svg';
			break;
		case 'Linux':
			img_url = '/linux.svg';
			break;
		case 'NES':
			img_url = '/nes.svg';
			break;
		case 'Nintendo 3DS':
			img_url = '/nitendoswitch.svg';
			break;
		case 'Wii U':
			img_url = '/wii.svg';
			break;
		case 'Dreamcast':
			img_url = '/dreamcast.svg';
			break;
		case 'Xbox 360':
			img_url = '/xboxone.svg';
			break;
		case 'SNES':
			img_url = '/nes.svg';
			break;
		case 'Nintendo DS':
			img_url = '/nitendoswitch.svg';
			break;
		case 'Game Boy Advance':
			img_url = '/gameboy.svg';
			break;
		case 'iOS':
			img_url = '/ios.svg';
			break;

		default:
			break;
	}
	return (
		<Tooltip title={name}>
			<Avatar sx={{ margin: '7px' }} src={img_url}></Avatar>
		</Tooltip>
	);
};
export default PlatFormCP;
