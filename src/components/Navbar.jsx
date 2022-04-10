import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Navbar = () => {
	const { toggleDark } = useContext(GlobalContext)

	return (
		<div>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<Typography variant='h6'>Dad Joke Generator</Typography>
					<Button variant='contained' component={Link} to={'/random'}>
						Random
					</Button>
					<Button variant='contained' component={Link} to={'/jokes'}>
						SAVED
					</Button>
					<Button variant='contained' component={Link} to={'/'}>
						Search
					</Button>
					<IconButton onClick={toggleDark}>
						<LightbulbIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}
