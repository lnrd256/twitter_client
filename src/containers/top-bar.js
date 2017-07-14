import React, {Component} from 'react';

export default class TopBar extends Component{
	render(){
		return (
		<header className="clearfix">
                <div className="navbar navbar-default">
                	<div className="container centered">
	                	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1 container">
	                        <ul className="nav navbar-nav navbar-left">
	                            <li><a className="active" href="#"><strong><span className="glyphicon glyphicon-home"></span> Home</strong></a></li>
	                            <li><a href="#"><strong><span className="glyphicon glyphicon-bell"></span>Notifications</strong></a></li>
	                            <li><a href="#"><strong><span className="glyphicon glyphicon-envelope"></span> Messages</strong></a></li>
	                        </ul>
	                        <ul className="nav navbar-nav navbar-center">
	                            <img className="icon" src="http://localhost:8000/incon.png"/>
	                        </ul>


	                        <ul className="nav navbar-nav navbar-right">

	                          <form action="" className="search-form">
	                          		<div className="tweet_topbar ">
					            		<input type="button" className="btn btn-info button_bar" name="search" id="search" value="Tweet"/>

					            	</div>
	                          		<div className="image_right ">
					            		<img className="icon" src="http://localhost:8000/twitter.jpg"/>
					            	</div>

					                <div className="form-group has-feedback">
					            		<label for="search" className="sr-only"></label>
					            		<input type="text" className="form-control" name="search" id="search" placeholder="Search Tweet"/>
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