import React, {Component} from 'react';

export default class TopBar extends Component{
	render(){
		return (
		<header className="clearfix">
                <div className="navbar navbar-default">
                	<div className="container">
	                	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1 container">
	                        <ul className="nav navbar-nav navbar-left">
	                            <li><a href="#"><strong><span className="glyphicon glyphicon-home"></span> Home</strong></a></li>
	                            <li><a href="#"><strong><span className="glyphicon glyphicon-bell"></span>Notifications</strong></a></li>
	                            <li><a href="#"><strong><span className="glyphicon glyphicon-envelope"></span> Messages</strong></a></li>
	                        </ul>
	                        <ul className="nav navbar-nav navbar-right">
	                          <form action="" className="search-form">
					                <div className="form-group has-feedback">
					            		<label for="search" className="sr-only">Search Tweet</label>
					            		<input type="text" className="form-control" name="search" id="search" placeholder="search"/>
					              		<span className="glyphicon glyphicon-search form-control-feedback"></span>
					            	</div>
					            </form>
	                        </ul>
	                    </div>

                	</div>


                </div>
            </header>

			);
	}
}