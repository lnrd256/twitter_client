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
      		<div className="col-md-3">
  	    		<LeftSection email={this.props.params.email}/>
  	    	</div>
  	    	<div className="col-md-6 ">


  	    		<div className="">

    					<MainSection email={this.props.params.email}/>

    				</div>
  	    	</div>
  	    	<div className="col-md-3">
  	    		<RightSection/>
  	    	</div>
      	</div>
      </div>
    );
  }
}
