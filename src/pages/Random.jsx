import { Button, Typography } from '@mui/material'
import { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid'

export const Random = () => {
	const { getRandomJoke, randomJoke } = useContext(GlobalContext)

	useEffect(() => {
		if (randomJoke === '') getRandomJoke()
		// eslint-disable-next-line
	}, [])

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Typography variant='h4'>{randomJoke}</Typography>
			<Button
				onClick={getRandomJoke}
				variant='contained'
				sx={{ width: 'fit-content', mx: 'auto', mt: '25px' }}
			>
				<FlipCameraAndroidIcon />
			</Button>
		</div>
	)
}
