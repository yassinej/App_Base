import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import { AUTH_USER } from './actions/types';
import './assets/styles/index.scss';
import 'bootstrap/scss/bootstrap.scss';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const token = localStorage.getItem('token');
const store = createStoreWithMiddleware(reducers);
if (token) store.dispatch({ type: AUTH_USER });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
