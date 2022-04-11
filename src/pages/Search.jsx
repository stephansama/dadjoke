import { Typography } from '@mui/material'
import { Controls } from '../components/Controls'

export const Search = () => {
	return (
		<div>
			<Typography sx={{ mb: '25px' }} align='center' variant='body1'>
				Use the search field below to find a dad joke...
			</Typography>
			<Controls />
		</div>
	)
}
