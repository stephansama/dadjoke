import { createTheme, ThemeProvider } from '@mui/material'
import { createContext, useMemo, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
	const [darkmode, setDarkmode] = useState('dark')

	const toggleDark = () =>
		setDarkmode((old) => (old === 'light' ? 'dark' : 'light'))

	const GlobalTheme = useMemo(
		() =>
			createTheme({
				palette: { mode: darkmode },
			}),
		[darkmode]
	)

	return (
		<GlobalContext.Provider value={{ darkmode, toggleDark }}>
			<ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
		</GlobalContext.Provider>
	)
}
