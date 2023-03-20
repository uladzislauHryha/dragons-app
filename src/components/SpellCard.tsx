import { memo, useState } from 'react';
import { useAppDispatch } from "../store/hook";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import DnsIcon from '@mui/icons-material/Dns';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoModal from './InfoModal';
import { removeFavorite, addFavorite } from '../store/favoriteSlice';

interface SpellCardProps {
	index: string,
	name: string,
	isFavorite: boolean,
}

function SpellCard(props: SpellCardProps) {
	const { index, name, isFavorite } = props;
	const dispatch = useAppDispatch();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleClick = () => {
		isFavorite ?
			dispatch(removeFavorite(index)) :
			dispatch(addFavorite(index));
	}

	return (
		<Grid item xs={10} sm={10} md={10} lg={10} >
			<Paper className="spell-card">
				<List dense={true}>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<DnsIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={name} />
						<ListItemSecondaryAction>
							<IconButton edge="end" onClick={handleOpen}>
								<InfoIcon />
							</IconButton>

							<IconButton edge="end" onClick={handleClick} >
								{isFavorite
									? <FavoriteIcon />
									: <FavoriteBorderIcon />
								}
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</List>
			</Paper>
			<InfoModal open={open} onClose={handleClose} index={index} />
		</Grid>
	)
}

export default memo(SpellCard);