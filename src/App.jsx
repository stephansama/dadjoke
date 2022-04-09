import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Box } from '@mui/system'

import { GlobalProvider } from './context/GlobalContext'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Controls } from './components/Controls'

import { Joke } from './pages/Joke'
import { Search } from './pages/Search'

function App() {
	return (
		<GlobalProvider>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
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
					<BrowserRouter>
						<Routes>
							<Route exact path='/' element={<Controls />} />
							<Route path='/jokes/' element={<Joke />} />
						</Routes>
					</BrowserRouter>
				</Box>
				<Footer />
			</Box>
		</GlobalProvider>
	)
}

export default App
