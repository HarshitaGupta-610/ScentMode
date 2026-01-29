const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Start OAuth flows
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/microsoft', passport.authenticate('microsoft'));

// Callbacks
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: `${FRONTEND_URL}/login` }),
  function(req, res) {
    const payload = { provider: 'google', profile: req.user.profile };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    res.redirect(`${FRONTEND_URL}/oauth-callback?token=${token}`);
  }
);

router.get('/microsoft/callback',
  passport.authenticate('microsoft', { session: false, failureRedirect: `${FRONTEND_URL}/login` }),
  function(req, res) {
    const payload = { provider: 'microsoft', profile: req.user.profile };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    res.redirect(`${FRONTEND_URL}/oauth-callback?token=${token}`);
  }
);

module.exports = router;
