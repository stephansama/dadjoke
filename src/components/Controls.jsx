import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, TextField } from '@mui/material'

import { GlobalContext } from '../context/GlobalContext'

import SearchIcon from '@mui/icons-material/Search'

export const Controls = () => {
	const [inputVal, setInputVal] = useState('')
	const { searchForJoke } = useContext(GlobalContext)
	const history = useNavigate()

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
					alignItems: 'center',
				}}
			>
				<TextField
					id='standard-basic'
					label='Query'
					sx={{ mx: '20px' }}
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
				/>
				<Button variant='contained' sx={{ my: 'auto' }}>
					<SearchIcon />
				</Button>
			</form>
		</Box>
	)
}
