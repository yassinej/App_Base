import { renderRouterComponent, expect, $ } from '../test_helper';
import Landing from '../../src/components/Landing';

describe('Landing', () => {
	let component;

	beforeEach(() => {
		component = renderRouterComponent(Landing);
	});
	describe('Generic Behaviour', () => {
		it('has the correct class', () => {
			expect(component).to.have.class('Landing');
		});
		it('has a Landing BackgroundImage', () => {
			expect(component.find('div').css('backgroundImage')).to.exist;
		});
		it('has a Landing Message', () => {
			expect(component.find('p')).to.exist;
		});
		it('has a Get Started Button ', () => {
			expect(component.find('button')).to.exist;
		});
	});
});
