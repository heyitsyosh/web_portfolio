import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
	return (
		<BrowserRouter>
		  <div className="relative z-0 bg-primary">
			<div className="bg-cover bg-no-repeat bg-center">
				<Navbar />
				<div className="scroller-wrapper">
					<div className="scroller">
						<Hero />
						<About />
						<Experience />
						<Tech />
						<Works />
						<Feedbacks />
						<div className="relative z-0">
							<Contact />
							<StarsCanvas />
						</div>
					</div>
				</div>
			</div>
		  </div>
		</BrowserRouter>
	)
}

export default App
