import React, { Component } from 'react';

import TopBar from '../containers/top-bar';
import LeftSection from '../containers/left-section';
import RightSection from '../containers/right-section';
import MainSection from '../containers/main-section';

export default class App extends Component {

  render() {
    return (
      <div>
      	<TopBar/>
      	<div className="container">
      		<div className="col-md-3 col-xs-3 col-sm-3">
  	    		<LeftSection email={this.props.params.email?this.props.params.email:1}/>
  	    	</div>
  	    	<div className="col-md-6 col-md-6 col-xs-6 col-sm-6">


  	    		<div className="">

    					<MainSection email={this.props.params.email?this.props.params.email:1}/>

    				</div>
  	    	</div>
  	    	<div className="col-md-3 col-xs-3 col-sm-3">
  	    		<RightSection email={this.props.params.email?this.props.params.email:1}/>
  	    	</div>
      	</div>
      </div>
    );
  }
}
