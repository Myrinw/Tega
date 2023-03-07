import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";
import Form from "../../components/form/form";

function Contact() {
	return (
		<div>
			<Hero title="CONTACT US"></Hero>
			<IntroText mbnone="true">
				Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
				Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
				Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam
				tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum
				vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas
				quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien
				convallis eu. Nulla ut turpis in diam dapibus consequat.Cras quis nulla
				commodo,.
			</IntroText>

			<section className="title-text">
				<div className="container">
					<h4 className="faqs__question">Stay connected</h4>
					<div className="faqs__line"></div>
					<p className="faqs__answer">
						If you are interested in joining{" "}
						<strong className="green">TEGA</strong>, or have questions about
						meeting compliance requirements to join, please contact us so we can
						help you get on the path to membership.
					</p>
				</div>
			</section>
			<Form />
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

export default Contact;
