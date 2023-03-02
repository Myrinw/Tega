function HeroBig(props) {
	return (
		<section className="hero hero--big">
			<h1 className="hero__title">
				<span className="green">TEGA</span> PLEDGE
			</h1>
			<p className="hero__text">
				The Trader Evaluation Governing Association (<strong>TEGA</strong>) was
				created in response to the growth in trader evaluation programs among
				aspiring futures traders, and the growth of companies providing the
				service. The trader evaluation industry as a whole provides aspiring
				futures traders with, first, exposure to markets in a low risk setting
				and, second, the possibility of accessing trading capital and joining a
				proprietary trading firm. As the industry has grown, the members of{" "}
				<strong>TEGA</strong> identified a need to provide a positive framework
				for growth that would reflect the aspirations of its community. In order
				to realize those aspirations, the members of <strong>TEGA</strong> have
				committed to the following principles:
			</p>
			<img
				className="hero__image"
				src={require("../../img/stonks.png")}
				alt=""
			/>
		</section>
	);
}

export default HeroBig;
