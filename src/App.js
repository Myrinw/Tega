import "./App.scss";
import Faq from "./pages/faq/faq";
import Pledge from "./pages/pledge/pledge";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {
	BrowserRouter,
	Routes, // instead of "Switch"
	Route,
} from "react-router-dom";

function App() {
	const Home = () => <h1>This is home</h1>;

	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/faq" element={<Faq />} />
					<Route exact path="/pledge" element={<Pledge />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
