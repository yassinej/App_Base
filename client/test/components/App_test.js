import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/App';

describe('App', () => {
	let component;

	beforeEach(() => {
		//TODO: Solve issue with the use of react router.
		component = renderComponent(App);
	});
	it('renders App component', () => {
		expect(component).to.exist;
	});
});
