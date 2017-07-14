import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createTweet,fetchTweets,fetchUser,fetchUserTweets} from '../actions/index'

class MainSection extends Component{
		constructor(props){
		super(props);
		this.state={term:'',input:'true'}
		this.onInputChange=this.onInputChange.bind(this);
		this.sendTweet=this.sendTweet.bind(this);
	}
	onInputChange(event){
		this.setState({term:event.target.value})
		if(this.state.term.length>139 ){
			this.setState({input:'true'})
		}else{
			this.setState({input:''})
		}
	}
	sendTweet(){
		if(this.state.term.length<=140 && this.state.term.length>0){
			let form={tweet:this.state.term,user_id:this.props.email};
			this.setState({term:''})
			this.props.createTweet(form).then(()=>{
				this.props.fetchUserTweets(this.props.email);
				this.props.fetchUser(this.props.email);
			});

		}
	}
	componentWillMount(){
		this.props.fetchTweets(this.props.email);
	}
	reply(email){
		this.setState({term:'@'+email+' '})
	}
	newTweets(){
 		this.props.fetchTweets(this.props.email);
 	}
	renderCursos(){
		return(
			this.props.tweets.map((tweet)=>{
	            return(
	            		<div className="col-md-12  content_tweet">
	            			<div className="col-md-1">
	            				<a><img className="tweet_image" src="http://localhost:8000/twitter.jpg"/></a>
							</div>
	            			<div className="col-md-10 col-md-offset-1  main_tweet">
								<p>
									<span className="strong fullname">SomeUser </span>
									<span className="text_separator_10 username">@{tweet.email}</span>

								</p>
								<p>
									{tweet.tweet}
								</p>
								<p className="tweet_section">
									<a className="paddind_left" data-toggle="tooltip" data-placement="top" title="Reply" onClick={() => this.reply(tweet.email)}  href="#"><i className="fa fa-comment-o paddind_left" aria-hidden="true"></i>	</a>
									<a className="paddind_left"  data-toggle="tooltip" data-placement="top" title="Retweet"onClick={() => this.reply(tweet.email)}  href="#"><i className="fa fa-retweet paddind_left" aria-hidden="true"></i>	</a>
									<a className="paddind_left"  data-toggle="tooltip" data-placement="top" title="Like"onClick={() => this.reply(tweet.email)}  href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
									<a className="paddind_left"  data-toggle="tooltip" data-placement="top" title="Message"onClick={() => this.reply(tweet.email)}  href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>

								</p>
							</div>
						</div>

	                     )})
			)
	}
	render(){
		if(!this.props.tweets){
			return (
				<div>Loading...</div>
				)
		}else
		return(
			<div className=" ">
				<div className="col-md-12 white_section top_main" >

					<div className="col-md-1">
						<img className="tweet_image_2" src="http://localhost:8000/twitter.jpg"/>
					</div>
					<div className="col-md-11">
						<textarea
						className="form-control tweet"
						onChange={this.onInputChange}
						value={this.state.term}
						></textarea>
						<div className="col-md-12 text_right">
							<span className="characters">{140-this.state.term.length} </span>
							<input type="button" className="btn btn-info right" id="" onClick={this.sendTweet} disabled={this.state.input} value="Tweet"/>
						</div>


					</div>


				</div>
				<div className="col-md-12 older">
					<a href="#" onClick={() => this.newTweets()}>
						<div className="col-md-12 center new_tweets">
							<br/>
							<span>Load New Tweets</span>

						</div>
					</a>


				</div>
				<div className="col-md-12 white">
					{this.renderCursos()}


				</div>




			</div>
			)
	}
}

function mapStateToPropos(state){
	return {tweets:state.toJS().tweets.all}

}
export default connect(mapStateToPropos,{createTweet,fetchTweets,fetchUser,fetchUserTweets})(MainSection);