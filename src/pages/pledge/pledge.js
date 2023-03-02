import HeroBig from "../../components/hero-big/hero-big";

function Faq() {
	return (
		<div>
			<HeroBig />
			<section className="list">
				<div className="container">
					<ul className="list__list">
						<li className="list__bullet">
							Preparing Aspiring Futures Traders for Live Futures Markets
						</li>
						<li className="list__bullet">
							Providing Equal Opportunity for Aspiring Futures Traders
						</li>
						<li className="list__bullet">
							Providing a Fair, Objective and Low Risk Environment for Aspiring
							Futures Traders
						</li>
						<li className="list__bullet">
							Practicing Transparent Business Policies
						</li>
						<li className="list__bullet">Rejecting Deceptive Marketing</li>
						<li className="list__bullet">
							Educating Aspiring Futures Traders on the Risks Associated with
							Trading
						</li>
						<li className="list__bullet">
							Where appropriate, implementing independent compliance and audit
							protocols so aspiring futures traders can objectively compare
							among trader evaluation firms
						</li>
					</ul>
				</div>
			</section>
			<section className="pledge">
				<div className="container">
					<h3 className="pledge__title">
						Preparing Aspiring Futures Traders for Live Futures Markets
					</h3>
				</div>
			</section>
			<section className="members">
				<div className="members__container">
					<h3 className="members__title">MEMBERS</h3>
					<div className="members__wrap">
						<div className="members__column">
							<img
								className="members__logo"
								src={require("../../img/topstep-logo.png")}
								alt=""
							/>
							<h4 className="members__heading">Topstep LLC</h4>
							<div className="members__line"></div>
							<p className="members__text">
								Registered Office: 141 West Jackson Boulevard, Suite 4240,
								Chicago, Illinois, 60604
							</p>
							<a className="members__link" href="https://www.topstep.com/">
								WWW.TOPSTEP.COM
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
							<img
								className="members__logo"
								src={require("../../img/earn2trade.png")}
								alt=""
							/>
							<h4 className="members__heading">Earn2Trade LLC</h4>
							<div className="members__line"></div>
							<p className="members__text">
								Registered Office:30 N Gould St STE 4000,Sheridan, WY, 82801
							</p>
							<a className="members__link" href="https://www.earn2trade.com/">
								WWW.EARN2TRADE.COM
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
							<img
								className="members__logo"
								src={require("../../img/uprofit.png")}
								alt=""
							/>
							<h4 className="members__heading">Uprofit LLC</h4>
							<div className="members__line"></div>
							<p className="members__text">
								Registered Office: <br /> Delaware
							</p>
							<a className="members__link" href="www.uprofit.com">
								WWW.UPROFIT.COM
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

export default Faq;
