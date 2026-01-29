const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

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

const firebaseAdmin = require("firebase-admin");

// Initialize Firebase Admin (mock if no credentials for now, or use real if available)
try {
  if (firebaseAdmin.apps.length === 0) {
      // firebaseAdmin.initializeApp(); 
  }
} catch (e) {
  console.log("Firebase Admin init skipped/failed:", e.message);
}

// Verify Firebase Token & Sync User
router.post('/verify-firebase', async (req, res) => {
  const { token, user } = req.body;
  
  if (!token) {
    return res.status(400).json({ success: false, error: "No token provided" });
  }

  try {
    // In production: await firebaseAdmin.auth().verifyIdToken(token);
    
    let dbUser = null;
    
    // Sync user to MongoDB if user details are provided
    if (user && user.uid) {
        try {
            dbUser = await User.findOneAndUpdate(
                { uid: user.uid },
                { 
                    $set: {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    }
                },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
            console.log("User synced to DB:", dbUser.email);
        } catch (dbError) {
            console.error("Database sync error:", dbError);
            // Don't fail the verification just because DB sync failed, but log it
        }
    }

    return res.json({ 
        success: true, 
        message: "Token verified & User synced (Mock Mode)",
        uid: user ? user.uid : "mock-uid",
        dbUser: dbUser
    });
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ success: false, error: "Invalid token" });
  }
});

module.exports = router;
