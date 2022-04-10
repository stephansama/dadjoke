import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export const Joke = () => {
	const { findJokeById } = useContext(GlobalContext)
	const currentJoke = findJokeById(useParams().jokeid)

	return <div>{currentJoke}</div>
}
