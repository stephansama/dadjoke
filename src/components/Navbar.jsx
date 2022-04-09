import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const Navbar = () => {
	return (
		<div>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<Typography variant='h6'>Dad Joke Generator</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}
