import classNames from "classnames";

function IntroText({ children, largespacing }) {
	return (
		<section className="text-block-section">
			<div className="container">
				<p
					className={classNames("text-block", {
						"text-block--lg": largespacing,
					})}
				>
					{children}
				</p>
			</div>
		</section>
	);
}
export default IntroText;
