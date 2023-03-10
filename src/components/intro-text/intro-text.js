import classNames from "classnames";

function IntroText({ children, largespacing, title, bold, mbnone }) {
	return (
		<section
			className={classNames("text-block-section", {
				"mb-0": mbnone,
			})}
		>
			<div className="container">
				<p
					className={classNames("text-block", {
						"text-block--lg": largespacing,
					})}
				>
					{title && <span className="text-block__title">{title}</span>}
					{title && <span className="text-block__line"></span>}

					{children}
					{bold && <span className="text-block__bold">{bold}</span>}
				</p>
			</div>
		</section>
	);
}
export default IntroText;
