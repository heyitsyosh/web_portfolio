import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, StarsCanvas } from './components';

const App = () => {
	return (
		<BrowserRouter>
		  <div className="relative z-0 bg-primary">
			<div className="bg-cover bg-no-repeat bg-center">
				<Navbar />
				<div className="scroller-wrapper">
					<div className="scroller">
						<Hero />
						<Contact />
						<About />
						{/* <div className="relative z-0">
							<StarsCanvas />
						</div> */}
					</div>
				</div>
			</div>
		  </div>
		</BrowserRouter>
	)
}

export default App
