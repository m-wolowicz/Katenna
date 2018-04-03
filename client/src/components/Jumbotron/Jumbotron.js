import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<div className="jumbotron jumbotron-fluid align-middle">
	<div className="container align-middle">
		<div className="row jumboSpace align-middle">
			<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 align-middle">
				<h1 className="display-4">Fluid jumbotron</h1>
				<p className="lead">The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, while protecting the bottom-line.</p>
				<a className="btn btn-round btn-outline-light w-150" href="/">Log In</a>
				<a className="btn btn-round btn-light w-150 ml-3" href="/">Sign Up</a>
			</div>
			<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center align-middle">
			<img src="http://via.placeholder.com/400x300" alt="Desktop Admin Panel"/>
			</div>
		</div>
	</div>
	</div>
);

export default Jumbotron;
