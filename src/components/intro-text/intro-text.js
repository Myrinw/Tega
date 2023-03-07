import classNames from "classnames";

function IntroText({ children, largespacing, title }) {
	return (
		<section className="text-block-section">
			<div className="container">
				<p
					className={classNames("text-block", {
						"text-block--lg": largespacing,
					})}
				>
					{title && <h4 className="text-block__title">{title}</h4>}
					{title && <div className="text-block__line"></div>}

					{children}
				</p>
			</div>
		</section>
	);
}
export default IntroText;
