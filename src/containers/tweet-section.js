import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createTweet,fetchTweets,fetchUser} from '../actions/index'
 class TweetSection extends Component{
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
			let form={tweet:this.state.term,user_id:1};
			this.setState({term:''})
			this.props.createTweet(form).then(()=>{
				this.props.fetchTweets(1);
				this.props.fetchUser(1);
			});

		}
	}
	render(){
		return(
			<div className="col-md-12">
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
			)
	}
}
 function mapStateToPropos(state){
	return {tweets:state.toJS().tweets.all}

}

export default connect(mapStateToPropos,{createTweet,fetchTweets,fetchUser})(TweetSection);