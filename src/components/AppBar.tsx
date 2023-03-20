import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Appbar() {
	return (
		<Box sx={{ flexGrow: 1, mb: 10 }}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit" component="div">
						D&D 5th Edition API
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>

	)
}