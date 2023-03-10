import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";
import Members from "../../components/members/members";

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
						<div className="director__content">
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
						<div className="director__content">
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
						<div className="director__content">
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
						<div className="director__content">
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
						<div className="director__content">
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
						<div className="director__content">
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
			<Members />
		</div>
	);
}

export default About;
