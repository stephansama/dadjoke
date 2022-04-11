import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { GlobalContext } from '../context/GlobalContext'

export const Joke = () => {
	const { findJokeById } = useContext(GlobalContext)
	const currentJoke = findJokeById(useParams().jokeid)

	return (
		<div>
			<Typography variant='h3'>{currentJoke}</Typography>
		</div>
	)
}
