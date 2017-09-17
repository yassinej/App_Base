const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app, passport) => {
	app.get('/', requireAuth, (req, res) => {
		res.send({ message: 'Special Feature is Pack your gear' });
	});
	app.post('/signup', Authentication.signup);
	app.post('/signin', requireSignin, Authentication.signin);

	// google ---------------------------------
	// send to google to do the authentication
	app.get(
		'/auth/google',
		passport.authenticate('google', { scope: ['profile', 'email'] })
	);

	// the callback after google has authenticated the user
	app.get(
		'/auth/google/callback',
		passport.authenticate('google', { failureRedirect: '/login' }),
		(req, res) => {
			res.redirect('/protected');
		}
	);
	// facebook ---------------------------------
	// send to facebook to do the authentication
	app.get('/auth/facebook', passport.authenticate('facebook'));

	app.get(
		'/auth/facebook/callback',
		passport.authenticate('facebook', { failureRedirect: '/login' }),
		(req, res) => {
			// Successful authentication, redirect home.
			res.redirect('/protected');
		}
	);
};
