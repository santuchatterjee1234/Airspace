import React from "react";
import Home from "./Home";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
	<div>
   		<Router>
			<header class="navigation">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<nav class="navbar">
								<div class="container-fluid">
									<div class="navbar-header">
										<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										</button>
										<Link to="/" class="navbar-brand" href="index.html">
											<img src="images/logo.png" alt="Logo"/>
										</Link>
									</div>
								
									<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
										<ul class="nav navbar-nav navbar-right">
											<li>
												<Link to="/">Home</Link>
											</li>
											<li>
												<Link to="/service">Service</Link>
											</li>
											<li>
												<Link to="/portfolio">Portfolio</Link>
											</li>
											<li>
												<Link to="/blog">Blog</Link>
											</li>
											<li>
												<Link to="/contact">Contact</Link>
											</li>
										</ul>
										</div>
										</div>
									</nav>
								</div>
							</div>
						</div>
			</header>


				<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/service">
					<Service />
				</Route>
				<Route exact path="/portfolio">
					<Portfolio />
				</Route>
				<Route exact path="/blog">
					<Blog />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				</Switch>
			
    	</Router>
		<footer class="footer">
			<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="footer-manu">
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Contact us</a></li>
							<li><a href="#">How it works</a></li>
							<li><a href="#">Support</a></li>
							<li><a href="#">Terms</a></li>
						</ul>
					</div>
					<p class="copyright">Copyright 2021 All rights reserved.
					</p>
				</div>
			</div>
			</div>
		</footer>
	</div>	
  );
}
