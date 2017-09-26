import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter as Router } from 'react-router-dom';
import reducers from '../src/reducers';

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!doctype html><html><body></body></html>`);
global.document = dom.window.document;
global.window = global.document.defaultView;
global.navigator = window.navigator;
const $ = _$(global.window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
	const componentInstance = ReactTestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	);

	return $(ReactDOM.findDOMNode(componentInstance));
}
function renderRouterComponent(ComponentClass, props = {}, state = {}) {
	const componentInstance = ReactTestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<Router>
				<ComponentClass {...props} />
			</Router>
		</Provider>
	);

	return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
	if (value) {
		this.val(value);
	}
	ReactTestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, renderRouterComponent, expect };
