import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, Typography, CssBaseline, Grid, Button, } from '@mui/material';
import JniAppBar from './components/JniAppBar';
import jniStyles from './styles/jni_styles';


const App = () => {
	return (
		<>
			<CssBaseline />
			<JniAppBar />
			<main>
				<div>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
							Learning Material UI
						</Typography>
						<Typography 
							sx={jniStyles.redBackgroundHoverStyle}
							variant="h5" 
							align="center" 
							color="textSecondary" 
							paragraph>
							Using the Material UI library to build a simple React app.
							However I added much more text here to see how this will go.
						</Typography>

						<div>
							<Grid container spacing={2} justifyContent="center">
								<Grid item>
									<Button variant="contained" color="primary">
										First Button
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
		</>
	)
}

export default App
