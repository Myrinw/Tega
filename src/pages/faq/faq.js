import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";
function Faq() {
	return (
		<div>
			<Hero title={"FAQ"} />
			{/* <section className="text-block-section">
				<div className="container">
					<p className="text-block">
						
					</p>
				</div>
			</section> */}
			<IntroText>
				Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
				Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
				Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam
				tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum
				vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas
				quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien
				convallis eu. Nulla ut turpis in diam dapibus consequat.Cras quis nulla
				commodo,.
			</IntroText>
			<section className="faqs">
				<div className="container">
					<h3 className="faqs__title">MEMBERS</h3>
					<div>
						<h4 className="faqs__question">Why should I join TEGA?</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							There are two main reasons for joining our association. The first
							and most important is to commit to a transparent set of protocols,
							guidelines and compliance procedures that can verify the fairness
							of your business model. The second is to join a group of your
							associates who share similar interests and concerns, and have your
							voice added to the representation of our industry in dealing with
							third parties.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							Who conducts the third party compliance reports?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							___________ law firm is contracted by the association to provide
							standardized annual compliance reports of each member. (add short
							law firm bio and link)
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							What are the requirements of joining TEGA?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							Prospective TEGA members must bring their business practices
							inline with our association Pledge and submit to annual compliance
							audits. Please click here to be directed to the full text of our
							Pledge.
						</p>
					</div>
					<h3 className="faqs__title faqs__title--mt">TRADERS</h3>
					<div>
						<h4 className="faqs__question">
							What differentiates TEGA members from other trader evaluation
							firms?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							TEGA members commit to an industry pledge and to submit to annual
							third party compliance audits. TEGA members work according to
							standardized, transparent business practices and are held
							accountable by the association for any lapses. Non-TEGA members
							exist outside of the association, and may or may not commit to
							fair and acceptable business practices.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							What is the Pledge that TEGA members must abide by?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							Please click here to be directed to the full text of our Pledge.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							How can I report an issue with the company I work with?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							If the company you work with is a TEGA member, you should submit
							any queries you have to their customer or technical support staff.
							TEGA does not provide customer support services and cannot resolve
							issues between companies and their respective customers. If you
							believe that you have an unresolvable issue, or that a TEGA member
							has violated their pledge in working with you, you may click here
							to submit a complaint form to the association. Upon submission you
							will receive an automatic reply confirming submission. Please note
							that any such submissions are for internal records and auditing
							purposes only, and will not be personally handled by TEGA. <br />
							<br />
							If the company you work with is not a TEGA member, please click
							here to fill out a form for submission. Upon submission you will
							receive an automatic reply confirming submission. Please note that
							any such submissions are for internal records and auditing
							purposes only, and will not be personally handled by TEGA.
						</p>
					</div>
					<div>
						<h4 className="faqs__question">
							Who conducts the third party compliance reports?
						</h4>
						<div className="faqs__line"></div>
						<p className="faqs__answer">
							___________ law firm is contracted by the association to provide
							standardized annual compliance reports of each member. (add short
							law firm bio and link)
						</p>
					</div>
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
