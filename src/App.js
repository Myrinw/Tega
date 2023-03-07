import "./App.scss";
import Faq from "./pages/faq/faq";
import Pledge from "./pages/pledge/pledge";
import About from "./pages/about/about";
import Reports from "./pages/reports/reports";
import Member from "./pages/member/member";
import Header from "./components/header/header";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
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
					<Route exact path="/member" element={<Member />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</HashRouter>
		</div>
	);
}

export default App;
