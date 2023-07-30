import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import MarcelButton from './MarcelButton';

const JniAppBar = () => {
	return (
		<>
			<AppBar position="relative" style={{ cursor: 'default'}}>
				<Toolbar>
					<Box 
						display="flex" 
						justifyContent="space-between" 
						alignItems="center"
						width="100%"
					>
						<Box display="flex">
							<StarsIcon />
							<Typography variant="h6">
								Learning Material UI with React
							</Typography>
						</Box>
						<MarcelButton />
					</Box>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default JniAppBar
