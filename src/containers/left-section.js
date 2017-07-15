import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index'
 class LeftSection extends Component{
	componentWillMount(){

		this.props.fetchUser(this.props.email);

	}
	renderUser(){
		return(

			<div className="col-md-12 white_section top_left_section">
			{console.log(this.props)}
				<div className="header_profile"></div>
					<div className="row">
						<div className="col-md-5 col-sm-5 col-xs-5 ">

							<img className="tweet_image_3" src="http://localhost:8000/twitter.jpg"/>

						</div>
						<div className="col-md-7 col-sm-7 col-xs-7">
							<div className="">
								<h4>User name </h4>
								<p className="username_id">@{this.props.user.email}</p>
							</div>

						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-4 col-xs-4 profile_footer">
							<a href="">Tweets<br/> <span className="count_footer">{this.props.user.tweets}</span></a>

						</div>
						<div className="col-md-4 col-sm-4 col-xs-4 profile_footer">
							<a href="">Following<br/><span className="count_footer">{this.props.user.following}</span> </a>

						</div>
						<div className="col-md-4 col-sm-4 col-xs-4 profile_footer">
							<a href="">Followers<br/><span className="count_footer"> {this.props.user.follower}</span> </a>

						</div>
					</div>



			</div>
			)
	}
	render(){
		if(!this.props.user){
			return (<div>Loading</div>)
		}
		return(

		<div>
			{this.renderUser()}

			<div className="col-md-12 white_section">
				<div className="trends_header">
					<p>Trends</p>
				</div>
				<div className="trends_body">

					<a href="">#WebGains <br/> <div className="info_trends">2K tweets</div><p></p></a>
					<a href="">#Development <br/> <div className="info_trends">2K tweets</div><p></p></a>
					<a href="">React <br/> <div className="info_trends">2K tweets</div><p></p></a>
					<a href=""> Laravel<br/> <div className="info_trends">2K tweets</div><p></p></a>
				</div>
			</div>
		</div>



			)
	}
}
function mapStateToPropos(state){
	return {user:state.toJS().users.user}
}
export default connect(mapStateToPropos,{fetchUser})(LeftSection);