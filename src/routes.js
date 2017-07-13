import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
// import Index from '/.components/index';

export default (
	<Route path="/" component={App}>
		<Route path="/:email" component={App}/>
	</Route>
);