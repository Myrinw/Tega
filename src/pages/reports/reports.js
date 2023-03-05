import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";

function Reports() {
	return (
		<div>
			<Hero title="REPORTS"></Hero>
			<IntroText>
				TEGA conducts annual third party compliance evaluations of all members.
				Members are required to post a link on their website footer directing
				customers to their compliance evaluations listed on the TEGA site. The
				compliance evaluations are based on a list compiled by the association
				that divides compliance issues into a Yellow, Red and Black color coded
				system. The color green will indicate that no compliance issues have
				been determined. Issues will be labeled in the following manner:
			</IntroText>
			<section className="report">
				<div className="container">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 85 85"
						width="85"
						height="85"
						className="report__svg"
					>
						<path
							fill="#04724D"
							fill-rule="evenodd"
							d="M42.5 85C65.972 85 85 65.972 85 42.5S65.972 0 42.5 0 0 19.028 0 42.5 19.028 85 42.5 85Zm19.736-65.471a5 5 0 0 0-6.708 2.236l-18.72 37.437-13.091-14.546a5 5 0 1 0-7.433 6.69l18 20c2.357 2.62 6.612 2.043 8.188-1.109l22-44a5 5 0 0 0-2.236-6.708Z"
							clip-rule="evenodd"
						/>
					</svg>
					<h3 class="report__title">Green</h3>
					<div className="report__line"></div>
					<p className="report__text report__text--center">
						Compliant, no action required
					</p>
				</div>
			</section>
			<section className="report report--v2">
				<div className="container">
					<svg
						width="95"
						height="86"
						viewBox="0 0 95 86"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="report__svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M29.9978 20.0857L29.9978 20.0858L29.993 20.094L9.56304 55.621C1.90284 68.945 -1.92496 75.609 0.961441 80.601C3.84814 85.5932 11.5354 85.5932 26.9024 85.5932H67.7614C83.1284 85.5932 90.8124 85.5932 93.7024 80.601C96.5891 75.6088 92.761 68.945 85.0969 55.621L64.6709 20.094L64.6689 20.0905C56.9676 6.69863 53.1159 0.000817629 47.332 0C41.5486 0.000817461 37.6975 6.69725 29.9978 20.0857ZM47.5128 17C50.6496 17 53.1718 19.5816 53.0988 22.7175L52.3674 54.1592C52.3059 56.8024 50.1456 58.913 47.5017 58.913C44.8564 58.913 42.6955 56.8003 42.6359 54.1558L41.9266 22.7136C41.8559 19.5791 44.3775 17 47.5128 17Z"
							fill="#FFC509"
						/>
					</svg>

					<h3 class="report__title">Green</h3>
					<div className="report__line"></div>
					<p className="report__text">
						Non-compliant, deviation from pledge determined. Action required to
						address non-compliance. Yellow issues should be addressed within 45
						days, and will be re-examined in the second bi-annual compliance
						check. Yellow issues include:
					</p>
					<br />
					<br />
					<ul>
						<li class="list-item">
							Provide an objective service for aspiring futures trader to have
							their trading evaluated
						</li>
						<li class="list-item">
							Provide aspiring futures traders with the option of at least one
							live third party data feed connectivity service for their
							evaluation
						</li>
						<li class="list-item">
							Provide aspiring futures traders with the option of at least one
							third party trading platform for their evaluation
						</li>
						<li class="list-item">
							Provide aspiring futures traders with the option of at least one
							third party trading platform for their evaluation
						</li>
						<li class="list-item">
							Provide aspiring futures traders with the option of at least one
							third party trading platform for their evaluation
						</li>
						<li class="list-item">
							Provide aspiring futures traders with the option of at least one
							third party trading platform for their evaluation
						</li>
					</ul>
				</div>
			</section>
			<section className="report">
				<div className="container">
					<svg
						width="95"
						height="86"
						viewBox="0 0 95 86"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="report__svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M29.9978 20.0857L29.9978 20.0858L29.993 20.094L9.56304 55.621C1.90284 68.945 -1.92496 75.609 0.961441 80.601C3.84814 85.5932 11.5354 85.5932 26.9024 85.5932H67.7614C83.1284 85.5932 90.8124 85.5932 93.7024 80.601C96.5891 75.6088 92.761 68.945 85.0969 55.621L64.6709 20.094L64.6689 20.0905C56.9676 6.69863 53.1159 0.000817629 47.332 0C41.5486 0.000817461 37.6975 6.69725 29.9978 20.0857ZM47.5128 17C50.6496 17 53.1718 19.5816 53.0988 22.7175L52.3674 54.1592C52.3059 56.8024 50.1456 58.913 47.5017 58.913C44.8564 58.913 42.6955 56.8003 42.6359 54.1558L41.9266 22.7136C41.8559 19.5791 44.3775 17 47.5128 17Z"
							fill="black"
						/>
					</svg>

					<h3 class="report__title">Green</h3>
					<div className="report__line"></div>
					<p className="report__text">
						Non-compliant, unacceptable deviation from pledge determined.
						Disciplinary action required.
					</p>
					<br />
					<br />
					<ul>
						<li class="list-item">
							Provide an objective service for aspiring futures trader to have
							their trading evaluated
						</li>
						<li class="list-item">
							Provide aspiring futures traders with the option of at least one
							live third party data feed connectivity service for their
							evaluation
						</li>
						<li class="list-item">
							Provide aspiring futures traders with the option of at least one
							third party trading platform for their evaluation
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

export default Reports;
