import HeroMain from "../../components/hero-main/hero-main";
function Home() {
	return (
		<div>
			<HeroMain />

			<section className="emblem">
				<div className="container">
					<h2 className="emblem__title">Join Us and get certified</h2>
					<img
						src={require("../../img/Emblem.png")}
						alt=""
						className="emblem__image"
					/>
				</div>
			</section>
		</div>
	);
}
export default Home;
