const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.CALLBACK_BASE || 'http://localhost:5000'}/auth/google/callback`
  }, function(accessToken, refreshToken, profile, cb) {
    // In a real app, find or create user in DB here.
    return cb(null, { provider: 'google', profile });
  }));
}

if (process.env.MICROSOFT_CLIENT_ID && process.env.MICROSOFT_CLIENT_SECRET) {
  passport.use(new MicrosoftStrategy({
    clientID: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    callbackURL: `${process.env.CALLBACK_BASE || 'http://localhost:5000'}/auth/microsoft/callback`,
    scope: ['user.read']
  }, function(accessToken, refreshToken, profile, cb) {
    // In a real app, find or create user in DB here.
    return cb(null, { provider: 'microsoft', profile });
  }));
}

passport.serializeUser(function(user, done) { done(null, user); });
passport.deserializeUser(function(obj, done) { done(null, obj); });
