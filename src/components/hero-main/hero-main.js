function HeroMain(props) {
	return (
		<section className="hero hero--main">
			<div className="container">
				<h1 className="hero__title">Trader Evaluation Governing Association</h1>
				<p className="hero__text">
					<strong>TEGA</strong> focuses primarily on assisting the trader
					evaluation community by providing a vehicle for members to cooperate
					to achieve their professional goals.
				</p>
				{/* <img
					className="hero__image"
					src={require("../../img/homegraphs.png")}
					alt=""
				/> */}

				<p className="hero__textblock text-block text-block--lg">
					Launched in 2022 in response to the rapid growth of the trader
					evaluation industry, TEGA endeavors to represent community interests
					and provide an accessible forum for members to deliberate.
				</p>
			</div>
		</section>
	);
}

export default HeroMain;
