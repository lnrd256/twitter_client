import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index'
 class RightSection extends Component{
 	componentWillMount(){
 		this.props.fetchUsers(this.props.email);
 	}
 	listRecommendedUsers(){
 		console.log(this.props.users)
 		return(
 			this.props.users.map((user)=>{
 				return(
	            	<div className="col-md-12  content_tweet">
		            			<div className="col-md-3">
		            				<a><img className="tweet_image_2" src="http://localhost:8000/twitter.jpg"/></a>
								</div>
		            			<div className="col-md-8 col-md-offset-1  main_tweet">
									<p>
										<span className="strong fullname">SomeUser </span>
										<span className="text_separator_10 username">@{user.email.substring(0, 3)}..</span>

									</p>
									<p>
										<input type="button" className="btn btn-default" value="Follow"/>
									</p>

									<br/>
								</div>

							</div>

	            )})

 			)

 	}

	render(){
		return(
		<div>

			<div className="col-md-12 white_section">
				<div className="trends_header">
					<p>Who to follow</p>
				</div>

				<div className="related_users">

							{this.listRecommendedUsers()}





					</div>

			</div>
		</div>



			)
	}
}
function mapStateToPropos(state){
	return {users:state.toJS().users.all}
}

export default connect(mapStateToPropos,{fetchUsers})(RightSection)