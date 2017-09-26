import axios from 'axios';
import history from '../helpers/history';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://localhost:5000';

export function authError(error) {
	return { type: AUTH_ERROR, payload: error };
}
export function signoutUser() {
	localStorage.removeItem('token');
	return { type: UNAUTH_USER };
}
export function signinUser({ email, password }) {
	return function(dispatch) {
		//Submit email/password to the server
		axios.post(`${API_URL}/signin`, { email, password }).then(
			response => {
				//if auth is ok then
				//save JWT
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				//forward to /feature
				history.push('/dashboard');
				//update state to show that user is authenticated
			},
			error => {
				//if auth is KO
				//dispatch proper Error Message
				dispatch(authError('Check Username and/or Password.'));
			}
		);
	};
}
export function signupUser({ email, password }) {
	return function(dispatch) {
		//Submit email/password to the server
		axios.post(`${API_URL}/signup`, { email, password }).then(
			response => {
				//if auth is ok then
				//save JWT
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				//forward to /feature
				history.push('/dashboard');
				//update state to show that user is authenticated
			},
			error => {
				//if auth is KO
				//dispatch proper Error Message
				dispatch(authError(error.response.data.error));
			}
		);
	};
}
