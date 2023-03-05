import HeroMain from "../../components/hero-main/hero-main";
import IntroText from "../../components/intro-text/intro-text";
function Home() {
	return (
		<div>
			<HeroMain />
			<IntroText largespacing="true">
				Launched in 2022 in response to the rapid growth of the trader
				evaluation industry, TEGA endeavors to represent community interests and
				provide an accessible forum for members to deliberate.
			</IntroText>
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
