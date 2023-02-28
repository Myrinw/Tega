import { useState } from "react";
import "./App.scss";

function App() {
	const [menu_open, set_menu_open] = useState(false);

	return (
		<div>
			<header className="header">
				<div
					className={
						menu_open
							? "header__container header__container--open"
							: "header__container"
					}
				>
					<a href="#test">
						<img
							src={require("./img/logo.png")}
							alt=""
							className="header__logo"
						/>
					</a>
					<div className="menu">
						<a className="menu__item" href="#test">
							Home
						</a>
						<a className="menu__item" href="#test">
							About
						</a>
						<a className="menu__item" href="#test">
							Pledge
						</a>
						<a className="menu__item" href="#test">
							Reports
						</a>
						<a className="menu__item menu__item--active" href="#test">
							FAQ
						</a>
						<a className="menu__item" href="#test">
							Contact Us
						</a>
					</div>

					<div className="header__btn">
						<a href="#btn" className="btn">
							Become a member
						</a>
					</div>
					<div
						id="burger"
						className={menu_open ? "header__burger open" : "header__burger"}
						onClick={() => set_menu_open(!menu_open)}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div
					className={
						menu_open ? "mobile-menu mobile-menu--active" : "mobile-menu"
					}
				>
					<div className="container">
						<div className="mobile-menu__menu">
							<a className="mobile-menu__item" href="#test">
								Home
							</a>
							<a className="mobile-menu__item" href="#test">
								About
							</a>
							<a className="mobile-menu__item" href="#test">
								Pledge
							</a>
							<a className="mobile-menu__item" href="#test">
								Reports
							</a>
							<a
								className="mobile-menu__item mobile-menu__item--active"
								href="#test"
							>
								FAQ
							</a>
							<a className="mobile-menu__item" href="#test">
								Contact Us
							</a>
						</div>
						<a href="#test" className="btn mobile-menu__btn">
							Become a member
						</a>
					</div>
				</div>
			</header>
			<section className="hero">
				<h1 className="hero__title">FAQ</h1>
				<img className="hero__image" src={require("./img/graphs.png")} alt="" />
				<img className="hero__lines" src={require("./img/lines.png")} alt="" />
			</section>
			<section className="text-block-section">
				<div className="container">
					<p className="text-block">
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
						Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
						Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus.
						Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus
						vestibulum vestibulum. Suspendisse fermentum sem sagittis ante
						venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed
						aliquam sapien convallis eu. Nulla ut turpis in diam dapibus
						consequat.Cras quis nulla commodo,.
					</p>
				</div>
			</section>
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
				</div>
			</section>
			<footer className="footer">
				<div className="footer__container">
					<div className="footer__left">
						<div>
							<img
								src={require("./img/logo.png")}
								alt=""
								className="footer__logo"
							/>
							<a href="#test" className="footer__contact">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 21 29"
									type="image/svg+xml"
									width="21"
									height="29"
								>
									<path
										fill="#04724d"
										d="M16.022 19.873a26.425 26.425 0 0 1-1.147 1.832c2.534.58 4.042 1.587 4.042 2.35 0 1.13-3.35 2.84-8.417 2.84-5.07 0-8.417-1.71-8.417-2.84 0-.763 1.508-1.74 4.042-2.35-.392-.58-.785-1.19-1.147-1.832C2.081 20.636 0 22.01 0 24.055 0 27.291 5.28 29 10.5 29S21 27.29 21 24.055c0-2.045-2.082-3.419-4.978-4.182Z"
									/>
									<path
										fill="#04724d"
										fillRule="evenodd"
										d="M18.707 8.334c0 3.632-5.13 11.66-7.27 14.866a1.15 1.15 0 0 1-1.872 0C7.424 19.995 2.264 11.966 2.264 8.334 2.264 3.724 5.975 0 10.5 0s8.206 3.724 8.206 8.334ZM10.5 4.457c-2.111 0-3.831 1.74-3.831 3.877 0 2.106 1.72 3.846 3.832 3.846a3.833 3.833 0 0 0 3.831-3.846c0-2.137-1.72-3.877-3.832-3.877Z"
										clipRule="evenodd"
									/>
								</svg>
								572 West City STE, Brawley, NE 26956
							</a>
							<a href="#test" className="footer__contact">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 25 25"
									width="25"
									height="25"
								>
									<path
										fill="#04724d"
										d="M24.268 8.14a13.16 13.16 0 0 0-2.947-4.43C20.047 2.437 18.558 1.466 16.887.77c-.82-.335-1.671-.576-2.522-.759a.58.58 0 0 0-.668.455.579.579 0 0 0 .456.667c.79.152 1.579.364 2.309.667a11.683 11.683 0 0 1 4.04 2.7 12.552 12.552 0 0 1 2.704 4.034c.303.758.547 1.516.668 2.305.06.273.273.455.547.455h.091a.579.579 0 0 0 .456-.667 10.853 10.853 0 0 0-.7-2.487h.001ZM19.71 9.96a7.99 7.99 0 0 1 .516 1.85c.031.272.273.486.547.486h.092c.303-.06.516-.334.455-.638a10.481 10.481 0 0 0-.576-2.123 9.693 9.693 0 0 0-2.096-3.185c-.912-.91-1.975-1.637-3.19-2.092a8.599 8.599 0 0 0-2.095-.576.536.536 0 0 0-.639.455c-.03.303.152.607.456.638a7.63 7.63 0 0 1 1.853.515 8.304 8.304 0 0 1 2.795 1.85 8.788 8.788 0 0 1 1.882 2.82ZM11.72 7.866c-.031.303.212.575.516.606a4.687 4.687 0 0 1 2.946 1.365c.79.79 1.276 1.82 1.367 2.942.031.303.273.515.577.515h.06c.304-.03.547-.303.517-.606-.122-1.365-.7-2.67-1.702-3.64a5.937 5.937 0 0 0-3.646-1.7c-.332-.029-.605.185-.636.518Z"
									/>
									<path
										fill="#04724d"
										d="M23.963 18.3c-.425-.334-.942-.576-1.398-.758-1.488-.607-3.007-1.001-4.313-1.305-.456-.09-1.094-.272-1.731-.03-.487.182-.79.546-1.064.879-.091.12-.212.243-.304.364-.243.242-.91.12-1.73-.335-.943-.485-2.067-1.364-3.13-2.426-1.032-1.03-1.944-2.184-2.43-3.124-.456-.82-.577-1.486-.335-1.73.091-.09.212-.182.364-.302.335-.273.7-.576.88-1.062.244-.637.092-1.304-.03-1.729-.304-1.304-.7-2.82-1.307-4.306a5.215 5.215 0 0 0-.76-1.396C6.252.525 5.735.16 5.158.07c-.79-.152-1.67.151-2.551.91A7.058 7.058 0 0 0 .935 3.072a7.452 7.452 0 0 0-.851 2.547c-.304 2.063.212 4.338 1.61 6.976a25.138 25.138 0 0 0 4.526 6.187 26.86 26.86 0 0 0 6.197 4.519C14.574 24.423 16.487 25 18.249 25c.395 0 .79-.03 1.155-.091.88-.121 1.731-.424 2.551-.85.79-.424 1.488-1 2.096-1.668.76-.85 1.063-1.729.911-2.547-.117-.574-.483-1.12-1-1.544h.001Z"
									/>
								</svg>
								1 800 123 1234
							</a>
							<a href="#test" className="footer__contact">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 21 22"
									width="21"
									height="22"
								>
									<path
										fill="#04724d"
										fillRule="evenodd"
										d="M20.948 8.647a.462.462 0 0 0-.209-.56l-4.707-2.712a.353.353 0 0 0-.046-.02l-.006-.003C15.887 2.385 13.466 0 10.5 0 7.535 0 5.11 2.388 5.02 5.358a.392.392 0 0 0-.091.04L.262 8.087a.475.475 0 0 0-.236.394.456.456 0 0 0 .027.165.465.465 0 0 0-.053.213v9.813C0 20.508 1.482 22 3.303 22h14.396C19.519 22 21 20.506 21 18.672V8.86a.478.478 0 0 0-.052-.212ZM5.085 6.399C5.5 9.035 7.77 11.057 10.5 11.057c.259 0 .47-.212.47-.473a.471.471 0 0 0-.47-.473c-2.507 0-4.545-2.056-4.545-4.583C5.956 3.002 7.994.947 10.5.947c2.506 0 4.544 2.056 4.544 4.582 0 .517-.117 1.023-.245 1.491-.395 1.454-.751 1.553-.763 1.557-.166 0-.578-.513-.837-1.145l-.228-1.952c-.025-1.353-1.122-2.447-2.471-2.447A2.489 2.489 0 0 0 8.024 5.53a2.488 2.488 0 0 0 2.477 2.495c.677 0 1.292-.277 1.74-.723l.035.305c.004.04.015.08.029.119.121.31.776 1.85 1.783 1.797.916-.05 1.362-1.309 1.618-2.25.075-.28.147-.572.2-.878l3.707 2.137-9.114 6.123-9.111-6.126L5.085 6.4Zm5.416.678c.847 0 1.536-.694 1.536-1.548 0-.854-.69-1.549-1.537-1.549s-1.536.695-1.536 1.55c0 .853.689 1.547 1.537 1.547ZM1.315 19.956l5.43-4.503a.467.467 0 0 1 .662.065c.164.202.136.5-.065.666L1.97 20.64a2.427 2.427 0 0 1-.655-.683Zm12.278-4.438a.476.476 0 0 0 .064.666l5.373 4.454c.26-.18.483-.414.655-.682l-5.431-4.503a.467.467 0 0 0-.661.065Z"
										clipRule="evenodd"
									/>
								</svg>
								info@tiga.com
							</a>
							<div></div>
							<a href="#contact" className="footer__btn btn">
								Become a member
							</a>
						</div>
					</div>
					<div className="footer__right">
						<div className="footer__right-grid">
							<div className="footer__menu">
								<a className="footer__menu-item" href="#home">
									Home
								</a>
								<a className="footer__menu-item" href="#home">
									About
								</a>
								<a
									className="footer__menu-item footer__menu-item--nested"
									href="#home"
								>
									Who are we?
								</a>
								<a
									className="footer__menu-item footer__menu-item--nested"
									href="#home"
								>
									Board of directors
								</a>
								<a
									className="footer__menu-item footer__menu-item--nested"
									href="#home"
								>
									Members
								</a>
								<a className="footer__menu-item" href="#home">
									Pledge
								</a>
								<a className="footer__menu-item" href="#home">
									Reports
								</a>
								<a className="footer__menu-item" href="#home">
									Become a member
								</a>
								<a className="footer__menu-item" href="#home">
									FAQ
								</a>
								<a className="footer__menu-item" href="#home">
									Contact Us
								</a>
							</div>
							<div>
								<div className="footer__socials">
									<a href="#twitter" className="footer__social">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 44 44"
										>
											<circle
												cx="22"
												cy="22"
												r="21"
												stroke="#d8d8d8"
												strokeWidth="2"
											/>
											<path
												fill="#d8d8d8"
												fillRule="evenodd"
												d="M23.315 35h-4.878V23.498H16v-3.963h2.437v-2.379c0-3.233 1.376-5.156 5.286-5.156h3.255v3.964h-2.035c-1.522 0-1.622.554-1.622 1.588l-.007 1.983H27l-.431 3.963h-3.255V35Z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
									<a href="#twitter" className="footer__social">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 44 44"
										>
											<circle
												cx="22"
												cy="22"
												r="21"
												stroke="#d8d8d8"
												strokeWidth="2"
											/>
											<path
												fill="#d8d8d8"
												fillRule="evenodd"
												d="M30.526 16.846a4.51 4.51 0 0 0 1.893-2.513 8.355 8.355 0 0 1-2.736 1.102A4.194 4.194 0 0 0 26.539 14c-2.38 0-4.307 2.035-4.307 4.544 0 .356.036.703.11 1.034-3.58-.19-6.754-1.997-8.88-4.747a4.724 4.724 0 0 0-.583 2.285c0 1.576.76 2.967 1.917 3.783a4.154 4.154 0 0 1-1.953-.568v.056c0 2.202 1.484 4.04 3.458 4.455-.363.107-.742.16-1.137.16-.277 0-.548-.027-.81-.08.548 1.804 2.139 3.12 4.025 3.155-1.476 1.219-3.333 1.944-5.351 1.944-.348 0-.692-.02-1.028-.062A11.748 11.748 0 0 0 18.604 32c7.926 0 12.257-6.924 12.257-12.929 0-.197-.002-.394-.01-.587A9.005 9.005 0 0 0 33 16.13a8.257 8.257 0 0 1-2.474.715Z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
									<a href="#instagram" className="footer__social">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 44 44"
										>
											<circle
												cx="22"
												cy="22"
												r="21"
												stroke="#d8d8d8"
												strokeWidth="2"
											/>
											<path
												fill="#d8d8d8"
												fillRule="evenodd"
												d="M22 12.982c2.937 0 3.285.011 4.445.064 1.072.05 1.655.228 2.043.379.513.2.88.438 1.264.823.385.385.624.751.823 1.264.15.388.33.97.379 2.043.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445-.05 1.072-.228 1.655-.379 2.043-.2.513-.438.88-.823 1.264a3.408 3.408 0 0 1-1.264.823c-.388.15-.97.33-2.043.379-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.011-4.445-.064-1.072-.049-1.655-.228-2.043-.379-.513-.2-.88-.438-1.264-.823a3.408 3.408 0 0 1-.823-1.264c-.15-.388-.33-.97-.379-2.043-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445.049-1.072.228-1.655.379-2.043.2-.513.438-.88.823-1.264a3.408 3.408 0 0 1 1.264-.823c.388-.15.97-.33 2.043-.379 1.16-.053 1.508-.064 4.445-.064ZM22 11c-2.988 0-3.362.013-4.535.066-1.171.054-1.97.24-2.67.511a5.391 5.391 0 0 0-1.949 1.27 5.391 5.391 0 0 0-1.268 1.948c-.272.7-.458 1.499-.512 2.67C11.013 18.638 11 19.013 11 22c0 2.988.013 3.362.066 4.535.054 1.171.24 1.97.511 2.67a5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.947 1.268c.7.273 1.5.458 2.67.512 1.174.053 1.549.066 4.536.066 2.987 0 3.362-.013 4.535-.066 1.171-.054 1.97-.24 2.67-.511a5.391 5.391 0 0 0 1.949-1.27 5.391 5.391 0 0 0 1.268-1.947c.272-.7.458-1.5.512-2.67.053-1.174.066-1.549.066-4.536 0-2.987-.013-3.362-.066-4.535-.054-1.171-.24-1.97-.511-2.67a5.39 5.39 0 0 0-1.27-1.949 5.39 5.39 0 0 0-1.948-1.268c-.7-.272-1.499-.458-2.67-.512C25.362 11.013 24.987 11 22 11Zm.022 5.369a5.653 5.653 0 1 0 0 11.306 5.653 5.653 0 0 0 0-11.306Zm0 9.322a3.67 3.67 0 1 1 0-7.339 3.67 3.67 0 0 1 0 7.34Zm7.137-9.584a1.31 1.31 0 1 1-2.62 0 1.31 1.31 0 0 1 2.62 0Z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
								<p className="footer__text">
									Donec facilisis tortor ut augue lacinia, at viverra est
									semper. Sed sapien metus, scelerisque nec pharetra id, tempor
									a tortor. Pellentesque non dignissim neque. Ut porta viverra
									est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut
									tincidunt turpis. Integer ac enim pellentesque, adipiscing
									metus id, pharetra odio.
								</p>
							</div>
						</div>
						<p className="footer__copyright">
							Copyright © 2022 Evaluation Governing Association. All Rights
							Reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
