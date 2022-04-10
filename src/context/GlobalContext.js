import { createTheme, ThemeProvider } from '@mui/material'
import { createContext, useMemo, useState } from 'react'

import axios from 'axios'

import { useLocalStorage } from '../hooks/useLocalStorage'

export const GlobalContext = createContext()

const axiosConfig = {
	headers: {
		'User-Agent': 'https://github.com/stephansama/dadjoke',
		Accept: 'application/json',
	},
}

export const GlobalProvider = ({ children }) => {
	const [darkmode, setDarkmode] = useLocalStorage('darkmode', 'light')
	const [jokes, setJokes] = useLocalStorage('jokes', [])
	const [randomJoke, setRandomJoke] = useState('')

	const toggleDark = () =>
		setDarkmode((old) => (old === 'light' ? 'dark' : 'light'))

	const findJokeById = (id) => jokes.filter((joke) => joke.id === id)[0].joke

	const searchForJoke = (query) => {
		axios
			.get(
				`${process.env.REACT_APP_API_BASE_URL}search?term=${query}`,
				axiosConfig
			)
			.then((data) => setJokes(data.data.results))
			.catch((err) => console.error(err))
	}

	const getRandomJoke = () => {
		axios
			.get(`${process.env.REACT_APP_API_BASE_URL}`, axiosConfig)
			.then((data) => setRandomJoke(data.data.joke))
			.catch((err) => console.error(err))
	}

	// Material UI Theme
	const GlobalTheme = useMemo(
		() => createTheme({ palette: { mode: darkmode } }),
		[darkmode]
	)

	return (
		<GlobalContext.Provider
			value={{
				darkmode,
				toggleDark,
				jokes,
				randomJoke,
				findJokeById,
				searchForJoke,
				getRandomJoke,
			}}
		>
			<ThemeProvider theme={GlobalTheme}>
				<>{children}</>
			</ThemeProvider>
		</GlobalContext.Provider>
	)
}
