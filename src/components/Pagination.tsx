import { useAppDispatch, useAppSelector } from "../store/hook";
import { SPELLS_PER_PAGE } from '../assets/constatns';

import Pagination from '@mui/material/Pagination';
import { setCurrentPage } from '../store/spellSlice';
import { selectCurrentPage, selectSpellsList } from "../store/selectors";

export default function SpellsPagination() {
	const dispatch = useAppDispatch();
	const currentPage = useAppSelector(selectCurrentPage);
	const spells = useAppSelector(selectSpellsList);

	const pageNumber = Math.ceil(spells.length / SPELLS_PER_PAGE);

	const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
		dispatch(setCurrentPage(newPage))
	}

	return (
		<Pagination color="primary" count={pageNumber} page={currentPage} onChange={handleChange} sx={{ my: 5 }} />
	)
}