import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";

function About() {
	return (
		<div>
			<Hero title="ABOUT"></Hero>
			<IntroText title="Who are we?">
				Based in Chicago, Illinois and located at Pellentesque, TEGA is a
				registered 501(c)(6) membership-based non profit trade association. TEGA
				is managed by a board of directors, and its internal staff who handle
				administrative responsibilities, managing industry outreach, and
				coordinating member affairs.
			</IntroText>

			<h3 className="greentitle">Board of Directors</h3>

			<section className="director">
				<div className="director__container">
					<div className="director__flex">
						<div class="director__content">
							<h4 className="director__title">Nam porttitor bland</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Donec facilisis tortor ut augue lacinia, at viverra est semper.
								Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
								Pellentesque non dignissim neque. Ut porta viverra est, ut
								dignissim.
							</p>
						</div>
						<div className="director__quote">
							<img
								src={require("../../img/quote.png")}
								className="director__quote-icon"
								alt=""
							/>
							<p className="director__quote-text">
								In hac habitasse platea dictumst. Vivamus adipiscing fermentum
								quam volutpat
							</p>
							<p className="director__quote-name">- In hac habitasse platea</p>
						</div>
						<img
							src={require("../../img/woman.png")}
							alt=""
							className="director__image"
						/>
					</div>
				</div>
			</section>
			<section className="director director--reversed">
				<div className="director__container">
					<div className="director__flex">
						<div class="director__content">
							<h4 className="director__title">Nam porttitor bland</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Donec facilisis tortor ut augue lacinia, at viverra est semper.
								Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
								Pellentesque non dignissim neque. Ut porta viverra est, ut
								dignissim.
							</p>
						</div>
						<div className="director__quote">
							<img
								src={require("../../img/quote.png")}
								className="director__quote-icon"
								alt=""
							/>
							<p className="director__quote-text">
								In hac habitasse platea dictumst. Vivamus adipiscing fermentum
								quam volutpat
							</p>
							<p className="director__quote-name">- In hac habitasse platea</p>
						</div>
						<img
							src={require("../../img/guy.png")}
							alt=""
							className="director__image"
						/>
					</div>
				</div>
			</section>
			<section className="director">
				<div className="director__container">
					<div className="director__flex">
						<div class="director__content">
							<h4 className="director__title">Nam porttitor bland</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Donec facilisis tortor ut augue lacinia, at viverra est semper.
								Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
								Pellentesque non dignissim neque. Ut porta viverra est, ut
								dignissim.
							</p>
						</div>
						<div className="director__quote">
							<img
								src={require("../../img/quote.png")}
								className="director__quote-icon"
								alt=""
							/>
							<p className="director__quote-text">
								In hac habitasse platea dictumst. Vivamus adipiscing fermentum
								quam volutpat
							</p>
							<p className="director__quote-name">- In hac habitasse platea</p>
						</div>
						<img
							src={require("../../img/woman-glasses.png")}
							alt=""
							className="director__image"
						/>
					</div>
				</div>
			</section>
			<section className="director director--reversed">
				<div className="director__container">
					<div className="director__flex">
						<div class="director__content">
							<h4 className="director__title">Nam porttitor bland</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Donec facilisis tortor ut augue lacinia, at viverra est semper.
								Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
								Pellentesque non dignissim neque. Ut porta viverra est, ut
								dignissim.
							</p>
						</div>
						<div className="director__quote">
							<img
								src={require("../../img/quote.png")}
								className="director__quote-icon"
								alt=""
							/>
							<p className="director__quote-text">
								In hac habitasse platea dictumst. Vivamus adipiscing fermentum
								quam volutpat
							</p>
							<p className="director__quote-name">- In hac habitasse platea</p>
						</div>
						<img
							src={require("../../img/white-woman.png")}
							alt=""
							className="director__image"
						/>
					</div>
				</div>
			</section>
			<section className="director">
				<div className="director__container">
					<div className="director__flex">
						<div class="director__content">
							<h4 className="director__title">Nam porttitor bland</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Donec facilisis tortor ut augue lacinia, at viverra est semper.
								Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
								Pellentesque non dignissim neque. Ut porta viverra est, ut
								dignissim.
							</p>
						</div>
						<div className="director__quote">
							<img
								src={require("../../img/quote.png")}
								className="director__quote-icon"
								alt=""
							/>
							<p className="director__quote-text">
								In hac habitasse platea dictumst. Vivamus adipiscing fermentum
								quam volutpat
							</p>
							<p className="director__quote-name">- In hac habitasse platea</p>
						</div>
						<img
							src={require("../../img/guy2.png")}
							alt=""
							className="director__image"
						/>
					</div>
				</div>
			</section>
			<section className="director director--reversed director--last">
				<div className="director__container">
					<div className="director__flex">
						<div class="director__content">
							<h4 className="director__title">Nam porttitor bland</h4>
							<div className="director__line"></div>
							<p className="director__text">
								Donec facilisis tortor ut augue lacinia, at viverra est semper.
								Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
								Pellentesque non dignissim neque. Ut porta viverra est, ut
								dignissim.
							</p>
						</div>
						<div className="director__quote">
							<img
								src={require("../../img/quote.png")}
								className="director__quote-icon"
								alt=""
							/>
							<p className="director__quote-text">
								In hac habitasse platea dictumst. Vivamus adipiscing fermentum
								quam volutpat
							</p>
							<p className="director__quote-name">- In hac habitasse platea</p>
						</div>
						<img
							src={require("../../img/guy-suit.png")}
							alt=""
							className="director__image"
						/>
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

export default About;
