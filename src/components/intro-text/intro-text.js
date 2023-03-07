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
					{title && <h4 className="text-block__title">{title}</h4>}
					{title && <div className="text-block__line"></div>}

					{children}
					{bold && <div className="text-block__bold">{bold}</div>}
				</p>
			</div>
		</section>
	);
}
export default IntroText;
