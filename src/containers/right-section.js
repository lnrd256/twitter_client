import React, {Component} from 'react';

export default class RightSection extends Component{
	render(){
		return(
		<div>

			<div className="col-md-12 white_section">
				<div className="trends_header">
					<p>Who to follow</p>
				</div>
				<div className="related_users">
							<div className="col-md-12  content_tweet">
		            			<div className="col-md-3">
		            				<a><img className="tweet_image_2" src="http://localhost:8000/twitter.jpg"/></a>
								</div>
		            			<div className="col-md-8 col-md-offset-1  main_tweet">
									<p>
										<span className="strong fullname">SomeUser </span>
										<span className="text_separator_10 username">@mail</span>

									</p>
									<p>
										<input type="button" className="btn btn-default" value="Follow"/>
									</p>

									<br/>
								</div>

							</div>
							<div className="col-md-12  content_tweet">
		            			<div className="col-md-3">
		            				<a><img className="tweet_image_2" src="http://localhost:8000/twitter.jpg"/></a>
								</div>
		            			<div className="col-md-8 col-md-offset-1  main_tweet">
									<p>
										<span className="strong fullname">SomeUser </span>
										<span className="text_separator_10 username">@mail</span>

									</p>
									<p>
										<input type="button" className="btn btn-default" value="Follow"/>
									</p>

									<br/>
								</div>

							</div>
							<div className="col-md-12  content_tweet">
		            			<div className="col-md-3">
		            				<a><img className="tweet_image_2" src="http://localhost:8000/twitter.jpg"/></a>
								</div>
		            			<div className="col-md-8 col-md-offset-1  main_tweet">
									<p>
										<span className="strong fullname">SomeUser </span>
										<span className="text_separator_10 username">@mail</span>

									</p>
									<p>
										<input type="button" className="btn btn-default" value="Follow"/>
									</p>

									<br/>
								</div>

							</div>




					</div>

			</div>
		</div>



			)
	}
}