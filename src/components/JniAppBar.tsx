import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import MarcelButton from './MarcelButton';
import NightModeToggle from './NightModeToggle';

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
								Learning MUI
							</Typography>
						</Box>
						<Box display="flex">
							<Box mr={1}>   {/* Adding some space to the right */}
								<NightModeToggle />
							</Box>
							<MarcelButton />
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default JniAppBar
