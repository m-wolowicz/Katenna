import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Jumbotron from "../../components/Jumbotron";
import Features from "../../components/Features";
import Download from "../../components/Download";
import Footer from "../../components/Footer";
import "./Home.css";



class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<Jumbotron />
				<Features />
				<Download />
				<Footer />
			</div>
		);
	}
}

export default Home;