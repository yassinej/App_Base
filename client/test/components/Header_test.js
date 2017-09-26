import { renderRouterComponent, expect, $ } from '../test_helper';
import Header from '../../src/components/Header';

describe('Header', () => {
	let component, links;

	beforeEach(() => {
		component = renderRouterComponent(Header);
	});
	describe('Generic Behaviour', () => {
		it('has the correct class', () => {
			expect(component).to.have.class('header');
		});
		it('has a Nav', () => {
			expect(component.find('nav')).to.exist;
		});
		it('has a collapsable button', () => {
			expect(component.find('button'))
				.attr('data-toggle')
				.to.equal('collapse');
		});
		it('has a toogle icon ', () => {
			expect(component.find('span')).to.have.class('navbar-toggler-icon');
		});
		it('has a Navbar', () => {
			expect(component.find('ul')).to.have.class('navbar-nav');
		});
	});
	describe('Specific Behaviour', () => {
		it('has a link to home in 1st position', () => {
			expect(component.find('li:nth-child(1) a').attr('href')).to.equal('/');
		});
		it('has a link to dashboard in 2nd position', () => {
			expect(component.find('li:nth-child(2) a').attr('href')).to.equal(
				'/dashboard'
			);
		});
		it('has a link to About in 3rd position', () => {
			expect(component.find('li:nth-child(3) a').attr('href')).to.equal(
				'/about'
			);
		});
		describe('If signed Out', () => {
			it('has a link to Signin', () => {
				expect(
					component.find('ul:nth-child(2)  li:nth-child(1) a').attr('href')
				).to.equal('/signin');
			});
			it('has a link to Signup', () => {
				expect(
					component.find('ul:nth-child(2)  li:nth-child(2) a').attr('href')
				).to.equal('/signup');
			});
		});
		describe('If Signed In', () => {
			beforeEach(() => {
				//TODO: Add Signin mockUp
			});
			it('has a link to Signout', () => {
				expect(
					component.find('ul:nth-child(2)  li:nth-child(1) a').attr('href')
				).to.equal('/signout');
			});
			it('has a link to Myaccount', () => {
				expect(
					component.find('ul:nth-child(2)  li:nth-child(2) a').attr('href')
				).to.equal('/account');
			});
		});
	});
});
