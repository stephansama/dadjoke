import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Box } from '@mui/system'

import { GlobalProvider } from './context/GlobalContext'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { Joke } from './pages/Joke'
import { Random } from './pages/Random'
import { Search } from './pages/Search'

function App() {
	return (
		<BrowserRouter>
			<GlobalProvider>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100vh',
						backgroundColor: 'background.paper',
						color: 'text.primary',
					}}
				>
					<Navbar />
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flexGrow: 1,
						}}
					>
						<Routes>
							<Route exact path='/' element={<Search />} />
							<Route path='/jokes/:jokeid' element={<Joke />} />
							<Route path='/random/' element={<Random />} />
							<Route path='*' element={<h3>404 Not Found</h3>} />
						</Routes>
					</Box>
					<Footer />
				</Box>
			</GlobalProvider>
		</BrowserRouter>
	)
}

export default App
