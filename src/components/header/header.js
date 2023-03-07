import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
	const [menu_open, set_menu_open] = useState(false);
	return (
		<header className="header">
			<div
				className={
					menu_open
						? "header__container header__container--open"
						: "header__container"
				}
			>
				<Link to="/" className="header__logo">
					<img
						src={require("../../img/logo.png")}
						alt=""
						className="header__logo"
					/>
				</Link>
				<div className="menu">
					<NavLink
						className={({ isActive }) =>
							isActive ? "menu__item menu__item--active" : "menu__item"
						}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "menu__item menu__item--active" : "menu__item"
						}
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "menu__item menu__item--active" : "menu__item"
						}
						to="/pledge"
					>
						Pledge
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "menu__item menu__item--active" : "menu__item"
						}
						to="/reports"
					>
						Reports
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "menu__item menu__item--active" : "menu__item"
						}
						to="/faq"
					>
						FAQ
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "menu__item menu__item--active" : "menu__item"
						}
						to="/contact"
					>
						Contact Us
					</NavLink>
				</div>

				<div className="header__btn">
					<NavLink
						to="/member"
						className={({ isActive }) => (isActive ? "btn btn--black" : "btn")}
					>
						Become a member
					</NavLink>
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
						<NavLink
							className={({ isActive }) =>
								isActive
									? "mobile-menu__item mobile-menu__item--active"
									: "mobile-menu__item"
							}
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "mobile-menu__item mobile-menu__item--active"
									: "mobile-menu__item"
							}
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "mobile-menu__item mobile-menu__item--active"
									: "mobile-menu__item"
							}
							to="/pledge"
						>
							Pledge
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "mobile-menu__item mobile-menu__item--active"
									: "mobile-menu__item"
							}
							to="/reports"
						>
							Reports
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "mobile-menu__item mobile-menu__item--active"
									: "mobile-menu__item"
							}
							to="/faq"
						>
							FAQ
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "mobile-menu__item mobile-menu__item--active"
									: "mobile-menu__item"
							}
							to="/contact"
						>
							Contact Us
						</NavLink>
					</div>
					<NavLink
						to="/member"
						className={({ isActive }) =>
							isActive
								? "mobile-menu__item mobile-menu__item--active"
								: "mobile-menu__item"
						}
					>
						Become a member
					</NavLink>
				</div>
			</div>
		</header>
	);
}
export default Header;
