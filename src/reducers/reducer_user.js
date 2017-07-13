import {FETCH_USER} from '../actions/index';
import Immutable from 'immutable';
const INITIAL_STATE=Immutable.fromJS({
	all:[],
	user:null
});
export default function(state=INITIAL_STATE,action){
	switch(action.type){
		case FETCH_USER:
		return state
				.set('user',action.payload.data)
	default:
		return state;
	}
}