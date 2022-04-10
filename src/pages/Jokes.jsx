import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalContext'

export const Jokes = () => {
	const { jokes } = useContext(GlobalContext)

	return (
		<div>
			{jokes.map((elem, i) => (
				<Link key={i} to={`/jokes/${elem.id}`}>
					{elem.joke}
					<br />
				</Link>
			))}
		</div>
	)
}
