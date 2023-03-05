function IntroText(props) {
	return (
		<section className="text-block-section">
			<div className="container">
				<p className="text-block">{props.children}</p>
			</div>
		</section>
	);
}
export default IntroText;
