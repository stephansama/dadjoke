import { Box, Button, TextField } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'

import { GlobalContext } from '../context/GlobalContext'
import { useContext, useState } from 'react'

export const Controls = () => {
	const { searchForJoke } = useContext(GlobalContext)
	const history = useNavigate()

	const [inputVal, setInputVal] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		searchForJoke(inputVal)
		history('/jokes/')
	}

	return (
		<Box>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'flow',
					alignContent: 'center',
				}}
			>
				<TextField
					id='standard-basic'
					label='Find a dad joke'
					variant='standard'
					sx={{ mx: '20px' }}
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
				/>
				<Button variant='contained'>
					<SearchIcon />
				</Button>
			</form>
		</Box>
	)
}
