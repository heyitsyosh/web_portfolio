import { BrowserRouter } from 'react-router-dom';
import { About, Socials, Hero, Navbar, Footer, MoreSocials, StarsCanvas } from './components';

const App = () => {
	return (
		<BrowserRouter>
		  <div className="relative z-0 bg-primary">
			<div className="bg-cover bg-no-repeat bg-center">
				<Navbar />
				<div className="scroller-wrapper">
					<div className="scroller">
							<Hero />
							{/* <About /> */}
							<MoreSocials />
							<Footer />
					</div>
				</div>
			</div>
		  </div>
		</BrowserRouter>
	)
}

export default App
