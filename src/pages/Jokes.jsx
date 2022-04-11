import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import { GlobalContext } from '../context/GlobalContext'

export const Jokes = () => {
	const { jokes } = useContext(GlobalContext)

	return (
		<List>
			{jokes.map((elem, i) => (
				<ListItem key={i}>
					<ListItemButton component={Link} to={`/jokes/${elem.id}`}>
						<ListItemText variant='subtitle1'>{elem.joke}</ListItemText>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	)
}
