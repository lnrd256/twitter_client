import axios from 'axios';
import qs from 'qs';
export const FETCH_USER='FETCH_USER';
export const FETCH_TWEETS='FETCH_TWEETS';
export const CREATE_TWEET='CREATE_TWEET';
const ROOT_URL='http://localhost:8000'
export function fetchUser(id){
	const request =axios.get(`${ROOT_URL}/user/${id}`)
	return{
		type: FETCH_USER,
		payload:request
	}
}
export function fetchTweets(id){
	const request =axios.get(`${ROOT_URL}/usertweet/${id}`)
	return{
		type: FETCH_TWEETS,
		payload:request
	}
}

export function createTweet(props){
	const request = axios.post(`${ROOT_URL}/tweet`,qs.stringify(props))
	return{
		type: CREATE_TWEET,
		payload:request
	}
}