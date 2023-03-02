function Hero(props) {
	return (
		<section className="hero">
			<h1 className="hero__title">{props.title}</h1>
			<img
				className="hero__image"
				src={require("../../img/graphs.png")}
				alt=""
			/>
			<img
				className="hero__lines"
				src={require("../../img/lines.png")}
				alt=""
			/>
		</section>
	);
}

export default Hero;
