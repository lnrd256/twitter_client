import {FETCH_TWEETS} from '../actions/index';
import Immutable from 'immutable';
const INITIAL_STATE=Immutable.fromJS({
	all:[],
	tweet:null
});
export default function(state=INITIAL_STATE,action){
	switch(action.type){
		case FETCH_TWEETS:
		return state
				.set('all',action.payload.data)
	default:
		return state;
	}
}