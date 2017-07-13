import React, {Component} from 'react';

export default class TopBar extends Component{
	render(){
		return (
				<div className="top_bar">
					<nav className="navbar navbar-default">
						<div className="col-md-6">
						<ul className="menu_list">
							<li><a href="">Home</a></li>
							<li><a href="">Notifications</a></li>
							<li><a href="">Menssages</a></li>
						</ul>
					</div>

					<div className="menuRight col-md-5">

						<div className="input-group">
					      <input type="text" className="form-control" placeholder="Search Twitter..."/>
					      <span className="input-group-btn">
					        <button className="btn btn-default" type="button">Go!</button>
					      </span>
					    </div>
					</div>
					<div className="menuRight col-md-1">



					</div>

					</nav>

				</div>
			);
	}
}