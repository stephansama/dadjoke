import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import {
	AppBar,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material'

import { GlobalContext } from '../context/GlobalContext'

// ICONS
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import MenuIcon from '@mui/icons-material/Menu'

export const Navbar = () => {
	const { toggleDark } = useContext(GlobalContext)
	const [isMenuOpen, setMenuOpen] = useState(false)

	const pages = [
		{ name: 'random', path: '/random/' },
		{ name: 'saved', path: '/jokes/' },
	]

	return (
		<div>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<Box
						sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
					>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={() => setMenuOpen((old) => !old)}
							color='inherit'
							sx={{ mr: '20px' }}
						>
							<MenuIcon />
						</IconButton>
						{/* Responsive menu */}
						<Menu
							id='menu-appbar'
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							keepMounted
							open={isMenuOpen}
							onClose={() => setMenuOpen(false)}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{pages.map((page, i) => (
								<MenuItem
									component={Link}
									to={page.path}
									key={i}
									onClick={() => setMenuOpen(false)}
								>
									<Typography textAlign='center'>
										{page.name.toUpperCase()}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{/* TITLE */}
					<Typography
						component={Link}
						to={'/'}
						variant='h6'
						sx={{
							textDecoration: 'none',
							color: 'inherit',
						}}
					>
						Dad Joke Generator
					</Typography>
					{/* Expanded navigation bar */}
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page, i) => (
							<Button
								component={Link}
								color='inherit'
								key={i}
								to={page.path}
								sx={{ ml: '20px' }}
							>
								{page.name}
							</Button>
						))}
					</Box>
					<IconButton sx={{ ml: 'auto' }} onClick={toggleDark}>
						<LightbulbIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}
