import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const Navbar = () => {
	return (
		<div>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<Typography variant='h6'>Dad Joke Generator</Typography>
					<Button component={Link} to={'/random'}>
						Random
					</Button>
					<Button component={Link} to={'/'}>
						Search
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}
