import { useAppSelector } from "../store/hook";

import SpellCard from "./SpellCard";
import Grid from "@mui/material/Grid";
import SpellsPagination from './Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { selectFavorives, selectResultsByPage, selectCurrentPage } from "../store/selectors";

export default function SpellList() {
	const results = useAppSelector(selectResultsByPage);
	const favorites = useAppSelector(selectFavorives);
	const page = useAppSelector(selectCurrentPage);
	const { status } = useAppSelector(state => state.spells);

	if (status === 'loading' || !Array.isArray(results) || results.length < 1) {
		return (
			<Backdrop sx={{ color: '#fff' }} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);
	}


	console.log(page, results);

	return (
		<Grid container justifyContent="center" spacing={3}>
			{results.map(item => (
				<SpellCard
					{...item}
					key={item.index}
					isFavorite={favorites.includes(item.index)}
				/>
			))}

			<SpellsPagination />
		</Grid>
	)
}