import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

const App = () => {
	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto px-6 overflow-hidden">
				<Home />
				<Footer />
			</div>
		</>
	)
}

export default App