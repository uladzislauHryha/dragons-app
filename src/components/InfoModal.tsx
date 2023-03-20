import { useCallback, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import InfoContent from "./InfoContent";
import Box from "@mui/material/Box";

export default function InfoModal(props: any) {
	const { open, onClose, index } = props;
	const [info, setInfo] = useState<any>();
	const [loading, setLoading] = useState(false);

	const fetchInfo = useCallback(
		async () => {
			try {
				setLoading(true);
				const resp = await fetch(process.env.REACT_APP_API_URL + 'spells/' + index);
				const data = await resp.json();
				console.log(data);
				setInfo(data);
			} catch (e) {

			} finally {
				setLoading(false);
			}
		}, [index],
	)

	useEffect(() => {
		open && fetchInfo();
	}, [fetchInfo, open]);


	return (
		<Modal open={open} onClose={onClose}>
			<Grid container>
				<Grid item xs={10} md={6} lg={6}>
					<Box sx={style}>
						{loading ? <h1>Loading</h1> : <InfoContent {...info} />}
					</Box>
				</Grid>
			</Grid>
		</Modal>
	)
}


const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	width: '70%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};