import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import katennaWhite from '../../img/katennaWhite.svg';

const NavBar = () =>
	<nav className="navbar navbar-dark navbar-expand-lg">
		<div className="container">
			<Link className="navbar-brand" to="/">
				<img src={katennaWhite} alt="KATENNA" id="logo" />
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" id="navMenuIcon">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarText">
				<ul className="navbar-nav ">
					<li className="nav-item">
						<Link to="/">FEATURES</Link>
					</li>
					<li className="nav-item">
						<Link to="/">DOWNLOAD</Link>
					</li>
					<li className="nav-item">
						<Link to="/">PRICING</Link>
					</li>
					<li className="nav-item">
						<Link to="/">CONTACT</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>;

	export default NavBar;
	
