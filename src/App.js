import "./App.scss";
import Faq from "./pages/faq/faq";
import Pledge from "./pages/pledge/pledge";
import Reports from "./pages/reports/reports";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
	const Home = () => <h1>This is home</h1>;
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
					<Route exact path="/pledge" element={<Pledge />} />
					<Route exact path="/reports" element={<Reports />} />
				</Routes>
				<Footer />
			</HashRouter>
		</div>
	);
}

export default App;
