function HeroMain(props) {
	return (
		<section className="hero hero--main">
			<h1 className="hero__title">Trader Evaluation Governing Association</h1>
			<p className="hero__text">
				<strong>TEGA</strong> focuses primarily on assisting the trader
				evaluation community by providing a vehicle for members to cooperate to
				achieve their professional goals.
			</p>
			<img
				className="hero__image"
				src={require("../../img/stonks.png")}
				alt=""
			/>
		</section>
	);
}

export default HeroMain;
