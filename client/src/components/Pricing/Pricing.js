import React from "react";
import "./Pricing.css";

const Pricing = () =>
<div className="container-fluid" id="priceContFlu">
	<div className="container">
		<div className="row" id="priceText">
			<h3>Pricing / Plans</h3>
			<hr />
			<p>Choose any of the following plans to get start with. You can start with the FREE plan to see our web application at first. You can always change your plan from your account.</p>
		</div>
		<div className="card-group">
			<div className="card">
				<img className="card-img-top" src="..." alt="Card cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card  cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
		</div>
	</div>
</div>
;

export default Pricing;
