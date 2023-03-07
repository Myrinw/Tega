import HeroMain from "../../components/hero-main/hero-main";
function Home() {
	return (
		<div>
			<HeroMain />

			<section className="emblem">
				<div className="container">
					<h2 className="emblem__title">Join Us and get certified</h2>
					<img
						src={require("../../img/Emblem.png")}
						alt=""
						className="emblem__image"
					/>
				</div>
			</section>
			<section className="members members--v2">
				<div className="members__container">
					<div className="members__wrap">
						<div className="members__column">
							<span className="members__number">01</span>
							<h4 className="members__heading">Nam porttitor bland</h4>
							<div className="members__line"></div>
							<p className="members__text">
								Curabitur lobortis id lorem id bibendum. Ut id consectetur
								magna. Quisque volutpat augue enim, pu.
							</p>
							<a className="members__link" href="https://www.topstep.com/">
								READ MORE
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 15 12"
								>
									<path
										stroke="#388B2E"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 6h13l-4-5M1 6h13l-4 5"
									/>
								</svg>
							</a>
						</div>
						<div className="members__column">
							<span className="members__number">02</span>
							<h4 className="members__heading">Fusce vehicula dol</h4>
							<div className="members__line"></div>
							<p className="members__text">
								Curabitur lobortis id lorem id bibendum. Ut id consectetur
								magna. Quisque volutpat augue enim, pu.
							</p>
							<a className="members__link" href="https://www.earn2trade.com/">
								READ MORE
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 15 12"
								>
									<path
										stroke="#388B2E"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 6h13l-4-5M1 6h13l-4 5"
									/>
								</svg>
							</a>
						</div>
						<div className="members__column">
							<span className="members__number">03</span>
							<h4 className="members__heading">Lorem ipsum dolor</h4>
							<div className="members__line"></div>
							<p className="members__text">
								Curabitur lobortis id lorem id bibendum. Ut id consectetur
								magna. Quisque volutpat augue enim, pu.
							</p>
							<a className="members__link" href="www.uprofit.com">
								READ MORE
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 15 12"
								>
									<path
										stroke="#388B2E"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 6h13l-4-5M1 6h13l-4 5"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Home;
