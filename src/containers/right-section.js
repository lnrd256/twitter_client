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
					<p>
						<span className="text_separator_10">Leonardo</span><a href="">@LeonardoAleman <br/> <div className="info_trends"></div><p></p></a>
						 <input type="button" className="btn btn-default" value="Follow"/>
					</p>
					<hr/>
					<p>
						<span className="text_separator_10">Leonardo</span><a href="">@LeonardoAleman <br/> <div className="info_trends"></div><p></p></a>
						 <input type="button" className="btn btn-info" value="Follow"/>
					</p>
					<hr/>
					<p>
						<span className="text_separator_10">Leonardo</span><a href="">@LeonardoAleman <br/> <div className="info_trends"></div><p></p></a>
						 <input type="button" className="btn btn-info" value="Follow"/>
					</p>
					<hr/>


				</div>
			</div>
		</div>



			)
	}
}