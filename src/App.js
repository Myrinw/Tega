import "./App.scss";
import Faq from "./pages/faq/faq";
import Pledge from "./pages/pledge/pledge";
import About from "./pages/about/about";
import Reports from "./pages/reports/reports";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
	// const navigate = useNavigate();

	// const refreshPage = () => {
	// 	navigate(0);
	// };
	return (
		<div>
			<HashRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/faq" element={<Faq />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/pledge" element={<Pledge />} />
					<Route exact path="/reports" element={<Reports />} />
				</Routes>
				<Footer />
			</HashRouter>
		</div>
	);
}

export default App;
