function Members() {
	return (
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
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
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
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
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
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 6h13l-4-5M1 6h13l-4 5"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Members;
