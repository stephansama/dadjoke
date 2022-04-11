import { Box, Divider, IconButton, Typography } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export const Footer = () => {
	return (
		<div>
			<Divider />
			<Box
				sx={{
					my: '5px',
					mx: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant='body1'>&copy; 2022</Typography>
				{/* LINKS */}
				<div>
					<IconButton
						component='a'
						href='https://github.com/stephansama'
						target='_blank'
					>
						<GitHubIcon />
					</IconButton>
					<IconButton
						component='a'
						href='https://www.linkedin.com/in/stephan-randle-38a30319a/'
						target='_blank'
					>
						<LinkedInIcon />
					</IconButton>
				</div>
			</Box>
		</div>
	)
}
