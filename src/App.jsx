import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/system'

// Context
import { GlobalProvider } from './context/GlobalContext'

// COMPONENTS
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

// PAGES
import { Joke } from './pages/Joke'
import { Jokes } from './pages/Jokes'
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
							justifyContent: 'center',
							alignItems: 'center',
							flexGrow: 1,
							height: '100%',
							p: '30px',
						}}
					>
						<Routes>
							<Route exact path='/' element={<Search />} />
							<Route path='/jokes/' element={<Jokes />} />
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
